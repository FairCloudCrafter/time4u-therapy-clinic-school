import raw from "../../../content/business.json";

// Optional keys are the ones Decap omits/blanks when Clara clears them (required: false in config.yml).
type BusinessContent = {
  name: string;
  shortName: string;
  phone: string;
  addressLine: string;
  city: string;
  state: string;
  zip: string;
  hours: string;
  bookingNote: string;
  movingNotice?: string;
  licenseNumber: string;
  reviewsRating: string;
  facebook?: string;
  instagram?: string;
  abmpMember?: boolean;
  hoursByDay: { day: string; hours: string | null }[];
  giftCertNote: string;
  newsletterText: string;
  studentPricing?: { service: string; price: string }[];
  reviews: { quote: string; author: string; source: string }[];
};

const data = raw as BusinessContent;

// Single source of truth for business info + reviews.
// Editable by Clara through the CMS at /admin — do not hard-code these values elsewhere.
export const business = {
  ...data,
  movingNotice: data.movingNotice ?? "",
  facebook: data.facebook ?? "",
  instagram: data.instagram ?? "",
  abmpMember: data.abmpMember ?? false,
  studentPricing: data.studentPricing ?? [],
};

// tel:/sms: links need bare digits, e.g. "4059330962".
export const phoneDigits = business.phone.replace(/\D/g, "");

// "611 West Chickasha, Suite B, Chickasha, OK 73018"
export const fullAddress = `${business.addressLine}, ${business.city}, ${business.state} ${business.zip}`;

export const siteUrl = "https://time4utherapymassageclinicandschool.com";
