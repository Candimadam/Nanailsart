"use client";

import { useState } from "react";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="navbar"
      className="sticky top-0 z-[100] w-full border-b border-[#f0e4da]/60 bg-white/80 backdrop-blur-xl transition-all duration-300"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <span className="text-2xl sm:text-[1.7rem] font-serif font-bold tracking-tight text-foreground transition-colors group-hover:text-[#c4917b]">
            Nanails{" "}
            <span className="font-light italic text-[#c4917b]">Art</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[#5a4a42] transition-colors duration-200 hover:text-[#c4917b]"
            >
              {link.label}
            </a>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-2">
            <a
              href="https://instagram.com/nanailsart02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#e8ddd5] transition-all duration-200 hover:border-[#c4917b] hover:bg-[#c4917b]/10"
            >
              <svg
                className="h-4 w-4 text-[#5a4a42] transition-colors group-hover:text-[#c4917b]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@nanailsart02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#e8ddd5] transition-all duration-200 hover:border-[#c4917b] hover:bg-[#c4917b]/10"
            >
              <svg
                className="h-4 w-4 text-[#5a4a42] transition-colors group-hover:text-[#c4917b]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46 6.28 6.28 0 001.86-4.49V9.38a8.18 8.18 0 004.72 1.5V7.43a4.85 4.85 0 01-1-.74z" />
              </svg>
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/6289678730504"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-[#c4917b] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#c4917b]/25 transition-all duration-300 hover:bg-[#b07d68] hover:shadow-lg hover:shadow-[#c4917b]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${isOpen ? "translate-y-1.25 rotate-45" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${isOpen ? "-translate-y-1.25 -rotate-45" : ""
              }`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-[100] flex min-h-dvh flex-col items-center justify-center gap-8 overflow-y-auto bg-[#fdf8f5] transition-all duration-500 md:hidden ${isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
            }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-medium text-foreground transition-all duration-300 hover:text-[#c4917b]"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://instagram.com/nanailsart02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ddd5] text-[#5a4a42] transition-colors hover:border-[#c4917b] hover:text-[#c4917b]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@nanailsart02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ddd5] text-[#5a4a42] transition-colors hover:border-[#c4917b] hover:text-[#c4917b]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46 6.28 6.28 0 001.86-4.49V9.38a8.18 8.18 0 004.72 1.5V7.43a4.85 4.85 0 01-1-.74z" />
              </svg>
            </a>
          </div>

          <a
            href="https://wa.me/6289678730504"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full bg-[#c4917b] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#c4917b]/30 transition-all hover:bg-[#b07d68]"
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
}
