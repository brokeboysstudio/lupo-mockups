import type { Metadata } from "next";
import { BEDRIJF } from "../_ui/bedrijf";

export const metadata: Metadata = { title: "Privacyverklaring" };

export default function Privacy() {
  const B = BEDRIJF;
  return (
    <section className="sectie eerste">
      <div className="wrap smal tekst">
        <div className="lbl acc">Privacyverklaring</div>
        <h1 style={{ margin: "16px 0 12px" }}>Privacy</h1>
        <p className="dim">Laatst bijgewerkt op {B.laatstBijgewerkt}.</p>
        <div className="concept">Concept. Moet nog juridisch nagekeken worden voor publicatie.</div>

        <h2>1. Wie we zijn</h2>
        <p>LUPO is een dienst van {B.juridischeNaam}, ingeschreven onder {B.ondernemingsnummer}, met zetel op {B.adres} (&quot;LUPO&quot;, &quot;wij&quot;). Wij zijn verwerkingsverantwoordelijke voor de persoonsgegevens die we via de app en de website verwerken. Vragen over privacy stuur je naar <a className="acc" href={`mailto:${B.privacyMail}`}>{B.privacyMail}</a>.</p>

        <h2>2. Welke gegevens we verwerken</h2>
        <ul>
          <li><strong>Accountgegevens:</strong> naam, e-mailadres, geboortejaar, gekozen race en trainingsniveau.</li>
          <li><strong>Activiteitsgegevens:</strong> type, tijdstip, duur, afstand, tempo, hartslag, vermogen, cadans, hoogte en route van je trainingen.</li>
          <li><strong>Gezondheidsgegevens:</strong> hartslagvariabiliteit (HRV), slaap en rusthartslag. Dit zijn bijzondere categorieën van persoonsgegevens in de zin van artikel 9 AVG.</li>
          <li><strong>Je antwoorden:</strong> hoe een training voelde, notities en spraaknotities die je zelf toevoegt.</li>
          <li><strong>Betaalgegevens:</strong> verwerkt door onze betaalprovider. Wij zien geen volledige kaartgegevens.</li>
          <li><strong>Technische gegevens:</strong> loggegevens die nodig zijn om de dienst veilig te laten werken.</li>
        </ul>

        <h2>3. Waar de gegevens vandaan komen</h2>
        <p>Van jou, en van de diensten die je zelf koppelt. Koppel je een Garmin-account, dan ontvangen we via de Garmin Connect API alleen de categorieën waarvoor je toestemming gaf in het Garmin-scherm. Je kan ook bestanden (FIT, TrainingPeaks-export) zelf inladen.</p>

        <h2>4. Waarvoor en op welke grond</h2>
        <table className="tab">
          <thead><tr><th>Doel</th><th>Gegevens</th><th>Grondslag</th></tr></thead>
          <tbody>
            <tr><td>Je account en je trainingsplan</td><td>Account, activiteiten</td><td>Uitvoering van de overeenkomst (art. 6.1.b AVG)</td></tr>
            <tr><td>De ochtendbeslissing</td><td>HRV, slaap, rusthartslag, activiteiten</td><td>Je uitdrukkelijke toestemming (art. 9.2.a AVG)</td></tr>
            <tr><td>Analyse na de training</td><td>Activiteiten, je antwoorden</td><td>Uitvoering van de overeenkomst</td></tr>
            <tr><td>Vergelijken met anderen (als je het aanzet)</td><td>LUPO-score, uitslagen, volume; nooit HRV of slaap</td><td>Je toestemming (art. 6.1.a AVG)</td></tr>
            <tr><td>Betaling en boekhouding</td><td>Account, factuurgegevens</td><td>Wettelijke verplichting (art. 6.1.c AVG)</td></tr>
            <tr><td>Beveiliging en foutopsporing</td><td>Technische gegevens</td><td>Gerechtvaardigd belang (art. 6.1.f AVG)</td></tr>
            <tr><td>Wachtlijst</td><td>E-mailadres</td><td>Je toestemming</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 14 }}>Je toestemming voor gezondheidsgegevens kan je op elk moment intrekken in de app. Zonder die gegevens werkt de ochtendbeslissing niet, de rest van de app wel.</p>

        <h2>5. Garmin-gegevens</h2>
        <ul>
          <li>We gebruiken gegevens uit Garmin alleen om jou de dienst te leveren: je beslissing, je plan en je analyses.</li>
          <li>We verkopen ze niet, delen ze niet met adverteerders en gebruiken ze niet voor marketing.</li>
          <li>We tonen ze niet aan andere gebruikers.</li>
          <li>We geven ze niet door aan diensten voor kunstmatige intelligentie en gebruiken ze niet om modellen te trainen.</li>
          <li>Koppel je Garmin los, in de app of in Garmin Connect, dan stopt de gegevensstroom meteen. Gegevens uit die koppeling verwijderen we binnen 30 dagen.</li>
        </ul>

        <h2>6. Hoe beslissingen tot stand komen</h2>
        <p>De ochtendbeslissing en de aanpassingen aan je plan volgen uit vaste, vooraf bepaalde regels. Er is geen geautomatiseerde besluitvorming met rechtsgevolgen in de zin van artikel 22 AVG: het is trainingsadvies, en jij beslist. Voor de uitleg in gewone taal en het coachgesprek gebruiken we een taalmodel van Anthropic. Dat model krijgt alleen de beslissing, je plan en je vraag, nooit je ruwe gezondheids- of horlogegegevens, en Anthropic gebruikt die invoer niet om modellen te trainen.</p>

        <h2>7. Met wie we gegevens delen</h2>
        <p>Alleen met dienstverleners die we nodig hebben om LUPO te laten werken. Met elk van hen hebben we een verwerkersovereenkomst.</p>
        <table className="tab">
          <thead><tr><th>Dienstverlener</th><th>Waarvoor</th><th>Locatie</th></tr></thead>
          <tbody>
            <tr><td>Supabase</td><td>Database en accounts</td><td>EU (Frankfurt)</td></tr>
            <tr><td>Vercel</td><td>Hosting van app en website</td><td>EU (Frankfurt); beheer vanuit de VS</td></tr>
            <tr><td>Anthropic</td><td>Uitleg in gewone taal en coachgesprek, zonder gezondheidsdata</td><td>VS</td></tr>
            <tr><td>[IN TE VULLEN] betaalprovider</td><td>Betalingen</td><td>[IN TE VULLEN]</td></tr>
            <tr><td>[IN TE VULLEN] e-maildienst</td><td>Wachtlijst en accountmails</td><td>[IN TE VULLEN]</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 14 }}>Bij doorgifte buiten de Europese Economische Ruimte steunen we op een adequaatheidsbesluit (EU-US Data Privacy Framework) of op de standaardcontractbepalingen van de Europese Commissie.</p>

        <h2>8. Hoe lang we gegevens bewaren</h2>
        <ul>
          <li>Account-, activiteits- en gezondheidsgegevens: zolang je account bestaat. Verwijder je je account, dan is alles binnen 30 dagen weg, ook uit back-ups binnen 90 dagen.</li>
          <li>Gegevens uit een koppeling die je verbreekt: binnen 30 dagen verwijderd.</li>
          <li>Facturen: zeven jaar, zoals de wet vraagt.</li>
          <li>Wachtlijst: tot je inschrijft of je afmeldt, maximaal twee jaar.</li>
        </ul>

        <h2>9. Minderjarigen</h2>
        <p>LUPO is er vanaf 16 jaar. Tot 18 jaar vragen we de toestemming van een ouder of voogd. Voor atleten onder 18 tellen HRV en slaap nooit mee in de score, en hun profiel blijft privé.</p>

        <h2>10. Je rechten</h2>
        <p>Je hebt recht op inzage, verbetering, verwijdering, beperking, overdraagbaarheid en bezwaar, en je kan je toestemming altijd intrekken. Veel daarvan kan rechtstreeks in de app. Voor de rest mail je naar <a className="acc" href={`mailto:${B.privacyMail}`}>{B.privacyMail}</a>; we antwoorden binnen een maand. Ben je niet tevreden, dan kan je klacht indienen bij de Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel, <a className="acc" href="https://www.gegevensbeschermingsautoriteit.be">gegevensbeschermingsautoriteit.be</a>.</p>

        <h2>11. Beveiliging</h2>
        <p>Gegevens zijn versleuteld tijdens transport en in opslag. Toegang is beperkt tot wie ze nodig heeft voor de dienst. Bij een datalek dat risico voor je inhoudt, verwittigen we je en de toezichthouder zoals de wet vraagt.</p>

        <h2>12. Wijzigingen</h2>
        <p>Veranderen we iets wezenlijks, dan laten we het je weten in de app en per mail voor het ingaat.</p>
      </div>
    </section>
  );
}
