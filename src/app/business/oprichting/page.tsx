import { NextLink, PageHead, Section, Table, Tag } from "../ui";

type Row = [string, string, string];

const groups: { title: string; when: string; rows: Row[] }[] = [
  {
    title: "Vóór de eerste betaling in de pilot",
    when: "november 2026",
    rows: [
      ["Juridische thuis", "Factureren via een bestaande vennootschap of een nieuwe BV. Met de boekhouder beslissen; de naam Brokeboys blijft intern.", "Jan + boekhouder"],
      ["Toestemming gezondheidsdata", "Uitdrukkelijke schriftelijke toestemming per pilotatleet (art. 9 GDPR).", "Jan"],
      ["Pilotvoorwaarden", "Eén pagina: wat de pilot is, geen medisch advies, stoppen kan altijd, terugbetaling.", "Claude schrijft, jurist leest"],
      ["Betaling", "Overschrijving of betaallink; nog geen abonnementssysteem.", "Jan"],
    ],
  },
  {
    title: "Vóór de lancering",
    when: "Q1 2027",
    rows: [
      ["Ondernemingsnummer en btw", "Via ondernemingsloket als het een nieuwe BV wordt.", "Jan"],
      ["Merk LUPO", "Beschikbaarheid nagaan in de relevante klassen (software, training) en registreren bij BOIP of EUIPO.", "Jan, eventueel merkengemachtigde"],
      ["Privacyverklaring en verwerkingsregister", "Wat, waarom, hoe lang, waar (eu-central-1).", "Claude schrijft, jurist leest"],
      ["DPIA", "Gegevensbeschermingseffectbeoordeling: waarschijnlijk verplicht bij verwerking van gezondheidsdata op schaal.", "jurist"],
      ["Verwerkersovereenkomsten", "Supabase, Vercel, Anthropic, betaalprovider.", "Jan"],
      ["Algemene voorwaarden", "Inclusief herroepingsrecht van 14 dagen voor digitale diensten en de disclaimer: trainingsadvies voor gezonde sporters.", "jurist"],
      ["MDR-toets", "Bevestigen dat de ochtendbeslissing geen medisch hulpmiddel is, en welke formuleringen veilig zijn.", "jurist"],
      ["API-voorwaarden", "Garmin en Strava: wat mag in de app, in de AI-prompt en voor anderen zichtbaar.", "Claude zoekt uit, Jan dient in"],
      ["Verzekering", "Beroepsaansprakelijkheid voor advies.", "Jan + makelaar"],
    ],
  },
  {
    title: "Vóór de tryout en de gratis laag",
    when: "2027 H2",
    rows: [
      ["Minderjarigen", "Ouderlijke toestemming tot 18, aparte privacytekst, geen HRV of slaap in de score.", "jurist"],
      ["Ladder-toestemming", "Zichtbaarheid op de Ladder is een aparte keuze; uitzetten kost de app niet.", "Claude bouwt"],
      ["Pack-contracten", "Raamwerk ligt al in Notion; laten nalezen voor de eerste atleet tekent.", "jurist"],
      ["Partnerlabo's", "Doorverwijsafspraak; medische uitslagen interpreteert de arts.", "Jan"],
    ],
  },
];

export default function Oprichting() {
  return (
    <>
      <PageHead
        eyebrow="Business · oprichting"
        title="Wat moet er staan voor de eerste euro"
        lede="Gezondheidsdata en advies: de juridische check gaat voor snelheid. Deze lijst is een werkversie om met boekhouder en jurist te overlopen, geen juridisch advies."
      />
      {groups.map((g) => (
        <Section key={g.title} title={g.title} intro={<Tag label="open">{g.when}</Tag>}>
          <Table head={["Wat", "Hoe", "Wie"]} rows={g.rows} />
        </Section>
      ))}
      <NextLink href="/business">Terug naar het overzicht</NextLink>
    </>
  );
}
