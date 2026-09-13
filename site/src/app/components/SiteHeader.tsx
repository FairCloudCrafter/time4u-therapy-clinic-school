"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { business, phoneDigits } from "../lib/business";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/benefits", label: "Benefits" },
  { href: "/about", label: "About" },
  { href: "/credentials", label: "Credentials" },
  { href: "/faq", label: "FAQ" },
  { href: "/school", label: "School" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>
            {business.bookingNote} &middot; {business.city}, Oklahoma
          </span>
          <span>Call or text: {business.phone}</span>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-grid">
          <Link className="brand" href="/" aria-label="Time 4U Therapy Massage home">
            <Logo />
            <div className="brand-lines">
              <div className="brand-main">TIME 4 U THERAPY MASSAGE</div>
              <div className="brand-sub">Clinic and School of Massage Therapy</div>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn-outline" href={`tel:${phoneDigits}`}>
              Call
            </a>
            <div ref={menuRef} className="mobile-menu">
              <button
                type="button"
                className="menu-toggle"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((current) => !current)}
              >
                <span className="menu-icon" aria-hidden="true">
                  ☰
                </span>
              </button>
              {menuOpen && (
                <div className="mobile-menu-panel" role="menu" aria-label="Mobile navigation menu">
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
