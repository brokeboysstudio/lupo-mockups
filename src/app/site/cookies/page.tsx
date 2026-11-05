import type { Metadata } from "next";
import { BEDRIJF } from "../_ui/bedrijf";

export const metadata: Metadata = { title: "Cookies" };

export default function Cookies() {
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Cookies</div>
        <h1 style={{ margin: "16px 0 12px" }}>Cookies</h1>
        <p className="dim">Laatst bijgewerkt op {BEDRIJF.laatstBijgewerkt}.</p>
        <div className="concept">Concept. Moet nog juridisch nagekeken worden voor publicatie.</div>
        <p>De website en de app gebruiken alleen cookies en lokale opslag die nodig zijn om te werken: je aanmelding, je voorkeuren en de beveiliging. Daarvoor is geen toestemming nodig.</p>
        <p>We gebruiken geen advertentiecookies en geen cookies van sociale netwerken. Willen we later bezoekersstatistieken bijhouden, dan vragen we eerst je toestemming en passen we deze pagina aan.</p>
        <table className="tab">
          <thead><tr><th>Naam</th><th>Waarvoor</th><th>Duur</th></tr></thead>
          <tbody>
            <tr><td>sessie</td><td>Je aangemeld houden</td><td>Tot je afmeldt</td></tr>
            <tr><td>voorkeuren</td><td>Taal en weergave onthouden</td><td>1 jaar</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
