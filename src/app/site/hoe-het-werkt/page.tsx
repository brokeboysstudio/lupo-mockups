import Link from "next/link";
import type { Metadata } from "next";
import { pad } from "../_ui/bedrijf";

export const metadata: Metadata = { title: "Hoe het werkt" };

export default function HoeHetWerkt() {
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap smal">
          <div className="lbl acc">Hoe het werkt</div>
          <h1 style={{ margin: "16px 0 22px" }}>Vaste regels. Een duidelijke reden.</h1>
          <p className="lead">LUPO beslist elke ochtend op basis van vaste regels en je eigen gegevens. Dezelfde situatie geeft altijd dezelfde beslissing, en je ziet altijd waarom.</p>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap">
          <h2 style={{ marginBottom: 32 }}>De ochtendbeslissing</h2>
          <div className="raster">
            <div className="kaart">
              <span className="tag acc">Voluit</span>
              <h3 style={{ marginTop: 14 }}>Alles binnen je band</h3>
              <p>Je herstel ligt binnen je eigen normale marge. Het schema van vandaag gaat door zoals gepland.</p>
            </div>
            <div className="kaart">
              <span className="tag" style={{ borderColor: "var(--warn)", color: "var(--warn)" }}>Afbouwen</span>
              <h3 style={{ marginTop: 14 }}>Intensiteit eruit</h3>
              <p>Eén signaal wijkt af. De zware blokken gaan eruit, de duur gaat omlaag. Wat wegvalt, schuift naar later in de week.</p>
            </div>
            <div className="kaart">
              <span className="tag">Rusten</span>
              <h3 style={{ marginTop: 14 }}>Vandaag niets</h3>
              <p>Meerdere signalen wijken af. Rust telt als nagekomen: je wordt nooit gestraft voor het opvolgen van het advies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap duo">
          <div>
            <h2 style={{ marginBottom: 20 }}>Waar LUPO naar kijkt</h2>
            <table className="tab">
              <thead><tr><th>Signaal</th><th>Hoe</th></tr></thead>
              <tbody>
                <tr><td>Hartslagvariabiliteit (HRV)</td><td>Het 7-daagse gemiddelde tegenover je eigen normale band, niet tegenover een algemene norm.</td></tr>
                <tr><td>Slaap</td><td>Duur en regelmaat over de laatste nachten.</td></tr>
                <tr><td>Rusthartslag</td><td>Afwijking van je eigen gemiddelde.</td></tr>
                <tr><td>Belasting</td><td>Wat je de laatste week deed tegenover de vier weken ervoor.</td></tr>
                <tr><td>Je eigen antwoord</td><td>Na elke training één vraag: te licht, goed of te zwaar.</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 style={{ marginBottom: 20 }}>Wat LUPO niet doet</h2>
            <ul className="lijst nee">
              <li>Geen medisch advies en geen diagnoses</li>
              <li>Geen beloftes over sneller worden of minder blessures</li>
              <li>Geen beslissingen door een taalmodel: de regels beslissen, de tekst legt uit</li>
              <li>Geen feed, geen likes, geen volgers</li>
            </ul>
            <div className="waarom" style={{ marginTop: 28 }}>De drempels in de regels worden getoetst aan onderzoek en nagekeken door een sportarts voor ze voor iedereen gelden.</div>
          </div>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap">
          <h2 style={{ marginBottom: 32 }}>Van race tot startlijn</h2>
          <div className="raster r4">
            {[
              ["01", "Kies je race", "Uit de wedstrijdkalender. Daaruit volgen de afstand, de datum en de fases."],
              ["02", "Je niveau", "Hoeveel uur je nu traint. Meer vraagt LUPO pas wanneer het nodig is."],
              ["03", "Je eerste week", "Meteen een schema, voor je iets hoeft te koppelen."],
              ["04", "Koppel je horloge", "Vanaf dan beslist LUPO elke ochtend met jouw gegevens."],
            ].map(([nr, t, p]) => (
              <div key={nr} className="kaart"><div className="nr">{nr}</div><h3>{t}</h3><p>{p}</p></div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}><Link href={pad("/prijzen#wachtlijst")} className="knop">Zet je op de wachtlijst</Link></div>
        </div>
      </section>
    </>
  );
}
