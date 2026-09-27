"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { business, phoneDigits } from "../lib/business";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/benefits", label: "Benefits" },
  { href: "/about", label: "About" },
  { href: "/credentials", label: "Credentials" },
  { href: "/faq", label: "FAQ" },
  { href: "/school", label: "School" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname === `${href}/`;

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
            {business.bookingNote} &middot; {business.city}, Oklahoma &middot; {business.hours}
          </span>
          <a href={`tel:${phoneDigits}`}>
            <Icon name="phone" /> Call or text {business.phone}
          </a>
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
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn-primary btn-sm" href={`tel:${phoneDigits}`}>
              <Icon name="phone" /> Book by phone
            </a>
            <div ref={menuRef} className="mobile-menu">
              <button
                type="button"
                className="menu-toggle"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onClick={() => setMenuOpen((current) => !current)}
              >
                <Icon name={menuOpen ? "close" : "menu"} className="menu-icon" />
              </button>
              {menuOpen && (
                <nav id="mobile-nav" className="mobile-menu-panel" aria-label="Mobile navigation">
                  <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mobile-menu-actions">
                    <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
                      <Icon name="phone" /> Call
                    </a>
                    <a className="btn btn-outline" href={`sms:${phoneDigits}`}>
                      <Icon name="message" /> Text
                    </a>
                  </div>
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
