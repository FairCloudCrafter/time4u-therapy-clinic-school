import Link from "next/link";
import { business, fullAddress, phoneDigits } from "../lib/business";
import Icon from "./Icon";
import Logo from "./Logo";
import MobileCta from "./MobileCta";
import NewsletterForm from "./NewsletterForm";

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
      <MobileCta />

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <Logo />
              <div className="brand-lines">
                <div className="brand-main">{business.shortName}</div>
                <div className="brand-sub">Clinic and School of Massage Therapy</div>
              </div>
            </div>
            <ul className="footer-facts">
              <li>
                <Icon name="pin" /> {fullAddress}
              </li>
              <li>
                <Icon name="phone" /> <a href={`tel:${phoneDigits}`}>{business.phone}</a>
              </li>
              <li>
                <Icon name="clock" /> {business.hours} &middot; {business.bookingNote}
              </li>
            </ul>
            <p className="tiny">{business.movingNotice}</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <h3>Explore</h3>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="footer-newsletter">
            <h3>Stay in touch</h3>
            <p className="tiny">
              Join our newsletter for wellness tips and news about our upcoming School of
              Massage Therapy.
            </p>
            <NewsletterForm />
            <p className="tiny">
              Prefer to talk?{" "}
              <a href={`tel:${phoneDigits}`}>Call or text {business.phone}</a>.
            </p>
          </div>
        </div>
        <div className="wrap footer-legal">
          <p className="tiny">
            &copy; {year} {business.name} &middot; Clara Schoonover, L.M.T. &middot; Licensed in Oklahoma
            {business.abmpMember && <> &middot; ABMP Member</>}
          </p>
          {(business.facebook || business.instagram) && (
            <p className="tiny footer-social">
              {business.facebook && (
                <a href={business.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              )}
              {business.instagram && (
                <a href={business.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              )}
            </p>
          )}
        </div>
      </footer>
    </>
  );
}
