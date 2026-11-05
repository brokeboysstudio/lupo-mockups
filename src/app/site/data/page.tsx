import Link from "next/link";
import type { Metadata } from "next";
import { pad } from "../_ui/bedrijf";

export const metadata: Metadata = { title: "Je data" };

const RIJEN: [string, string, string][] = [
  ["Activiteiten", "Type, duur, afstand, hartslag, vermogen, tempo, route", "Je logboek, wat je deed tegenover het plan, en je belasting"],
  ["Hartslagvariabiliteit", "Nachtelijke HRV", "De ochtendbeslissing: herstel tegenover je eigen band"],
  ["Slaap", "Duur en fases", "De ochtendbeslissing"],
  ["Rusthartslag", "Dagwaarde", "De ochtendbeslissing"],
  ["Je antwoorden", "Gevoel na de training, notities", "Het volgende blok lichter of zwaarder maken"],
  ["Account", "Naam, e-mail, geboortejaar, je race", "Je plan opbouwen en je account beheren"],
];

export default function Data() {
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap smal">
          <div className="lbl acc">Je data</div>
          <h1 style={{ margin: "16px 0 22px" }}>Welke data, en waarom.</h1>
          <p className="lead">LUPO gebruikt alleen wat nodig is om jouw schema te maken. Hieronder staat per gegeven wat we ermee doen. De volledige regels staan in de <Link href={pad("/privacy")} className="acc">privacyverklaring</Link>.</p>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap">
          <table className="tab">
            <thead><tr><th>Gegeven</th><th>Wat precies</th><th>Waarvoor</th></tr></thead>
            <tbody>{RIJEN.map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="sectie">
        <div className="wrap raster">
          <div className="kaart">
            <h3>Gezondheidsgegevens</h3>
            <p>HRV, slaap en rusthartslag zijn gezondheidsgegevens. We verwerken ze alleen met je uitdrukkelijke toestemming, en je kan die op elk moment intrekken.</p>
          </div>
          <div className="kaart">
            <h3>Nooit in een taalmodel</h3>
            <p>De beslissing komt uit vaste regels. Voor de uitleg in gewone taal krijgt het taalmodel alleen de beslissing en het plan, nooit je ruwe gezondheids- of horlogedata.</p>
          </div>
          <div className="kaart">
            <h3>Nooit gedeeld</h3>
            <p>Je data wordt niet verkocht en niet gedeeld met adverteerders. Vergelijken met anderen gebeurt alleen als jij dat aanzet, en HRV en slaap worden nooit gedeeld.</p>
          </div>
          <div className="kaart">
            <h3>In de EU</h3>
            <p>Je gegevens staan op servers in Frankfurt. Dienstverleners buiten de EU krijgen alleen wat strikt nodig is, onder Europese contractclausules.</p>
          </div>
          <div className="kaart">
            <h3>Ontkoppelen is verwijderen</h3>
            <p>Koppel je je horloge los, dan stopt de stroom meteen. Gegevens uit die koppeling worden binnen 30 dagen verwijderd, tenzij je ze zelf wil houden.</p>
          </div>
          <div className="kaart">
            <h3>Alles meenemen</h3>
            <p>Je kan al je gegevens downloaden in een gangbaar formaat, of je account met alles erin laten verwijderen.</p>
          </div>
        </div>
      </section>
    </>
  );
}
