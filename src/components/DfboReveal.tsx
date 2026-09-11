"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type DfboStep = {
  title: string;
  text: string;
};

export default function DfboReveal({ steps }: { steps: DfboStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-dfbo-card]")
    );

    if (prefersReducedMotion) {
      gsap.set(cards, { opacity: 1, y: 0, rotateX: 0, scale: 1 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        opacity: 0,
        y: 64,
        scale: 0.9,
        rotateX: -35,
        transformPerspective: 800,
        transformOrigin: "50% 100%",
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      }).to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.18,
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      style={{ perspective: "1000px" }}
    >
      {steps.map((d, i) => (
        <div
          key={d.title}
          data-dfbo-card
          className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-shadow duration-300"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white text-sm font-bold mb-4">
            {i + 1}
          </div>
          <h3 className="font-semibold text-brand mb-2">{d.title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {d.text}
          </p>
        </div>
      ))}
    </div>
  );
}
