import type { Metadata } from "next";
import Link from "next/link";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { BEDRIJF, JURIDISCH, NAV, pad } from "./_ui/bedrijf";
import "./site.css";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--f-kop" });
const dm = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--f-tekst" });

export const metadata: Metadata = {
  title: { default: "LUPO — Geen excuses. Alleen vooruitgang.", template: "%s | LUPO" },
  description:
    "LUPO leest je herstel en je plan, en zegt elke ochtend wat je vandaag doet: voluit, afbouwen of rusten. Met de reden erbij, tot aan je startlijn.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`site ${bebas.variable} ${dm.variable}`}>
      <header className="kop">
        <div className="wrap kop-in">
          <Link href={pad("")} className="logo">LUPO</Link>
          <nav className="nav">
            {NAV.map(n => (
              <Link key={n.href} href={pad(n.href)}>{n.label}</Link>
            ))}
          </nav>
          <Link href={pad("/prijzen#wachtlijst")} className="knop klein">Wachtlijst</Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="voet">
        <div className="wrap voet-in">
          <div>
            <div className="logo">LUPO</div>
            <p className="dim">Geen excuses. Alleen vooruitgang.</p>
          </div>
          <div className="voet-kol">
            <span className="lbl">Product</span>
            {NAV.map(n => <Link key={n.href} href={pad(n.href)}>{n.label}</Link>)}
          </div>
          <div className="voet-kol">
            <span className="lbl">Juridisch</span>
            {JURIDISCH.map(n => <Link key={n.href} href={pad(n.href)}>{n.label}</Link>)}
          </div>
          <div className="voet-kol">
            <span className="lbl">Onderneming</span>
            <span>{BEDRIJF.juridischeNaam}</span>
            <span>{BEDRIJF.ondernemingsnummer}</span>
            <span>{BEDRIJF.adres}</span>
            <a href={`mailto:${BEDRIJF.mail}`}>{BEDRIJF.mail}</a>
          </div>
        </div>
        <div className="wrap dim klein-tekst" style={{ paddingTop: 24 }}>
          LUPO geeft trainingsadvies, geen medisch advies. Bij twijfel over je gezondheid: raadpleeg een arts.
          <br />Foto's: Unsplash. Kaartgegevens: © OpenStreetMap-bijdragers.
        </div>
      </footer>
    </div>
  );
}
