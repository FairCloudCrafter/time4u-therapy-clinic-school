import Link from "next/link";
import homeContent from "../../content/site-home.json";
import { basePath } from "./lib/basePath";
import { business, phoneDigits, fullAddress } from "./lib/business";

export default function Home() {
  const home = homeContent;

  return (
    <main>
      <section className="hero">
        <div className="wrap hero-shell">
          <div className="hero-copy">
            <span className="eyebrow">{home.eyebrow}</span>
            <h1 className="hero-title">{home.headline}</h1>
            <p className="hero-subtext">{home.subheadline}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
                {home.ctaPrimary}
              </a>
              <a className="btn btn-outline" href={`sms:${phoneDigits}`}>
                {home.ctaSecondary}
              </a>
              <Link className="btn btn-outline" href="/services">
                {home.ctaTertiary}
              </Link>
            </div>
            <div className="results-strip" aria-label="Clinic results and trust indicators">
              {home.trustBadges.map((badge) => (
                <div className="result-pill" key={badge.label}>
                  <strong>{badge.value}</strong>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-facts">
              <span>{business.addressLine}</span>
              <span>{business.phone}</span>
              <span>{business.hours}</span>
            </div>
          </div>

          <div className="hero-aside">
            <h2>Why clients choose Time 4U</h2>
            <ul>
              <li>Personalized care that listens to your body and your goals.</li>
              <li>Therapeutic techniques designed for relief, recovery, and calm.</li>
              <li>A quiet, supportive environment that helps you truly reset.</li>
            </ul>
            <div className="badge-row" style={{ marginTop: "1rem" }}>
              <span className="badge">Deep Tissue</span>
              <span className="badge">Prenatal</span>
              <span className="badge">Reflexology</span>
              <span className="badge">Waxing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="proof-grid">
            {home.proofCards.map((card) => (
              <article className="info-card" key={card.title}>
                <span className="eyebrow">{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2>{home.processHeading}</h2>
            <p>{home.processIntro}</p>
          </div>
          <div className="proof-grid premium-value-grid">
            {home.processSteps.map((step) => (
              <article className="info-card value-card" key={step.number}>
                <span className="eyebrow">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2>{home.servicesHeading}</h2>
            <p>{home.servicesIntro}</p>
          </div>
          <div className="cards">
            {home.serviceCards.map((card) => (
              <article className="feature-card" key={card.title}>
                <div className="feature-media">
                  <img src={`${basePath}${card.image}`} alt={card.alt} />
                </div>
                <div className="feature-body">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1rem" }}>
            <Link className="btn btn-primary" href="/services">
              See all services
            </Link>
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap grid-2">
          <article className="card">
            <h3>{home.whyChooseHeading}</h3>
            <p>{home.whyChooseBody}</p>
            <div className="badge-row">
              {home.whyChooseBadges.map((badge) => (
                <span className="badge" key={badge}>{badge}</span>
              ))}
            </div>
          </article>
          <article className="card">
            <h3>{home.expectationsHeading}</h3>
            <ul className="steps">
              {home.expectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="card" style={{ display: "grid", gap: "1rem" }}>
            <div className="feature-media" style={{ margin: "-1.1rem -1.1rem 0" }}>
              <img src={`${basePath}${home.spotlight.image}`} alt={home.spotlight.alt} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "clamp(1.8rem, 4vw, 2.7rem)" }}>
                {home.spotlight.title}
              </h2>
              <p>{home.spotlight.body}</p>
              <p style={{ marginTop: "1rem" }}>
                <Link className="btn btn-primary" href="/contact">
                  Book your visit
                </Link>
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2>{home.reviewsHeading}</h2>
            <p>Rated {business.reviewsRating} on Google. Real feedback from local clients.</p>
          </div>
          <div className="cards">
            {business.reviews.map((review) => (
              <article className="card" key={review.author}>
                <blockquote className="quote">
                  {review.quote}
                  <strong>
                    {review.author} &middot; {review.source}
                  </strong>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="cta-band">
            <div>
              <h2>{home.ctaBandHeading}</h2>
              <p>{home.ctaBandBody}</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
                {home.ctaBandPrimary}
              </a>
              <Link className="btn btn-outline" href="/school">
                {home.ctaBandSecondary}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="wrap grid-2">
          <article className="card">
            <h3>{home.contactHeading}</h3>
            <p>{home.contactBody}</p>
            <ul className="steps">
              <li>Call or text: {business.phone}</li>
              <li>{fullAddress}</li>
              <li>
                {business.hours} &middot; {business.bookingNote}
              </li>
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
            <h3>{home.trustedHeading}</h3>
            <p>{home.trustedBody}</p>
            <div className="badge-row">
              {home.trustedBadges.map((badge) => (
                <span className="badge" key={badge}>{badge}</span>
              ))}
            </div>
            <p style={{ marginTop: "1rem" }}>
              <Link className="btn btn-outline" href="/credentials">
                {home.credentialsLink}
              </Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
