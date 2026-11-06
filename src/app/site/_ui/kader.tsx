import Link from "next/link";
import { BEDRIJF, JURIDISCH, NAV, SLOGAN, type Taal, pad } from "./bedrijf";
import { TaalKeuze } from "./taalkeuze";

const T = {
  en: { wacht: "Waitlist", product: "Product", juridisch: "Legal", onderneming: "Company",
        disclaimer: "LUPO gives training advice, not medical advice. If you have doubts about your health, see a doctor.",
        bron: "Photos: Unsplash. Map data: © OpenStreetMap contributors." },
  nl: { wacht: "Wachtlijst", product: "Product", juridisch: "Juridisch", onderneming: "Onderneming",
        disclaimer: "LUPO geeft trainingsadvies, geen medisch advies. Bij twijfel over je gezondheid: raadpleeg een arts.",
        bron: "Foto's: Unsplash. Kaartgegevens: © OpenStreetMap-bijdragers." },
  fr: { wacht: "Liste d’attente", product: "Produit", juridisch: "Mentions légales", onderneming: "Entreprise",
        disclaimer: "LUPO donne des conseils d’entraînement, pas des conseils médicaux. En cas de doute sur votre santé, consultez un médecin.",
        bron: "Photos : Unsplash. Données cartographiques : © contributeurs OpenStreetMap." },
};

export function Kader({ taal, children }: { taal: Taal; children: React.ReactNode }) {
  const t = T[taal];
  return (
    <div lang={taal}>
      <header className="kop">
        <div className="wrap kop-in">
          <Link href={pad(taal)} className="logo">LUPO</Link>
          <nav className="nav">
            {NAV[taal].map(n => <Link key={n.href} href={pad(taal, n.href)}>{n.label}</Link>)}
          </nav>
          <TaalKeuze taal={taal} />
          <Link href={pad(taal, "/pricing#wachtlijst")} className="knop klein">{t.wacht}</Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="voet">
        <div className="wrap voet-in">
          <div>
            <div className="logo">LUPO</div>
            <p className="dim">{SLOGAN[taal].kop}</p>
          </div>
          <div className="voet-kol">
            <span className="lbl">{t.product}</span>
            {NAV[taal].map(n => <Link key={n.href} href={pad(taal, n.href)}>{n.label}</Link>)}
          </div>
          <div className="voet-kol">
            <span className="lbl">{t.juridisch}</span>
            {JURIDISCH[taal].map(n => <Link key={n.href} href={pad(taal, n.href)}>{n.label}</Link>)}
          </div>
          <div className="voet-kol">
            <span className="lbl">{t.onderneming}</span>
            <span>{BEDRIJF.juridischeNaam}</span>
            <span>{BEDRIJF.ondernemingsnummer}</span>
            <span>{BEDRIJF.adres}</span>
            <a href={`mailto:${BEDRIJF.mail}`}>{BEDRIJF.mail}</a>
          </div>
        </div>
        <div className="wrap dim klein-tekst" style={{ paddingTop: 24 }}>
          {t.disclaimer}
          <br />{t.bron}
        </div>
      </footer>
    </div>
  );
}
