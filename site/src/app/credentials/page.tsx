import type { Metadata } from "next";
import Link from "next/link";
import { business } from "../lib/business";

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "Clara Schoonover, L.M.T. — Oklahoma license #84488, certified in Massage Therapy from Platt College (2008), member of Associated Bodywork & Massage Professionals.",
};

const credentials = [
  {
    title: "License",
    body: `Licensed Massage Therapist (L.M.T.), Oklahoma license #${business.licenseNumber}, issued by the Oklahoma Board of Cosmetology and Barbering.`,
  },
  {
    title: "Education",
    body: "Certified in Massage Therapy from Platt College (2008). Previously licensed in Cosmetology.",
  },
  {
    title: "Professional Membership",
    body: "Member of Associated Bodywork & Massage Professionals (ABMP), a national standard for professional, ethical practice.",
  },
  {
    title: "Certifications & Training",
    body: "Certified in Breast Massage; trained in reflexology, cupping, myofascial release, craniosacral therapy, waxing/sugaring, ear candling, and essential oils & aromatherapy.",
  },
];

export default function CredentialsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Credentials</span>
          <h1>Licensed, credentialed, and held to a professional standard.</h1>
          <p>
            When you book with Time 4U, you&apos;re in the hands of a licensed
            therapist with years of training and real clinical experience.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="cards cards-2">
            {credentials.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="tiny credentials-note">
            Your care matters. Clara keeps a professional standard of safety, comfort, and informed treatment.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="cta-band">
            <div>
              <h2>Questions about a specific condition?</h2>
              <p>Clara is happy to talk through whether massage is right for you.</p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              Contact us
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
