"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hexagonal microgrid network hero overlay.
 *
 * Unlike a random point cloud, this renders a *structured* hex lattice of
 * nodes (representing distributed microgrid connection points) wired
 * together in a fixed grid. The lattice itself stays still — it's a
 * schematic, not a snow-globe — while pulses of light (the accent orange)
 * periodically travel along the edges between nodes, like current flowing
 * through a distribution grid.
 */

const BRAND_GREEN = 0x30a349;
const NAVY = 0x192d41;
const ACCENT = 0xfda822;

const HEX_RADIUS = 7; // rings of hexagons out from center
const HEX_SIZE = 0.62; // spacing between adjacent nodes
const MAX_PULSES = 26;
const PULSE_DURATION = 1.35; // seconds to travel one edge
const SPAWN_INTERVAL = 0.09; // seconds between spawn attempts

// Axial hex neighbor directions (pointy-top)
const AXIAL_DIRS: [number, number][] = [
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
];

function axialToPoint(q: number, r: number, size: number): [number, number] {
  const x = size * Math.sqrt(3) * (q + r / 2);
  const y = size * 1.5 * r;
  return [x, y];
}

function makeGlowTexture(color: string): THREE.Texture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, color);
  gradient.addColorStop(0.35, color);
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

type Pulse = {
  active: boolean;
  edge: number;
  t: number;
  reverse: boolean;
};

