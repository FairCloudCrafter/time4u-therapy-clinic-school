import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { business, siteUrl } from "./lib/business";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Time 4U Therapy Massage Clinic and School | Chickasha, OK",
    template: "%s | Time 4U Therapy Massage",
  },
  description:
    "Licensed, professional therapeutic massage in Chickasha, Oklahoma. Deep tissue, medical, prenatal, lymphatic, reflexology, waxing and more — by appointment with Clara Schoonover, L.M.T.",
  keywords: [
    "massage Chickasha",
    "massage therapist Chickasha OK",
    "deep tissue massage",
    "medical massage",
    "prenatal massage",
    "reflexology",
    "waxing Chickasha",
    "Clara Schoonover LMT",
  ],
  openGraph: {
    title: "Time 4U Therapy Massage Clinic and School",
    description:
      "Licensed, professional therapeutic massage in Chickasha, Oklahoma. By appointment with Clara Schoonover, L.M.T.",
    locale: "en_US",
    type: "website",
    siteName: "Time 4U Therapy Massage Clinic and School",
    images: [{ url: "/images/hero-massage.jpg", width: 1500, height: 1000, alt: "Relaxing massage session" }],
  },
  twitter: { card: "summary_large_image" },
};

// "9:00 am" -> "09:00" for schema.org opening hours.
function to24h(time: string) {
  const m = time.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
  if (!m) return null;
  let h = Number(m[1]) % 12;
  if (m[3].toLowerCase() === "pm") h += 12;
  return `${String(h).padStart(2, "0")}:${m[2]}`;
}

const openingHours = business.hoursByDay.flatMap((row) => {
  const [opens, closes] = (row.hours ?? "").split(/[–-]/).map((t) => to24h(t));
  return opens && closes
    ? [{ "@type": "OpeningHoursSpecification", dayOfWeek: row.day, opens, closes }]
    : [];
});

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: business.name,
  url: siteUrl,
  image: `${siteUrl}/images/hero-massage.jpg`,
  telephone: business.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.addressLine,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: openingHours,
  sameAs: [business.facebook, business.instagram].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
