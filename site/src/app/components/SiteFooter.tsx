import Link from "next/link";
import { business, fullAddress, phoneDigits } from "../lib/business";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/benefits", label: "Benefits" },
  { href: "/about", label: "About" },
  { href: "/credentials", label: "Credentials" },
  { href: "/faq", label: "FAQ" },
  { href: "/school", label: "School" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="mobile-cta" aria-label="Quick actions">
        <div className="mobile-cta-inner">
          <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
            Call
          </a>
          <a className="btn btn-outline" href={`sms:${phoneDigits}`}>
            Text
          </a>
          <Link className="btn btn-primary" href="/contact">
            Book
          </Link>
        </div>
      </div>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <h3>{business.name}</h3>
            <p className="tiny">
              {fullAddress}
              <br />
              {business.phone} &middot; {business.hours} &middot; {business.bookingNote}
            </p>
            <p className="tiny">{business.movingNotice}</p>
            <nav className="footer-nav" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="card" style={{ padding: "1rem" }}>
            <h3>Stay in touch</h3>
            <p className="tiny" style={{ marginTop: "0.5rem" }}>
              Questions about massage or our upcoming School of Massage Therapy? Give us a call
              or send a text—we&apos;re happy to help.
            </p>
            <p style={{ marginTop: "0.85rem" }}>
              <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
                Call or text {business.phone}
              </a>
            </p>
          </div>
        </div>
        <div className="wrap">
          <p className="tiny footer-legal">
            &copy; {year} {business.name} &middot; Clara Schoonover, L.M.T. &middot; Licensed in Oklahoma
          </p>
        </div>
      </footer>
    </>
  );
}