export default function GridNetworkHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      Math.max(mount.clientWidth, 1) / Math.max(mount.clientHeight, 1),
      0.1,
      100
    );
    camera.position.set(0, -0.5, 13);
    camera.rotation.x = 0.08;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // --- Build the hex lattice (axial coords within HEX_RADIUS rings) ---
    const nodeKey = (q: number, r: number) => `${q},${r}`;
    const nodeIndex = new Map<string, number>();
    const nodePositions: THREE.Vector3[] = [];

    for (let q = -HEX_RADIUS; q <= HEX_RADIUS; q++) {
      const rMin = Math.max(-HEX_RADIUS, -q - HEX_RADIUS);
      const rMax = Math.min(HEX_RADIUS, -q + HEX_RADIUS);
      for (let r = rMin; r <= rMax; r++) {
        const [x, y] = axialToPoint(q, r, HEX_SIZE);
        nodeIndex.set(nodeKey(q, r), nodePositions.length);
        nodePositions.push(new THREE.Vector3(x, y, 0));
      }
    }

    // Edges: connect each node to two of its six neighbors to avoid
    // double-counting (the other four get picked up from the neighbor side).
    const edges: [number, number][] = [];
    for (let q = -HEX_RADIUS; q <= HEX_RADIUS; q++) {
      const rMin = Math.max(-HEX_RADIUS, -q - HEX_RADIUS);
      const rMax = Math.min(HEX_RADIUS, -q + HEX_RADIUS);
      for (let r = rMin; r <= rMax; r++) {
        const aIdx = nodeIndex.get(nodeKey(q, r))!;
        for (const [dq, dr] of AXIAL_DIRS.slice(0, 3)) {
          const bKey = nodeKey(q + dq, r + dr);
          const bIdx = nodeIndex.get(bKey);
          if (bIdx !== undefined) {
            edges.push([aIdx, bIdx]);
          }
        }
      }
    }

    // Center + scale the whole lattice to comfortably fill the frame.
    const bounds = new THREE.Box3();
    nodePositions.forEach((p) => bounds.expandByPoint(p));
    const center = bounds.getCenter(new THREE.Vector3());
    nodePositions.forEach((p) => p.sub(center));

    // Static lattice lines (subdued green/navy blend).
    const linePositions = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      const pa = nodePositions[a];
      const pb = nodePositions[b];
      linePositions.set([pa.x, pa.y, pa.z, pb.x, pb.y, pb.z], i * 6);
    });
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const latticeColor = new THREE.Color(BRAND_GREEN).lerp(
      new THREE.Color(NAVY),
      0.55
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: latticeColor,
      transparent: true,
      opacity: 0.32,
    });
    const lattice = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lattice);

    // Static node dots.
    const nodePosArray = new Float32Array(nodePositions.length * 3);
    nodePositions.forEach((p, i) => {
      nodePosArray.set([p.x, p.y, p.z], i * 3);
    });
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePosArray, 3));
    const nodeGlowTex = makeGlowTexture("rgba(48,163,73,0.9)");
    const nodeMat = new THREE.PointsMaterial({
      size: 0.16,
      map: nodeGlowTex,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    group.add(nodePoints);

    // Pulses traveling along edges.
    const pulses: Pulse[] = Array.from({ length: MAX_PULSES }, () => ({
      active: false,
      edge: 0,
      t: 0,
      reverse: false,
    }));
    const pulsePosArray = new Float32Array(MAX_PULSES * 3).fill(9999);
    const pulseGeo = new THREE.BufferGeometry();
    pulseGeo.setAttribute("position", new THREE.BufferAttribute(pulsePosArray, 3));
    const pulseGlowTex = makeGlowTexture("rgba(253,168,34,0.95)");
    const pulseMat = new THREE.PointsMaterial({
      size: 0.42,
      map: pulseGlowTex,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const pulsePoints = new THREE.Points(pulseGeo, pulseMat);
    group.add(pulsePoints);

    function spawnPulse() {
      const slot = pulses.find((p) => !p.active);
      if (!slot) return;
      slot.active = true;
      slot.edge = Math.floor(Math.random() * edges.length);
      slot.t = 0;
      slot.reverse = Math.random() < 0.5;
    }

    // Fit the lattice into view based on the mount's aspect ratio.
    function fitCamera() {
      if (!mount) return;
      const size = bounds.getSize(new THREE.Vector3());
      const aspect = mount.clientWidth / mount.clientHeight;
      const targetWidth = size.x * 1.05;
      const targetHeight = size.y * 1.15;
      const fitHeightDistance =
        targetHeight / 2 / Math.tan((Math.PI * camera.fov) / 360);
      const fitWidthDistance = targetWidth / 2 / (Math.tan((Math.PI * camera.fov) / 360) * aspect);
      camera.position.z = Math.max(fitHeightDistance, fitWidthDistance, 8);
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    }
    fitCamera();

    let frameId = 0;
    let lastTime = performance.now();
    let spawnTimer = 0;

    function renderOnce() {
      renderer.render(scene, camera);
    }

    function animate(now: number) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      spawnTimer += dt;
      while (spawnTimer > SPAWN_INTERVAL) {
        spawnTimer -= SPAWN_INTERVAL;
        if (Math.random() < 0.6) spawnPulse();
      }

      const positions = pulseGeo.attributes.position.array as Float32Array;
      pulses.forEach((pulse, i) => {
        if (!pulse.active) {
          positions[i * 3] = 9999;
          positions[i * 3 + 1] = 9999;
          positions[i * 3 + 2] = 9999;
          return;
        }
        pulse.t += dt / PULSE_DURATION;
        if (pulse.t >= 1) {
          pulse.active = false;
          positions[i * 3] = 9999;
          positions[i * 3 + 1] = 9999;
          positions[i * 3 + 2] = 9999;
          return;
        }
        const [aIdx, bIdx] = edges[pulse.edge];
        const from = pulse.reverse ? nodePositions[bIdx] : nodePositions[aIdx];
        const to = pulse.reverse ? nodePositions[aIdx] : nodePositions[bIdx];
        const x = from.x + (to.x - from.x) * pulse.t;
        const y = from.y + (to.y - from.y) * pulse.t;
        const z = from.z + (to.z - from.z) * pulse.t;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      });
      pulseGeo.attributes.position.needsUpdate = true;

      // Very gentle drift so the lattice reads as alive without distracting
      // from legibility of the text sitting on top of it.
      group.rotation.z = Math.sin(now * 0.00005) * 0.02;

      renderOnce();
      frameId = requestAnimationFrame(animate);
    }

    if (prefersReducedMotion) {
      renderOnce();
    } else {
      frameId = requestAnimationFrame(animate);
    }

    function onResize() {
      if (!mount) return;
      fitCamera();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      if (prefersReducedMotion) renderOnce();
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      lineGeo.dispose();
      lineMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      nodeGlowTex.dispose();
      pulseGeo.dispose();
      pulseMat.dispose();
      pulseGlowTex.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen"
      aria-hidden
    />
  );
}
