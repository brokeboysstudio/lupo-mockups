import { Callout, Card, NextLink, PageHead, Section, Table, Tag } from "../ui";

const phases = [
  {
    when: "nov 2026",
    name: "Voorbereiden",
    goal: "Website live · Garmin-aanvraag ingediend",
    jan: ["Bedrijfsgegevens en drie mailadressen op @lupo.coach", "Akkoord op de verhuizing van de website naar lupo.coach", "Garmin Connect Developer Program aanvragen", "Schemaregels zelf onderbouwen voor de sportarts"],
    claude: ["Het verhaal, de mockups en de website bijhouden", "Website in de Lupo-repo zetten na akkoord", "Garmin-formulier invullen met Jan", "Financieel plan bijwerken bij elke beslissing"],
  },
  {
    when: "daarna, datum open",
    name: "Testen en gesprekken",
    goal: "Go/no-go op K1–K6",
    jan: ["Jan, Bob en Axel testen, zonder formulieren", "Gesprekken: 3–4 per week, met de rondleiding uit de mockups", "Offerte juridische check, consult sportarts"],
    claude: ["Notities na elk gesprek verwerken", "Testdata en volggedrag bijhouden", "Alleen bouwen wat het testen nodig heeft"],
  },
  {
    when: "jan – mrt 2027",
    name: "Kern bouwen",
    goal: "50 betalend · automatische data",
    jan: ["Vennootschap en juridische thuis regelen", "OSS-btw regelen met de boekhouder", "VLAIO-starterssteun aanvragen", "Erasmus+-aanvraag met een club, deadline begin maart"],
    claude: ["Supabase eu-central-1, login", "Eerste wearable-koppeling", "Betalingen via Mollie (Bancontact, dan SEPA)", "Chatlimiet en bijkoop", "AI-verbruik per klant loggen"],
  },
  {
    when: "apr – jul 2027",
    name: "Locked In",
    goal: "250 betalend",
    jan: ["Eigen voorbereiding Thun als publiek verhaal", "Vijf clubs aansluiten", "Eerste partnerlabo"],
    claude: ["Content uit Jans eigen data", "Clubdashboard voorbereiden"],
  },
  {
    when: "H2 2027",
    name: "Eerste tryout",
    goal: "250–500 betalend · eerste potentials",
    jan: ["Eerste tryout-golf (september)", "Jeugdwerking van clubs betrekken", "Fysieke Combine voor de top"],
    claude: ["Tryout-flow: nulmeting, 8–12 weken, hertest", "Ladder per golf, talentsignaal vanaf 16"],
  },
  {
    when: "2028",
    name: "Break-even",
    goal: "break-even mét loon voor Jan",
    jan: ["Eerste hire bij 500 betalend en €8.000 MRR", "Nederland openen"],
    claude: ["Schaal en kost per gebruiker bewaken"],
  },
];

