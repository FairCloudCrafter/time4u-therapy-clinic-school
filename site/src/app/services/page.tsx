import type { Metadata } from "next";
import Link from "next/link";
import servicesContent from "../../../content/site-services.json";
import { business, phoneDigits } from "../lib/business";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Therapeutic and relaxation massage, reflexology, cupping, hot stone, waxing and sugaring, ear candling and more in Chickasha, OK. By appointment with Clara Schoonover, L.M.T.",
};

export default function ServicesPage() {
  const services = servicesContent;

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{services.eyebrow}</span>
          <h1>{services.headline}</h1>
          <p>{services.intro}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2">
            <article className="card">
              <h3>{services.careHeading}</h3>
              <p>{services.careBody}</p>
              <div className="badge-row">
                {services.careBadges.map((badge) => (
                  <span className="badge" key={badge}>{badge}</span>
                ))}
              </div>
            </article>
            <article className="card">
              <h3>{services.popularHeading}</h3>
              <ul className="steps">
                {services.popularItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="service-grid" style={{ marginTop: "1.2rem" }}>
            {services.serviceGroups.map((group) => (
              <article className="service-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="service-list price-list">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.name}`}>
                      <span>{item.name}</span>
                      <strong>{item.price}</strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <article className="note-card">
            <h3>{services.pricingHeading}</h3>
            <p>
              {services.pricingBody} <a href={`tel:${phoneDigits}`}>{business.phone}</a>
            </p>
            <p className="tiny" style={{ marginTop: "0.75rem" }}>
              {services.pricingNote}
            </p>
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

      <section className="section-pad">
        <div className="wrap">
          <article className="cta-band">
            <div>
              <h2>{services.ctaHeading}</h2>
              <p>{services.ctaBody}</p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              {services.ctaLink}
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
