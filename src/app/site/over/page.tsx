import type { Metadata } from "next";
import { BEDRIJF } from "../_ui/bedrijf";

export const metadata: Metadata = { title: "Over LUPO" };

export default function Over() {
  return (
    <>
      <section className="sectie eerste">
        <div className="wrap smal">
          <div className="lbl acc">Over LUPO</div>
          <h1 style={{ margin: "16px 0 22px" }}>De laatste onafhankelijke coach.</h1>
          <p className="lead">LUPO is gebouwd door een leeftijdsgroeper die zelf naar een Ironman traint. Uit frustratie over horloges die een score geven maar niet zeggen wat je ermee moet doen.</p>
        </div>
      </section>
      <section className="sectie">
        <div className="wrap smal tekst">
          <h2>Waarom</h2>
          <p>De meeste sporters met een horloge krijgen elke ochtend een getal. Wat ze niet krijgen, is een beslissing voor hun plan, met de reden erbij. Daarom zijn er twee uitersten: wie blind het schema volgt, en wie elke dag twijfelt.</p>
          <p>LUPO zit daartussen. Vaste regels beslissen, een duidelijke zin legt uit. Rust die LUPO oplegt telt mee, zodat niemand gestraft wordt voor het opvolgen van het advies.</p>
          <h2>Onafhankelijk</h2>
          <p>LUPO werkt met je horloge, maar hoort bij geen enkel merk. Je data blijft van jou, en je neemt ze mee wanneer je wil.</p>
          <h2>Atleet nul</h2>
          <p>De oprichter traint zelf met LUPO, naar IRONMAN Switzerland Thun op 4 juli 2027. Elke regel in de app wordt eerst op die eigen voorbereiding getest.</p>
          <h2>Onderneming</h2>
          <p>{BEDRIJF.juridischeNaam}<br />{BEDRIJF.ondernemingsnummer}<br />{BEDRIJF.adres}<br /><a className="acc" href={`mailto:${BEDRIJF.mail}`}>{BEDRIJF.mail}</a></p>
        </div>
      </section>
    </>
  );
}
