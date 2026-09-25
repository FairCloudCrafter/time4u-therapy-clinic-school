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
            </div>
            <Link className="hero-link" href="/services">
              {home.ctaTertiary} →
            </Link>
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

          <div className="hero-media">
            <img src={`${basePath}${home.heroImage}`} alt={home.heroImageAlt} />
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
              See all services &amp; prices
            </Link>
          </p>
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

      {/* Gift certificates */}
      <section className="section-pad">
        <div className="wrap">
          <article className="gift-cert-band">
            <div className="gift-cert-icon" aria-hidden="true">🎁</div>
            <div>
              <h2>{home.giftHeading}</h2>
              <p>{home.giftBody}</p>
              <p className="tiny">{home.giftNote}</p>
            </div>
            <div className="hero-cta">
              <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
                {home.giftCta}
              </a>
              <a className="btn btn-outline" href={`sms:${phoneDigits}`}>
                Text to Purchase
              </a>
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
