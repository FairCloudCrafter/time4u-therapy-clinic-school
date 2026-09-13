import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
