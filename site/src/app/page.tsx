import Link from "next/link";
import homeContent from "../../content/site-home.json";
import Icon from "./components/Icon";
import { basePath } from "./lib/basePath";
import { business, phoneDigits, fullAddress } from "./lib/business";

function Stars() {
  return (
    <span className="stars" aria-hidden="true">
      ★★★★★
    </span>
  );
}

export default function Home() {
  const home = homeContent;

  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{home.eyebrow}</span>
            <h1 className="hero-title">{home.headline}</h1>
            <p className="hero-subtext">{home.subheadline}</p>
            <div className="hero-cta">
              <a className="btn btn-primary btn-lg" href={`tel:${phoneDigits}`}>
                <Icon name="phone" /> {home.ctaPrimary}
              </a>
              <a className="btn btn-outline btn-lg" href={`sms:${phoneDigits}`}>
                <Icon name="message" /> {home.ctaSecondary}
              </a>
            </div>
            <Link className="hero-link" href="/services">
              {home.ctaTertiary} <Icon name="arrow" />
            </Link>

            <ul className="trust-row" aria-label="Clinic trust indicators">
              {home.trustBadges.map((badge, i) => (
                <li key={badge.label}>
                  {i === 0 && <Stars />}
                  <strong>{badge.value}</strong>
                  <span>{badge.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-media">
            <img src={`${basePath}${home.heroImage}`} alt={home.heroImageAlt} />
            <div className="hero-facts" aria-label="Location, phone and hours">
              <span>
                <Icon name="pin" /> {business.addressLine}
              </span>
              <a href={`tel:${phoneDigits}`}>
                <Icon name="phone" /> {business.phone}
              </a>
              <span>
                <Icon name="clock" /> {business.hours}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div>
              <span className="section-label">Services</span>
              <h2>{home.servicesHeading}</h2>
              <p>{home.servicesIntro}</p>
            </div>
            <Link className="btn btn-outline" href="/services">
              See all services &amp; prices <Icon name="arrow" />
            </Link>
          </div>
          <div className="cards">
            {home.serviceCards.map((card) => (
              <Link href="/services" className="feature-card" key={card.title}>
                <div className="feature-media">
                  <img src={`${basePath}${card.image}`} alt={card.alt} />
                </div>
                <div className="feature-body">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <span className="feature-more">
                    Learn more <Icon name="arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad band-mist">
        <div className="wrap">
          <div className="section-head section-head--center">
            <span className="section-label">Your visit</span>
            <h2>{home.processHeading}</h2>
            <p>{home.processIntro}</p>
          </div>
          <ol className="process-grid">
            {home.processSteps.map((step) => (
              <li className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div>
              <span className="section-label">Reviews</span>
              <h2>{home.reviewsHeading}</h2>
              <p>Real feedback from local clients.</p>
            </div>
            <div className="rating-badge">
              <Stars />
              <strong>{business.reviewsRating}</strong>
              <span>on Google</span>
            </div>
          </div>
          <div className="review-grid">
            {business.reviews.map((review) => (
              <figure className="review-card" key={review.author}>
                <blockquote className="quote">{review.quote}</blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">
                    {review.author.charAt(0)}
                  </span>
                  <span>
                    <strong>{review.author}</strong>
                    <small>{review.source}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="gift-cert-band">
            <div className="gift-cert-icon">
              <Icon name="gift" />
            </div>
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
        <div className="wrap closing-cta">
          <div className="closing-cta-main">
            <span className="section-label">Contact</span>
            <h2>{home.contactHeading}</h2>
            <p>{home.contactBody}</p>
            <ul className="contact-facts">
              <li>
                <Icon name="phone" /> {business.phone}
              </li>
              <li>
                <Icon name="pin" /> {fullAddress}
              </li>
              <li>
                <Icon name="clock" /> {business.hours} &middot; {business.bookingNote}
              </li>
            </ul>
            {business.movingNotice && <p className="tiny">{business.movingNotice}</p>}
            <div className="hero-cta">
              <a className="btn btn-gold btn-lg" href={`tel:${phoneDigits}`}>
                <Icon name="phone" /> Call Now
              </a>
              <a className="btn btn-ghost-light btn-lg" href={`sms:${phoneDigits}`}>
                <Icon name="message" /> Text Now
              </a>
            </div>
          </div>
          <aside className="closing-cta-side">
            <h3>{home.trustedHeading}</h3>
            <p>{home.trustedBody}</p>
            <div className="badge-row">
              {home.trustedBadges.map((badge) => (
                <span className="badge badge-light" key={badge}>
                  {badge}
                </span>
              ))}
            </div>
            <Link className="text-link-light" href="/credentials">
              {home.credentialsLink} <Icon name="arrow" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
