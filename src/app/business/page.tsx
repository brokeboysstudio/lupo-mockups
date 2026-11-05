import Link from "next/link";
import { Card, PageHead, Section, Table, Tag } from "./ui";

const parts = [
  {
    href: "/business/positionering",
    title: "Positionering",
    desc: "Voor wie, welke pijn, waarom LUPO en niet Garmin, Runna of een coach. Twee groepen: wie betaalt en wie je zoekt.",
  },
  {
    href: "/business/model",
    title: "Model en prijzen",
    desc: "Gratis, Premium en Pack. Prijzen, proefperiode in blokken, unit economics en break-even.",
  },
  {
    href: "/business/dfrnt",
    title: "DFRNT tryouts",
    desc: "Vier niveaus van app tot LUPO Athlete, twee deuren naar de tryout, normtabel per leeftijdsgroep.",
  },
  {
    href: "/business/gameplan",
    title: "Gameplan",
    desc: "Van vandaag tot 500 betalend, in fases met gates. Killcriteria en de hypotheses voor de 12 gesprekken.",
  },
  {
    href: "/business/funding",
    title: "Funding en subsidies",
    desc: "Wat het kost tot go/no-go en tot break-even, en waar het geld vandaan kan komen.",
  },
  {
    href: "/business/oprichting",
    title: "Oprichting",
    desc: "Wat er juridisch, administratief en praktisch moet staan voor de eerste euro binnenkomt.",
  },
];

const notion = [
  ["Waarom iemand voor LUPO kiest", "https://app.notion.com/p/40f50f6b3809814988f2dfd0a32eed5a"],
  ["Doorlichting en versnellingsplan", "https://app.notion.com/p/40f50f6b380981ac9666f4c3217b7c64"],
  ["Concurrenten, features en ecosysteem", "https://app.notion.com/p/40f50f6b380981b3bee8fd5bcc7e1a54"],
  ["Schemaregels getoetst aan onderzoek", "https://app.notion.com/p/40f50f6b38098162afa5de6a5eeef7a2"],
  ["Businessplan en Free/Premium/Pack (aug)", "https://app.notion.com/p/3c650f6b380981ae82decb20bc039def"],
  ["Doelgroepen en scouting (aug)", "https://app.notion.com/p/3c650f6b3809815a81dcfee07f948e0e"],
];

export default function BusinessHome() {
  return (
    <>
      <PageHead
        eyebrow="Het verhaal · business"
        title="LUPO opzetten als bedrijf"
        lede="Alles wat nodig is om van een werkende app naar een bedrijf te gaan, op één plek. De productrenders en doorklikbare flows staan in de andere secties van deze site; hier staat de business erachter."
      />

      <Section title="In vijf regels">
        <ul className="flex flex-col gap-2 text-[15px] leading-relaxed max-w-[75ch] list-disc pl-5 marker:text-accent">
          <li>
            <b>Belofte:</b> elke ochtend één beslissing, met de reden erbij. Tot aan je startlijn.
          </li>
          <li>
            <b>Wie betaalt:</b> de leeftijdsgroeper van 28 tot 50 met een A-race. <b>Wie je zoekt:</b> jonge potentials
            van 15 tot 25, via de gratis laag.
          </li>
          <li>
            <b>Grootste risico:</b> toegang tot data. LUPO zet zich af tegen Garmin en Strava, maar hangt aan hun data.
          </li>
          <li>
            <b>Volgende stap:</b> een betaalde pilot van zes weken vanaf half november, met drie atleten die €49 vooraf
            betalen.
          </li>
          <li>
            <b>Beslismoment:</b> go/no-go half december, op zes killcriteria.
          </li>
        </ul>
      </Section>

      <Section title="Onderdelen">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {parts.map((p) => (
            <Link key={p.href} href={p.href} className="group">
              <Card className="h-full group-hover:border-accent transition-colors">
                <h3 className="font-display text-[22px] leading-tight">{p.title}</h3>
                <p className="text-[13px] text-muted-2 leading-relaxed font-light">{p.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Gates" intro="Geen van deze gates is op 5 november gestart. Ze hebben elk weken doorlooptijd, dus ze lopen parallel.">
        <Table
          head={["Gate", "Wat moet er liggen", "Doorlooptijd", "Status"]}
          rows={[
            ["Validatie", "12 gesprekken, minstens 8 positief, en 3 betalende pilotatleten", "4–6 weken", <Tag key="v" label="open">niet gestart</Tag>],
            ["Sportarts", "Akkoord op de kernregels van het schema", "5–6 weken, €500–800", <Tag key="s" label="open">niet gestart</Tag>],
            ["Juridisch", "GDPR, medische claims (MDR), minderjarigen", "volgens offerte", <Tag key="j" label="open">niet gestart</Tag>],
            ["Data", "Garmin Connect Developer Program, Apple Health-route", "weken tot maanden", <Tag key="d" label="open">niet gestart</Tag>],
          ]}
        />
      </Section>

      <Section title="Bronnen in Notion">
        <ul className="flex flex-col gap-1 text-[14px]">
          {notion.map(([t, u]) => (
            <li key={u}>
              <a href={u} className="text-accent hover:underline" target="_blank" rel="noreferrer">
                {t}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
