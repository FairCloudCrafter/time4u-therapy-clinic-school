import Link from "next/link";
import { business, fullAddress, phoneDigits } from "../lib/business";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/credentials", label: "Credentials" },
  { href: "/faq", label: "FAQ" },
  { href: "/school", label: "School" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <h3>{business.name}</h3>
          <p className="tiny">
            {fullAddress}
            <br />
            {business.phone} &middot; {business.hours} &middot;{" "}
            {business.bookingNote}
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
        <div className="card">
          <h3>Stay in touch</h3>
          <p className="tiny">
            Questions about massage or our upcoming School of Massage Therapy?
            Give us a call or send a text &mdash; we&apos;re happy to help.
          </p>
          <p>
            <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
              Call or text {business.phone}
            </a>
          </p>
        </div>
      </div>
      <div className="wrap">
        <p className="tiny footer-legal">
          &copy; {year} {business.name} &middot; Clara Schoonover, L.M.T.
          &middot; Licensed in Oklahoma
        </p>
      </div>
    </footer>
  );
}
