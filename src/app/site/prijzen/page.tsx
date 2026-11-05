import type { Metadata } from "next";
import { BEDRIJF } from "../_ui/bedrijf";

export const metadata: Metadata = { title: "Prijzen" };

const VRAGEN: [string, string][] = [
  ["Wanneer kan ik starten?", "LUPO is in testfase met een kleine groep atleten. Wie op de wachtlijst staat, hoort als eerste wanneer er plaats is."],
  ["Welk horloge heb ik nodig?", "Een horloge dat HRV en slaap meet. De Garmin-koppeling is in aanvraag. Tot dan kan je FIT-bestanden en een TrainingPeaks-export inladen."],
  ["Kan ik opzeggen?", "Maandelijks opzegbaar, zonder opzegtermijn. Een jaarabonnement loopt tot het einde van het jaar en wordt niet stilzwijgend verlengd zonder bericht vooraf."],
  ["Wat is het verschil met de functies van mijn horloge?", "Je horloge geeft een score. LUPO geeft een beslissing voor jouw plan naar jouw race, met de reden erbij, en past de rest van je week aan."],
  ["Is dit medisch advies?", "Nee. LUPO geeft trainingsadvies. Bij pijn, ziekte of twijfel over je gezondheid ga je naar een arts."],
];

export default function Prijzen() {
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap smal">
          <div className="lbl acc">Prijzen</div>
          <h1 style={{ margin: "16px 0 22px" }}>Betaal voor zekerheid, niet voor functies.</h1>
          <p className="lead">Eén abonnement met alles erin. Of betaal per racedoel.</p>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap raster">
          <div className="kaart">
            <span className="tag">Gratis · in golven</span>
            <h3 className="groot" style={{ marginTop: 14 }}>DFRNT tryout</h3>
            <div className="prijs" style={{ margin: "10px 0" }}>€0</div>
            <ul className="lijst">
              <li>Nulmeting en hertest</li>
              <li>8 tot 12 weken schema</li>
              <li>Je plek in de golf</li>
            </ul>
          </div>
          <div className="kaart acc-rand">
            <span className="tag acc">Premium</span>
            <h3 className="groot" style={{ marginTop: 14 }}>Tot aan je startlijn</h3>
            <div className="prijs" style={{ margin: "10px 0" }}>€19<small>per maand</small></div>
            <p className="dim" style={{ marginBottom: 14 }}>of €169 per jaar</p>
            <ul className="lijst">
              <li>Elke ochtend de beslissing met de reden</li>
              <li>Plan naar je race, dat zich aanpast</li>
              <li>Logboek met analyse van elke training</li>
              <li>Coachgesprek over je schema</li>
              <li>Proefperiode van zes weken, verdiend in blokken van twee</li>
            </ul>
          </div>
          <div className="kaart">
            <span className="tag">Eenmalig</span>
            <h3 className="groot" style={{ marginTop: 14 }}>Raceblok</h3>
            <div className="prijs" style={{ margin: "10px 0" }}>€49<small>per racedoel</small></div>
            <ul className="lijst">
              <li>Alles van Premium tot aan één race</li>
              <li>Taper en raceplan</li>
              <li>Geen abonnement</li>
            </ul>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 16 }}>
          <p className="dim klein-tekst">Prijzen inclusief btw. Pack is op uitnodiging, voor atleten uit de tryouts.</p>
        </div>
      </section>

      <section className="sectie" id="wachtlijst">
        <div className="wrap duo">
          <div>
            <h2 style={{ marginBottom: 16 }}>Wachtlijst</h2>
            <p className="lead">Laat je e-mail achter. Je krijgt één bericht wanneer er plaats is, of wanneer de volgende DFRNT-golf opent. Niets anders.</p>
          </div>
          <form className="formulier" action={`mailto:${BEDRIJF.mail}`} method="post" encType="text/plain">
            <input className="veld" type="email" name="email" placeholder="je@email.be" required />
            <select className="veld" name="interesse" defaultValue="premium">
              <option value="premium">Premium: ik heb een race</option>
              <option value="dfrnt">DFRNT: ik ben tussen 15 en 25</option>
            </select>
            <label className="dim klein-tekst" style={{ display: "flex", gap: 10 }}>
              <input type="checkbox" required /> Ik ga akkoord dat LUPO mijn e-mail bewaart voor dit ene bericht.
            </label>
            <button className="knop" type="submit">Zet me op de lijst</button>
          </form>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap smal">
          <h2 style={{ marginBottom: 16 }}>Vragen</h2>
          {VRAGEN.map(([v, a]) => (
            <details key={v} className="vraag"><summary>{v}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>
    </>
  );
}
