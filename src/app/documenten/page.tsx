import type { Metadata } from "next";
import { VerhaalPagina } from "../_verhaal/kop";
import { PageHead, Section, Table } from "../business/ui";

export const metadata: Metadata = { title: "Documenten · LUPO" };

const a = (href: string, t: string) => (
  <a className="text-accent hover:underline" href={href} target="_blank" rel="noreferrer">{t}</a>
);

export default function Documenten() {
  return (
    <VerhaalPagina actief="/documenten">
      <PageHead eyebrow="Het verhaal · documenten" title="Alle documenten" lede="De volledige analyses staan in Notion. Deze pagina verwijst ernaar; de inhoud wordt niet gekopieerd." />
      <Section title="Analyses en plannen">
        <Table
          head={["Document", "Datum", "Wat erin staat"]}
          rows={[
            [a("https://app.notion.com/p/41150f6b380981b9bd27f6a72515de39", "Kost per klant"), "7/11/2026", "AI, hosting en betaling per klant, regels om tokens laag te houden, chatlimiet met bijkoop"],
            [a("/financieel/LUPO-financieel-plan.xlsx", "Financieel plan 2027–2029 (Excel)"), "7/11/2026", "Vier scenario's, maandprognose over 36 maanden, unit economics, jaaroverzicht"],
            [a("https://app.notion.com/p/41050f6b3809810288adca9ebc04719d", "TrainingPeaks doorgelicht"), "6/11/2026", "Wat TrainingPeaks heeft en wat LUPO overneemt, per prioriteit"],
            [a("https://app.notion.com/p/40f50f6b380981ac9666f4c3217b7c64", "Doorlichting en versnellingsplan"), "5/11/2026", "Stand, gates, plan van zes weken, go/no-go half december"],
            [a("https://app.notion.com/p/40f50f6b3809814988f2dfd0a32eed5a", "Waarom iemand voor LUPO kiest"), "5/11/2026", "Pijnpunten, onderscheid, scenario's, killcriteria K1–K6, hypotheses"],
            [a("https://app.notion.com/p/40f50f6b380981b3bee8fd5bcc7e1a54", "Concurrenten, features en ecosysteem"), "5/11/2026", "Wat sinds augustus veranderde, over te nemen patronen, Strava- en Garmin-voorwaarden"],
            [a("https://app.notion.com/p/40f50f6b38098162afa5de6a5eeef7a2", "Schemaregels getoetst aan onderzoek"), "5/11/2026", "Bewijssterkte per regel, bronnen, vragen voor de sportarts"],
            [a("https://app.notion.com/p/3c650f6b380981ae82decb20bc039def", "Businessplan Free/Premium/Pack"), "aug 2026", "Eerste model, unit economics, break-even"],
            [a("https://app.notion.com/p/3c650f6b3809815a81dcfee07f948e0e", "Doelgroepen en scouting"), "aug 2026", "Doelgroepen en hoe talent gevonden wordt"],
            [a("https://app.notion.com/p/33750f6b380981788c2cc444ec091ed1", "Project Brain"), "doorlopend", "Startpunt van alle LUPO-pagina's in Notion"],
          ]}
        />
      </Section>
      <Section title="In deze repo">
        <Table
          head={["Bestand", "Wat"]}
          rows={[
            ["docs/garmin-aanvraag.md", "Conceptantwoorden voor het Garmin Connect Developer Program, en wat eerst rond moet"],
            ["scripts/genereer-app-mockups.py", "Generator van de 61 app-schermen"],
            ["src/app/site/", "De website voor lupo.coach, in drie talen"],
          ]}
        />
      </Section>
    </VerhaalPagina>
  );
}
