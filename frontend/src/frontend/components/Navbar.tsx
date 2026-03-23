"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "../data/portfolio";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-widest text-white"
        >
          {siteConfig.initials}
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-mono text-[0.65rem] uppercase tracking-[0.2em] transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-white transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-white/5 bg-[#050505]/95 px-6 pb-6 pt-4 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
