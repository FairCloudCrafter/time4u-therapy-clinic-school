import type { Metadata } from "next";
import Link from "next/link";
import faqContent from "../../../content/site-faq.json";
import { business } from "../lib/business";

export const metadata: Metadata = {
  title: "FAQ & Policies",
  description:
    "Common questions about your massage session, what to expect, draping and comfort, plus booking, cancellation, and no-show policies at Time 4U Therapy Massage in Chickasha, OK.",
};

export default function FaqPage() {
  const faq = faqContent;

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h1>{faq.headline}</h1>
          <p>{faq.intro}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know before your first visit.</p>
          </div>
          <div className="faq-list">
            {faq.faqs.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2>{faq.policiesHeading}</h2>
            <p>{faq.policiesIntro}</p>
          </div>
          <div className="cards cards-2">
            {faq.policies.map((policy) => (
              <article className="card" key={policy.title}>
                <h3>{policy.title}</h3>
                <p>{policy.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="cta-band">
            <div>
              <h2>{faq.ctaHeading}</h2>
              <p>{faq.ctaBody}</p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              {faq.ctaLink}
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
