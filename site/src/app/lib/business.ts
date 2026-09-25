import data from "../../../content/business.json";

// Single source of truth for business info + reviews.
// Editable by Clara through the CMS at /admin — do not hard-code these values elsewhere.
export const business = data;

// tel:/sms: links need bare digits, e.g. "4059330962".
export const phoneDigits = business.phone.replace(/\D/g, "");

// "611 West Chickasha, Suite B, Chickasha, OK 73018"
export const fullAddress = `${business.addressLine}, ${business.city}, ${business.state} ${business.zip}`;

export const siteUrl = "https://time4utherapymassageclinicandschool.com";
