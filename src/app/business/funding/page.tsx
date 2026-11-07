import { Callout, NextLink, PageHead, Section, Table, Tag } from "../ui";

export default function Funding() {
  return (
    <>
      <PageHead
        eyebrow="Business · funding"
        title="Wat het kost en waar het geld vandaan komt"
        lede="Beslist op 4 mei 2026: bootstrap, geen co-founder, eerst 12 maanden bewijzen. Subsidies vullen aan; ze vervangen de test op betaalbereidheid niet."
      />

      <Section title="Wat het kost tot de go/no-go (half december)">
        <Table
          head={["Post", "Bedrag", "Status"]}
          rows={[
            ["Sportarts: toetsing schemaregels", "€500–800", <Tag key="a" label="feit">uit protocol</Tag>],
            ["Juridische check: GDPR, MDR, minderjarigen", "volgens offerte", <Tag key="b" label="open">offerte vragen</Tag>],
            ["Hosting en AI tijdens de pilot", "< €50/maand", <Tag key="c" label="aanname" />],
            ["Tijd Jan", "±4 u in week 1, daarna ±2 u/week plus de ochtendcontrole", <Tag key="d" label="aanname" />],
          ]}
        />
      </Section>

      <Section title="Wat het kost tot break-even" intro={<>Basisscenario: 392 betalend eind 2027, 605 eind 2028, 751 eind 2029. Positief vanaf maart 2027 zonder loon voor Jan; met loon ligt break-even later. <Tag label="aanname" /></>}>
        <Table
          head={["Post", "Wanneer", "Richtbedrag"]}
          rows={[
            ["Merkregistratie LUPO (Benelux of EU)", "vóór lancering", "volgens BOIP/EUIPO-tarief, na te gaan"],
            ["Vennootschap, boekhouder", "vóór de eerste factuur", "na te gaan met boekhouder"],
            ["Supabase, Vercel, Claude, Mollie", "vanaf de eerste betalende klant", "±€0,50–1 per betalende klant per maand"],
            ["Fysieke Combine", "vanaf 2027 H2", "deels gedekt door €99 inschrijving"],
            ["Pack Talent", "vanaf 2027 H2", "±€500 per atleet per jaar"],
            ["Eerste hire", "bij 500 betalend én €8.000 MRR", "uit omzet"],
          ]}
        />
      </Section>

      <Section title="Bronnen van geld, in volgorde">
        <Table
          head={["#", "Bron", "Wat", "Voorwaarde", "Oordeel"]}
          rows={[
            ["1", "Pilotinkomsten", "€49 per racedoel, vooraf", "Factuur via een vennootschap; voorwaarden en privacy klaar", <Tag key="1" label="aanbeveling">nu</Tag>],
            ["2", "Eigen middelen", "Bootstrap", "Beslist 4 mei 2026", <Tag key="2" label="feit">loopt</Tag>],
            ["3", "VLAIO Innovatieve starterssteun", "€50.000 plus begeleiding, per oproep", "Onderneming < 2 jaar of in oprichting; uitbetaling pas met rechtspersoon", <Tag key="3" label="aanbeveling">Q1 2027</Tag>],
            ["4", "Erasmus+ Sport, kleine partnerschappen", "Europees breedtesportproject, ideaal voor de jeugdtryout", "Club of vzw dient in, LUPO is partner; vorige deadlines 5 maart", <Tag key="4" label="aanbeveling">maart 2027</Tag>],
            ["5", "Sport Vlaanderen", "Talentdetectie via federaties en Topsport", "Geen rechtstreeks kanaal voor een bedrijf gevonden", <Tag key="5" label="open">via federatie</Tag>],
            ["6", "Winwinlening", "Lening van vrienden en familie met belastingvoordeel", "Voorwaarden 2026 na te gaan", <Tag key="6" label="aanname">te checken</Tag>],
            ["7", "VLAIO Ontwikkelingsproject", "25–50% van de kosten, min. €25.000 subsidie", "Sterke businesscase, cofinanciering", <Tag key="7" label="open">later</Tag>],
            ["8", "Seed", "€500K–1M", "Na 12 maanden bewijs (beslist mei 2026)", <Tag key="8" label="open">2028</Tag>],
          ]}
        />
      </Section>

      <Callout title="Kanttekening">
        Een subsidie vraagt een vennootschap, een businesscase en administratie. Dat is werk voor één persoon. Daarom: eerst de pilot
        met betalende atleten, dan de starterssteun met die cijfers in de aanvraag. Een aanvraag met drie betalende klanten is
        sterker dan een aanvraag met een plan.
      </Callout>

      <Section title="Bronnen">
        <ul className="text-[13px] flex flex-col gap-1">
          <li><a className="text-accent hover:underline" href="https://app.notion.com/p/41150f6b380981b9bd27f6a72515de39" target="_blank" rel="noreferrer">Notion · Kost per klant</a> (detail in LUPO-financieel-plan.xlsx)</li>
          <li><a className="text-accent hover:underline" href="https://www.vlaio.be/nl/subsidies-financiering/subsidiedatabank/innovatieve-starterssteun" target="_blank" rel="noreferrer">VLAIO · Innovatieve starterssteun</a></li>
          <li><a className="text-accent hover:underline" href="https://www.vlaio.be/nl/subsidies-financiering/subsidiedatabank/ontwikkelingsproject-subsidie-voor-innovatie" target="_blank" rel="noreferrer">VLAIO · Ontwikkelingsproject</a></li>
          <li><a className="text-accent hover:underline" href="https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-2/small-scale-partnerships" target="_blank" rel="noreferrer">Erasmus+ · Small-scale partnerships</a></li>
          <li><a className="text-accent hover:underline" href="https://www.vlaio.be/nl/subsidies-financiering/subsidiedatabank/sport-en-bewegen-steunmaatregelen" target="_blank" rel="noreferrer">VLAIO · Sport en bewegen steunmaatregelen</a></li>
        </ul>
      </Section>

      <NextLink href="/business/oprichting">Oprichting</NextLink>
    </>
  );
}
