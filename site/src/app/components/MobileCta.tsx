"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { phoneDigits } from "../lib/business";

export default function MobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 180);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="mobile-cta" aria-label="Quick actions">
      <div className="mobile-cta-inner">
        <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
          Call
        </a>
        <a className="btn btn-outline" href={`sms:${phoneDigits}`}>
          Text
        </a>
        <Link className="btn btn-primary" href="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}