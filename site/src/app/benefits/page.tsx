import type { Metadata } from "next";
import Link from "next/link";
import benefitsContent from "../../../content/site-benefits.json";
import { business, phoneDigits } from "../lib/business";

export const metadata: Metadata = {
  title: "Benefits of Services",
  description:
    "Discover the health and wellness benefits of massage therapy, reflexology, aromatherapy, waxing, and more at Time 4U Therapy Massage in Chickasha, OK.",
};

export default function BenefitsPage() {
  const content = benefitsContent;

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>{content.headline}</h1>
          <p>{content.intro}</p>
        </div>
      </section>

      {/* First Visit */}
      <section className="section-pad">
        <div className="wrap">
          <article className="note-card">
            <h2>{content.firstVisit.heading}</h2>
            <p>{content.firstVisit.body}</p>
            <ul className="steps" style={{ marginTop: "1rem" }}>
              {content.firstVisit.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Service benefit sections */}
      {content.services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="section-pad"
          style={{ background: index % 2 === 1 ? "var(--surface)" : undefined }}
        >
          <div className="wrap">
            <div className="benefits-service-layout">
              <div className="benefits-service-header">
                <span className="eyebrow">{service.tagline}</span>
                <h2>{service.name}</h2>
                <p style={{ maxWidth: "52ch" }}>{service.description}</p>
              </div>
              <div className="benefits-service-body">
                <ul className="benefit-list">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                {"prepTip" in service && service.prepTip && (
                  <p className="prep-tip">{service.prepTip as string}</p>
                )}
                {"disclaimer" in service && service.disclaimer && (
                  <p className="tiny" style={{ marginTop: "1.25rem", opacity: 0.65 }}>
                    {service.disclaimer as string}
                  </p>
                )}
              </div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <Link className="btn btn-outline" href={`/services#${service.id}`}>
                View pricing for {service.name}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-pad">
        <div className="wrap">
          <article className="cta-band">
            <div>
              <h2>{content.ctaHeading}</h2>
              <p>{content.ctaBody}</p>
            </div>
            <div className="hero-cta">
              <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
                Call to Book
              </a>
              <a className="btn btn-outline" href={`sms:${phoneDigits}`}>
                Text to Book
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
