"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV: {
  label: string;
  href: string;
  children?: { href: string; label: string }[];
}[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { href: "/about", label: "Who We Are" },
      { href: "/team", label: "Our Team" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/service" },
  { label: "Partners", href: "/partners" },
  {
    label: "Resources",
    href: "/faqs",
    children: [
      { href: "/faqs", label: "FAQs" },
      { href: "/grm", label: "Grievance Redress" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/electrify-logo.svg"
            alt="Electrify MicroGrid"
            width={183}
            height={42}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-text hover:text-brand transition-colors"
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>
                {openGroup === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="w-56 rounded-xl border border-border bg-white p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm font-medium text-text hover:bg-surface hover:text-brand transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold uppercase tracking-wide text-text hover:text-brand transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark hover:shadow-md transition-all"
          >
            Get Started
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-text"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-white px-6 py-5 flex flex-col gap-1 shadow-lg max-h-[80vh] overflow-y-auto">
          {NAV.map((item) =>
            item.children ? (
              <details key={item.href} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-sm font-semibold uppercase tracking-wide text-text">
                  {item.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-open:rotate-180">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="flex flex-col gap-1 pb-2 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="py-2 text-sm text-text-secondary hover:text-brand"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="py-2.5 text-sm font-semibold uppercase tracking-wide text-text hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="mt-3 rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
