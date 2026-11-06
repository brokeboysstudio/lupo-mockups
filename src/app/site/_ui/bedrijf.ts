// Bedrijfsgegevens voor de website, de privacyverklaring en de voorwaarden.
// [IN TE VULLEN] staat waar Jan de echte gegevens nog moet aanleveren.
// Gebruik de interne studionaam nooit extern.

export const BEDRIJF = {
  merk: "LUPO",
  juridischeNaam: "[IN TE VULLEN: juridische naam onderneming]",
  ondernemingsnummer: "[IN TE VULLEN: BE 0xxx.xxx.xxx]",
  adres: "[IN TE VULLEN: straat en nummer, postcode gemeente, België]",
  mail: "hallo@lupo.coach",
  privacyMail: "privacy@lupo.coach",
  supportMail: "support@lupo.coach",
  domein: "lupo.coach",
  laatstBijgewerkt: "5 november 2026",
};

/** Basispad. Op lupo.coach wordt dit "" zodat alle links meeverhuizen. */
export const BASIS = "/site";

export type Taal = "en" | "nl" | "fr";
export const TALEN: Taal[] = ["en", "nl", "fr"];

/** Engels staat op de basis, Nederlands en Frans onder /nl en /fr. Slugs zijn in alle talen gelijk. */
export const pad = (taal: Taal, p = "") => `${BASIS}${taal === "en" ? "" : `/${taal}`}${p}` || "/";

export const NAV: Record<Taal, { href: string; label: string }[]> = {
  en: [
    { href: "/how-it-works", label: "How it works" },
    { href: "/data", label: "Your data" },
    { href: "/dfrnt", label: "DFRNT" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ],
  nl: [
    { href: "/how-it-works", label: "Hoe het werkt" },
    { href: "/data", label: "Je data" },
    { href: "/dfrnt", label: "DFRNT" },
    { href: "/pricing", label: "Prijzen" },
    { href: "/about", label: "Over" },
  ],
  fr: [
    { href: "/how-it-works", label: "Fonctionnement" },
    { href: "/data", label: "Vos données" },
    { href: "/dfrnt", label: "DFRNT" },
    { href: "/pricing", label: "Tarifs" },
    { href: "/about", label: "À propos" },
  ],
};

export const JURIDISCH: Record<Taal, { href: string; label: string }[]> = {
  en: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/cookies", label: "Cookies" },
    { href: "/contact", label: "Contact and support" },
  ],
  nl: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Voorwaarden" },
    { href: "/cookies", label: "Cookies" },
    { href: "/contact", label: "Contact en support" },
  ],
  fr: [
    { href: "/privacy", label: "Confidentialité" },
    { href: "/terms", label: "Conditions" },
    { href: "/cookies", label: "Cookies" },
    { href: "/contact", label: "Contact et support" },
  ],
};

/** Datum van de laatste wijziging, per taal geschreven. */
export const BIJGEWERKT: Record<Taal, string> = { en: "6 November 2026", nl: "6 november 2026", fr: "6 novembre 2026" };

export const SLOGAN: Record<Taal, { kop: string; onder: string }> = {
  en: { kop: "No excuses. Only progress.", onder: "No glory without sacrifices." },
  nl: { kop: "Geen excuses. Alleen vooruitgang.", onder: "Zonder offer geen glorie." },
  fr: { kop: "Pas d’excuses. Que du progrès.", onder: "Pas de gloire sans sacrifice." },
};
