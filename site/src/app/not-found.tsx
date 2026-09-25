import Link from "next/link";
import { business, phoneDigits } from "./lib/business";

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Page not found</span>
          <h1>Sorry, we couldn&apos;t find that page.</h1>
          <p>
            It may have moved. You can browse our services, or call or text {business.phone} and
            we&apos;ll help you book.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/">
              Back to home
            </Link>
            <Link className="btn btn-outline" href="/services">
              See services
            </Link>
            <a className="btn btn-outline" href={`tel:${phoneDigits}`}>
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
