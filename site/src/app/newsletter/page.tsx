import type { Metadata } from "next";
import { business, phoneDigits } from "../lib/business";
import NewsletterForm from "../components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Join the Time 4U Therapy Massage newsletter for openings, specials, school news, and wellness tips from Chickasha, OK.",
};

export default function NewsletterPage() {
  return (
    <main className="newsletter-page">
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Stay in touch</span>
          <h1>Join our newsletter</h1>
          <p>Openings, specials, school news, and wellness tips from {business.shortName}, sent to your inbox.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: "36rem" }}>
          <article className="card">
            <h2>Sign up with your email</h2>
            <NewsletterForm />
            <p className="tiny">
              Prefer to talk? <a href={`tel:${phoneDigits}`}>Call or text {business.phone}</a>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
