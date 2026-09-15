import type { Metadata } from "next";
import Link from "next/link";
import aboutContent from "../../../content/site-about.json";
import { basePath } from "../lib/basePath";
import { business, phoneDigits } from "../lib/business";
import NewsletterForm from "../components/NewsletterForm";

export const metadata: Metadata = {
  title: "About Clara",
  description:
    "Meet Clara Schoonover, L.M.T. — a licensed massage therapist and cosmetologist serving Chickasha, Oklahoma since 2008, specializing in medical, deep tissue, prenatal and therapeutic massage.",
};

export default function AboutPage() {
  const about = aboutContent;

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{about.eyebrow}</span>
          <h1>{about.headline}</h1>
          <p>{about.intro}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap grid-2">
          <div className="prose">
            <div className="about-media">
              <img src={`${basePath}${about.image}`} alt={about.imageAlt} />
            </div>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="card">
            <h3>{about.whyChooseHeading}</h3>
            <ul className="steps">
              {about.whyChooseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="section-cta">
              <Link className="btn btn-primary" href="/credentials">
                View credentials
              </Link>
            </p>
          </aside>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2>{about.specialtiesHeading}</h2>
            <p>{about.specialtiesIntro}</p>
          </div>
          <div className="badge-row badge-row-wrap">
            {about.specialties.map((item) => (
              <span className="badge" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap" style={{ display: "flex", justifyContent: "center" }}>
          <div className="card" style={{ maxWidth: "480px", width: "100%", padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Stay in touch</h2>
            <p className="tiny" style={{ marginBottom: "1rem" }}>
              Get occasional wellness tips and be the first to hear clinic news and updates
              about the upcoming School of Massage Therapy.
            </p>
            <NewsletterForm />
            <p className="tiny" style={{ marginTop: "0.75rem" }}>
              Prefer to talk?{" "}
              <a href={`tel:${phoneDigits}`}>Call or text {business.phone}</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="cta-band">
            <div>
              <h2>{about.ctaHeading}</h2>
              <p>{about.ctaBody}</p>
            </div>
            <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
              {about.ctaButton} {business.phone}
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
