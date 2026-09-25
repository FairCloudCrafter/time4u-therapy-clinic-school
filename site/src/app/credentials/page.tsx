import type { Metadata } from "next";
import Link from "next/link";
import credentialsContent from "../../../content/site-credentials.json";
import { business } from "../lib/business";

export const metadata: Metadata = {
  title: "Credentials",
  description: `Clara Schoonover, L.M.T. — Oklahoma license #${business.licenseNumber}, certified in Massage Therapy from Platt College (2008), member of Associated Bodywork & Massage Professionals.`,
};

export default function CredentialsPage() {
  const content = credentialsContent;

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>{content.headline}</h1>
          <p>{content.intro}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="cards cards-2">
            {content.items.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body.replaceAll("{license}", business.licenseNumber)}</p>
              </article>
            ))}
          </div>
          <p className="tiny credentials-note">{content.note}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="cta-band">
            <div>
              <h2>{content.ctaHeading}</h2>
              <p>{content.ctaBody}</p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              {content.ctaLink}
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
