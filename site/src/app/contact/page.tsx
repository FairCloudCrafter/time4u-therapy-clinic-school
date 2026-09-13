import type { Metadata } from "next";
import contactContent from "../../../content/site-contact.json";
import { business, phoneDigits, fullAddress } from "../lib/business";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Book your massage at Time 4U Therapy Massage in Chickasha, OK. Call or text (405) 933-0962. 611 West Chickasha, Suite B. By appointment only, Mon–Thu 9am–5pm.",
};

export default function ContactPage() {
  const contact = contactContent;

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h1>{contact.headline}</h1>
          <p>{contact.intro}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap grid-2">
          <article className="card">
            <h3>{contact.bookHeading}</h3>
            <ul className="steps">
              <li>
                Call or text: <a href={`tel:${phoneDigits}`}>{business.phone}</a>
              </li>
              <li>{fullAddress}</li>
              <li>Hours: {business.hours}</li>
              <li>{business.bookingNote} &middot; Self-pay (no insurance)</li>
            </ul>
            <p className="tiny">{business.movingNotice}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
                Call Now
              </a>
              <a className="btn btn-outline" href={`sms:${phoneDigits}`}>
                Text Now
              </a>
            </div>
          </article>

          <article className="card">
            <h3>{contact.goodToKnowHeading}</h3>
            <ul className="steps">
              {contact.goodToKnowItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="section-cta">
              <a className="btn btn-outline" href="/faq">
                {contact.faqLink}
              </a>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
