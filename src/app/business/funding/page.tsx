import { Callout, NextLink, PageHead, Section, Table, Tag } from "../ui";

export default function Funding() {
  return (
    <>
      <PageHead
        eyebrow="Business · funding"
        title="Wat het kost en waar het geld vandaan komt"
        lede="Stand 7 november. In Voorzichtig, Basis en Groei is ongeveer €6.000 vooraf genoeg en volstaan eigen middelen. Het scenario Ambitie vraagt ±€9.000 marketing per maand: dat kan alleen met subsidie of kapitaal. Subsidies vullen aan; ze vervangen de test op betaalbereidheid niet."
      />

      <Section title="Wat het kost tot de go/no-go">
        <Table
          head={["Post", "Bedrag", "Status"]}
          rows={[
            ["Sportarts: toetsing schemaregels", "€500–800", <Tag key="a" label="feit">uit protocol</Tag>],
            ["Juridische check: GDPR, MDR, minderjarigen", "volgens offerte", <Tag key="b" label="open">offerte vragen</Tag>],
            ["Hosting en AI tijdens het testen", "< €50/maand", <Tag key="c" label="aanname" />],
            ["Vercel Pro voor website en app", "$20/maand", <Tag key="v" label="feit">bouwkrediet bijna op</Tag>],
            ["Tijd Jan", "website afwerken, Garmin-aanvraag, testen met Bob en Axel", <Tag key="d" label="aanname" />],
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
            ["1", "Eerste klanten", "€49 per racedoel, vooraf", "Factuur via een vennootschap; voorwaarden en privacy klaar", <Tag key="1" label="aanbeveling">na de testers</Tag>],
            ["2", "Eigen middelen", "±€6.000 tot de omzet de kosten draagt (Voorzichtig tot Groei)", "Vertrekpunt sinds mei 2026: bootstrap, geen co-founder", <Tag key="2" label="feit">loopt</Tag>],
            ["3", "VLAIO Innovatieve starterssteun", "€50.000 plus begeleiding, per oproep", "Onderneming < 2 jaar of in oprichting; uitbetaling pas met rechtspersoon", <Tag key="3" label="aanbeveling">Q1 2027</Tag>],
            ["4", "Erasmus+ Sport, kleine partnerschappen", "Europees breedtesportproject, ideaal voor de jeugdtryout", "Club of vzw dient in, LUPO is partner; vorige deadlines 5 maart", <Tag key="4" label="aanbeveling">maart 2027</Tag>],
            ["5", "Sport Vlaanderen", "Talentdetectie via federaties en Topsport", "Geen rechtstreeks kanaal voor een bedrijf gevonden", <Tag key="5" label="open">via federatie</Tag>],
            ["6", "Winwinlening", "Lening van vrienden en familie met belastingvoordeel", "Voorwaarden 2026 na te gaan", <Tag key="6" label="aanname">te checken</Tag>],
            ["7", "VLAIO Ontwikkelingsproject", "25–50% van de kosten, min. €25.000 subsidie", "Sterke businesscase, cofinanciering", <Tag key="7" label="open">later</Tag>],
            ["8", "Seed", "€500K–1M", "Alleen voor Ambitie, en pas met bewijs: betalende klanten, retentie, automatische data", <Tag key="8" label="open">na bewijs</Tag>],
          ]}
        />
      </Section>

      <Callout title="Kanttekening">
        Een subsidie vraagt een vennootschap, een businesscase en administratie. Dat is werk voor één persoon. Daarom: eerst de website en
        de eerste betalende atleten, dan de starterssteun met die cijfers in de aanvraag. Een aanvraag met drie betalende klanten is
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
