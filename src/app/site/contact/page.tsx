import type { Metadata } from "next";
import { BEDRIJF } from "../_ui/bedrijf";

export const metadata: Metadata = { title: "Contact en support" };

export default function Contact() {
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap smal">
          <div className="lbl acc">Contact en support</div>
          <h1 style={{ margin: "16px 0 22px" }}>Een vraag? Mail ons.</h1>
          <p className="lead">We antwoorden binnen twee werkdagen.</p>
        </div>
      </section>
      <section className="sectie">
        <div className="wrap raster">
          <div className="kaart">
            <h3>Support</h3>
            <p>Problemen met de app, je koppeling of je account.</p>
            <a className="acc" href={`mailto:${BEDRIJF.supportMail}`} style={{ display: "inline-block", marginTop: 12 }}>{BEDRIJF.supportMail}</a>
          </div>
          <div className="kaart">
            <h3>Privacy</h3>
            <p>Inzage, correctie, verwijdering of je data meenemen.</p>
            <a className="acc" href={`mailto:${BEDRIJF.privacyMail}`} style={{ display: "inline-block", marginTop: 12 }}>{BEDRIJF.privacyMail}</a>
          </div>
          <div className="kaart">
            <h3>Al het andere</h3>
            <p>Samenwerkingen, clubs, pers.</p>
            <a className="acc" href={`mailto:${BEDRIJF.mail}`} style={{ display: "inline-block", marginTop: 12 }}>{BEDRIJF.mail}</a>
          </div>
        </div>
      </section>
      <section className="sectie">
        <div className="wrap smal tekst">
          <h2>Je koppeling loskoppelen</h2>
          <p>In de app: Ik → Koppelingen → Loskoppelen. Of rechtstreeks in je Garmin Connect-account bij de verbonden apps. De gegevensstroom stopt meteen.</p>
          <h2>Je account verwijderen</h2>
          <p>In de app: Ik → Privacy → Account verwijderen, of per mail naar {BEDRIJF.privacyMail}. Alles is binnen 30 dagen weg.</p>
          <h2>Onderneming</h2>
          <p>{BEDRIJF.juridischeNaam} · {BEDRIJF.ondernemingsnummer}<br />{BEDRIJF.adres}</p>
        </div>
      </section>
    </>
  );
}