export default function Gameplan() {
  return (
    <>
      <PageHead
        eyebrow="Business · gameplan"
        title="Van nu tot break-even"
        lede="Zes fases. Elke fase heeft één doel dat je kunt meten. Eerst voorbereiden, dan testen en gesprekken; doelen daarna zijn scenario's, geen prognoses, en hangen af van de go/no-go."
      />

      <Callout title="Wat break-even hier betekent">
        Het financieel plan (basisscenario) toont positieve maanden vanaf maart 2027, maar alleen omdat Jan zichzelf niets uitbetaalt.
        Betalende klanten eind 2027, 2028 en 2029: 392, 605 en 751. Het echte doel is break-even mét een loon voor Jan.
        Details: <a className="text-accent hover:underline" href="https://app.notion.com/p/41150f6b380981b9bd27f6a72515de39" target="_blank" rel="noreferrer">Kost per klant</a> en LUPO-financieel-plan.xlsx.
      </Callout>

      <Section title="Fases">
        <div className="flex flex-col gap-4">
          {phases.map((p, i) => (
            <Card key={p.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-accent">{String(i).padStart(2, "0")}</span>
                  <h3 className="font-display text-[24px] leading-none">{p.name}</h3>
                </div>
                <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-2">{p.when}</span>
              </div>
              <p className="text-[14px]">
                Doel: <b>{p.goal}</b>
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-line">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-1">Jan</p>
                  <ul className="text-[13px] text-muted-2 leading-relaxed list-disc pl-5">
                    {p.jan.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-1">Claude</p>
                  <ul className="text-[13px] text-muted-2 leading-relaxed list-disc pl-5">
                    {p.claude.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Killcriteria" intro="Wie er één haalt, stopt of stuurt bij op data, niet op gevoel.">
        <Table
          head={["#", "Criterium", "Wanneer"]}
          rows={[
            ["K1", "Minder dan 8 van 12 gesprekken positief op H1–H3", "na de gesprekken"],
            ["K2", "Minder dan 3 van 12 betalen €49 vooraf", "na de gesprekken"],
            ["K3", "Drie maanden na de Garmin-aanvraag nog geen automatische databron", "aanvraag + 3 maanden"],
            ["K4", "Testatleten volgen de beslissing op minder dan de helft van de dagen na week 4", "na zes weken testen"],
            ["K5", "Sportarts weigert de kernregels te tekenen", "bij consult"],
            ["K6", "Jurist: kernfunctie valt onder MDR zonder werkbare formulering", "bij advies"],
          ]}
        />
      </Section>

      <Section title="Hypotheses voor de 12 gesprekken" intro="Voor later: de gesprekken starten pas na het voorbereidende werk. Vraag naar wat iemand de laatste keer deed, en vraag om geld. Mix: 6 leeftijdsgroepers, 2 hybride, 2 coaches, 2 jeugdtrainers.">
        <Table
          head={["#", "Hypothese", "Vraag", "Geslaagd als"]}
          rows={[
            ["H1", "De ochtendtwijfel is echt", "Laatste keer dat je niet wist of je moest trainen. Wat deed je?", "8/12 concreet voorbeeld"],
            ["H2", "Garmin en WHOOP lossen het niet op", "Wanneer negeer je je readiness-score?", "7/12 negeren of wantrouwen"],
            ["H3", "De reden maakt het verschil", "Mockup met en zonder waarom-regel. Welke volg je?", "9/12 kiezen met reden"],
            ["H4", "Betalen bij een race", "Raceblok €49, stap je nu in?", "3/12 betalen effectief"],
            ["H5", "Onafhankelijkheid telt", "Ooit van horloge gewisseld? Wat verloor je?", "5/12 noemen lock-in"],
            ["H6", "Rust telt als nagekomen", "Hoe voel je je bij een gemiste training?", "6/12 schuld of compensatie"],
            ["H7", "Coaches willen een merkneutraal instrument", "Hoeveel tijd gaat naar dagelijkse bijsturing?", "2 van de 2 coaches ≥2 u/week"],
            ["H8", "De Ladder trekt", "Elk kwartaal een test om te zien waar je staat?", "8/12 ja, anders de Ladder uitstellen"],
            ["H9", "Jeugdtrainers missen progressiedata", "Hoe vind je talent dat niet van een topclub komt?", "2 van de 2 beschrijven het gat"],
          ]}
        />
      </Section>

      <Section title="Waar het kan vastlopen">
        <ul className="text-[14px] text-muted-2 leading-relaxed list-disc pl-5 max-w-[75ch]">
          <li><b className="text-text">Data-toegang.</b> Strava verbiedt AI-gebruik en tonen aan anderen; Garmin pauzeerde aanvragen. <Tag label="feit" /></li>
          <li><b className="text-text">Focus.</b> 61 schermen en een lange ideeënlijst voor één bouwer. Alles wat niet bijdraagt aan de beslissing met reden wacht tot 250 betalend. <Tag label="aanbeveling" /></li>
          <li><b className="text-text">Stilstand.</b> Van 11 oktober tot 5 november bewoog er niets. Daarom staat elke stap hier, met wie hem doet.</li>
        </ul>
      </Section>

      <NextLink href="/business/funding">Funding en subsidies</NextLink>
    </>
  );
}
