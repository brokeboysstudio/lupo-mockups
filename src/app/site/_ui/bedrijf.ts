// Bedrijfsgegevens voor de website, de privacyverklaring en de voorwaarden.
// LET OP: juridische naam, ondernemingsnummer en adres zijn VERZONNEN voorbeelddata (keuze Jan, 7 nov 2026).
// Het nummer heeft bewust een ongeldig controlegetal, zodat het geen bestaand bedrijf is.
// Vervang ze door de echte gegevens voor de site naar lupo.coach gaat of de Garmin-aanvraag vertrekt.
// Gebruik de interne studionaam nooit extern.

export const BEDRIJF = {
  merk: "LUPO",
  juridischeNaam: "LUPO BV",
  ondernemingsnummer: "BE 0123.456.700",
  adres: "Voorbeeldstraat 1, 2000 Antwerpen, België",
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

export const SLOGAN: Record<Taal, { kop: string }> = {
  en: { kop: "No excuses. Only progress." },
  nl: { kop: "Geen excuses. Alleen vooruitgang." },
  fr: { kop: "Pas d’excuses. Que du progrès." },
};
