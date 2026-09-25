import type { Metadata } from "next";
import schoolContent from "../../../content/site-school.json";
import { business, phoneDigits } from "../lib/business";
import NewsletterForm from "../components/NewsletterForm";

export const metadata: Metadata = {
  title: "School of Massage Therapy",
  description:
    "Time 4U Therapy Massage Clinic and School — massage therapy training coming soon in Chickasha, Oklahoma. Student massages available now at reduced pricing.",
};

export default function SchoolPage() {
  const school = schoolContent;

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{school.eyebrow}</span>
          <h1>{school.headline}</h1>
          <p>{school.intro}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap grid-2">
          <article className="card">
            <h3>{school.cardHeading}</h3>
            <p>{school.cardBody}</p>
            <div className="badge-row">
              {school.cardBadges.map((badge) => (
                <span className="badge" key={badge}>{badge}</span>
              ))}
            </div>
          </article>
          <article className="card">
            <h3>{school.interestHeading}</h3>
            <p>{school.interestBody}</p>
            <NewsletterForm />
            <p className="tiny" style={{ marginTop: "0.75rem" }}>
              Or call / text: <a href={`tel:${phoneDigits}`}>{business.phone}</a>
            </p>
          </article>
        </div>
      </section>

      {business.studentPricing.length > 0 && (
        <section className="section-pad">
          <div className="wrap">
            <article className="card">
              <h3>{school.studentHeading}</h3>
              <p>{school.studentIntro}</p>
              <ul className="steps">
                {business.studentPricing.map((item) => (
                  <li key={item.service}>
                    <strong>{item.price}</strong> — {item.service}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "1rem" }}>
                <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
                  {school.ctaSecondary}
                </a>
              </p>
            </article>
          </div>
        </section>
      )}
    </main>
  );
}
