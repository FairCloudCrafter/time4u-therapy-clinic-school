import Link from "next/link";
import { basePath } from "./lib/basePath";
import { business, phoneDigits, fullAddress } from "./lib/business";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-shell">
          <div className="hero-copy">
            <span className="eyebrow">Licensed &middot; Professional &middot; Local</span>
            <h1>Therapeutic massage that treats you like a person, not a number.</h1>
            <p>
              Welcome to Time 4U Therapy Massage in Chickasha, Oklahoma. With
              Clara Schoonover, L.M.T., you get skilled, results-focused bodywork
              in a calm, comfortable setting — tailored to your body and your
              goals.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
                Call to Book
              </a>
              <a className="btn btn-outline" href={`sms:${phoneDigits}`}>
                Text to Book
              </a>
              <Link className="btn btn-outline" href="/services">
                View Services
              </Link>
            </div>
              <div className="hero-facts">
                <span>{business.addressLine}</span>
                <span>{business.phone}</span>
                <span>{business.hours}</span>
              </div>
            </div>
            <div className="hero-media">
              <img
                src={`${basePath}/images/hero-massage.jpg`}
                alt="Therapeutic massage session at Time 4U"
                className="hero-img"
              />
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>Services</h2>
              <p>
                Therapeutic and relaxation bodywork, plus waxing and wellness
                services — each session tailored to you.
              </p>
            </div>
            <div className="cards">
            <article className="card feature-card">
              <div className="feature-media">
                <img
                  src={`${basePath}/images/massage-back.jpg`}
                  alt="Deep tissue therapeutic massage"
                />
              </div>
              <div className="feature-body">
                <h3>Therapeutic Massage</h3>
                <p>
                  Deep tissue, medical, orthopedic, prenatal, lymphatic and more
                  — focused on real relief from pain and tension.
                </p>
              </div>
            </article>
            <article className="card feature-card">
              <div className="feature-media">
                <img
                  src={`${basePath}/images/spa-calm.jpg`}
                  alt="Calm spa setting with candles and towels"
                />
              </div>
              <div className="feature-body">
                <h3>Reflexology &amp; Bodywork</h3>
                <p>
                  Foot and hand reflexology, cupping, hot stone and myofascial
                  techniques to help your body reset and recover.
                </p>
              </div>
            </article>
            <article className="card feature-card">
              <div className="feature-media">
                <img
                  src={`${basePath}/images/oils.jpg`}
                  alt="Essential oils used in treatments"
                />
              </div>
              <div className="feature-body">
                <h3>Waxing &amp; Wellness</h3>
                <p>
                  Professional waxing and sugaring, ear candling, and detox
                  services with clear prep and aftercare guidance.
                </p>
              </div>
            </article>
          </div>
          <p className="section-cta">
            <Link className="btn btn-primary" href="/services">
              See all services
            </Link>
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap grid-2">
          <article className="card">
            <h3>Why clients choose Time 4U</h3>
            <p>
              You get a licensed therapist who listens first, then delivers the
              right techniques for your body — not a one-size-fits-all routine.
            </p>
            <div className="badge-row">
              <span className="badge">Licensed Therapist</span>
              <span className="badge">Personalized Care</span>
              <span className="badge">Professional &amp; Discreet</span>
              <span className="badge">Local &amp; Trusted</span>
            </div>
          </article>
          <article className="card">
            <h3>What to expect</h3>
            <ul className="steps">
              <li>A warm, quiet, comfortable treatment room</li>
              <li>Proper draping and respect for your comfort at all times</li>
              <li>Techniques matched to your condition and pain level</li>
              <li>Honest guidance on what will actually help</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="image-band">
            <div className="image-band-media">
              <img
                src={`${basePath}/images/spa-calm.jpg`}
                alt="Relaxing spa atmosphere"
              />
            </div>
            <div className="image-band-body">
              <h2>A calm space to truly unwind</h2>
              <p>
                From the moment you arrive, everything is set up for your comfort
                — a warm, quiet room, soothing touches, and care that&apos;s
                focused entirely on you.
              </p>
              <p className="section-cta">
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
            <h2>What clients are saying</h2>
            <p>
              Rated {business.reviewsRating} on Google. Here&apos;s what local
              clients share.
            </p>
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
              <h2>New: School of Massage Therapy</h2>
              <p>
                Training and classes are on the way. Call or text us to be the
                first to know when enrollment opens.
              </p>
            </div>
            <Link className="btn btn-primary" href="/school">
              Learn more
            </Link>
          </article>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="wrap grid-2">
          <article className="card">
            <h3>Ready to book?</h3>
            <p>Call or text — appointments are scheduled 1&ndash;2 weeks ahead.</p>
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
            <h3>Trusted, licensed care</h3>
            <p>
              Clara Schoonover, L.M.T. — serving Chickasha with professional,
              therapeutic massage and bodywork since 2008.
            </p>
            <div className="badge-row">
              <span className="badge">License #{business.licenseNumber}</span>
              <span className="badge">ABMP Member</span>
              <span className="badge">By Appointment</span>
            </div>
            <p className="section-cta">
              <Link className="btn btn-outline" href="/credentials">
                See credentials
              </Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
