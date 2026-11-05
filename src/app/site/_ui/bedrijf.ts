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

export const NAV = [
  { href: "/hoe-het-werkt", label: "Hoe het werkt" },
  { href: "/data", label: "Je data" },
  { href: "/dfrnt", label: "DFRNT" },
  { href: "/prijzen", label: "Prijzen" },
  { href: "/over", label: "Over" },
];

export const JURIDISCH = [
  { href: "/privacy", label: "Privacy" },
  { href: "/voorwaarden", label: "Voorwaarden" },
  { href: "/cookies", label: "Cookies" },
  { href: "/contact", label: "Contact en support" },
];

export const pad = (p: string) => `${BASIS}${p}`;
