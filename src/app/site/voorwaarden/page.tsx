import type { Metadata } from "next";
import Link from "next/link";
import { BEDRIJF, pad } from "../_ui/bedrijf";

export const metadata: Metadata = { title: "Gebruiksvoorwaarden" };

export default function Voorwaarden() {
  const B = BEDRIJF;
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Gebruiksvoorwaarden</div>
        <h1 style={{ margin: "16px 0 12px" }}>Voorwaarden</h1>
        <p className="dim">Laatst bijgewerkt op {B.laatstBijgewerkt}.</p>
        <div className="concept">Concept. Moet nog juridisch nagekeken worden voor publicatie.</div>

        <h2>1. Wie</h2>
        <p>Deze voorwaarden gelden tussen jou en {B.juridischeNaam}, {B.ondernemingsnummer}, {B.adres}, voor het gebruik van de LUPO-app en de website {B.domein}.</p>

        <h2>2. Wat LUPO is</h2>
        <p>LUPO geeft trainingsadvies op basis van je trainings- en herstelgegevens: een dagelijkse beslissing, een plan naar je race en analyses van je trainingen. <strong>LUPO geeft geen medisch advies</strong> en stelt geen diagnoses. Bij pijn, ziekte, een blessure of twijfel over je gezondheid raadpleeg je een arts. Je traint op eigen verantwoordelijkheid, en je beslist zelf of je het advies volgt.</p>

        <h2>3. Je account</h2>
        <ul>
          <li>Je moet minstens 16 jaar zijn. Tot 18 jaar heb je de toestemming van een ouder of voogd nodig.</li>
          <li>Je geeft juiste gegevens op en houdt je wachtwoord voor jezelf.</li>
          <li>Eén account is voor één persoon.</li>
        </ul>

        <h2>4. Abonnementen en betaling</h2>
        <ul>
          <li>Premium kost €19 per maand of €169 per jaar. Een raceblok kost eenmalig €49 en loopt tot de datum van die race. Prijzen zijn inclusief btw.</li>
          <li>Een maandabonnement is maandelijks opzegbaar en loopt tot het einde van de betaalde maand.</li>
          <li>Een jaarabonnement verlengen we alleen na een bericht vooraf, en je kan het daarna maandelijks opzeggen.</li>
          <li>Prijswijzigingen melden we minstens 30 dagen vooraf. Je kan dan opzeggen voor ze ingaan.</li>
        </ul>

        <h2>5. Herroepingsrecht</h2>
        <p>Als consument heb je 14 dagen om zonder reden af te zien van een aankoop. Begin je in die periode uitdrukkelijk al met de dienst, dan betaal je bij herroeping alleen het deel dat je gebruikte.</p>

        <h2>6. DFRNT-tryouts</h2>
        <p>Meedoen aan een tryout is gratis. Een uitnodiging voor een fysieke test is geen recht en hangt af van de resultaten van de golf. Voor de fysieke test gelden aparte afspraken die we je vooraf bezorgen.</p>

        <h2>7. Koppelingen met andere diensten</h2>
        <p>Koppel je een dienst zoals Garmin, dan gelden ook de voorwaarden van die dienst. LUPO hoort bij geen enkel horlogemerk. Valt een koppeling weg door een beslissing van die dienst, dan kan je je gegevens nog altijd zelf inladen.</p>

        <h2>8. Jouw gegevens en inhoud</h2>
        <p>Je gegevens blijven van jou. Je geeft ons alleen het recht ze te gebruiken om je de dienst te leveren. Hoe we dat doen, staat in de <Link className="acc" href={pad("/privacy")}>privacyverklaring</Link>.</p>

        <h2>9. Wat niet mag</h2>
        <ul>
          <li>De dienst gebruiken voor iemand anders zonder diens toestemming.</li>
          <li>Uitslagen claimen die niet van jou zijn.</li>
          <li>De app kopiëren, ontleden of geautomatiseerd uitlezen.</li>
        </ul>

        <h2>10. Aansprakelijkheid</h2>
        <p>We doen er alles aan om LUPO juist en beschikbaar te houden, maar kunnen niet garanderen dat de dienst altijd zonder fouten werkt. We zijn niet aansprakelijk voor schade door het volgen of niet volgen van trainingsadvies, behalve bij opzet of grove fout. Wettelijke rechten van consumenten blijven onverkort gelden.</p>

        <h2>11. Stoppen</h2>
        <p>Je kan je account op elk moment verwijderen. Wij kunnen een account afsluiten bij ernstige of herhaalde inbreuk op deze voorwaarden, na een bericht vooraf behalve bij misbruik.</p>

        <h2>12. Recht en geschillen</h2>
        <p>Op deze voorwaarden is het Belgisch recht van toepassing. We zoeken eerst samen een oplossing via {B.mail}. Lukt dat niet, dan kan je terecht bij de Consumentenombudsdienst of de bevoegde rechtbank.</p>
      </div>
    </section>
  );
}
