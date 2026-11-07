import type { Metadata } from "next";
import { VerhaalPagina } from "../_verhaal/kop";
import { Callout, PageHead, Section, Table, Tag } from "../business/ui";

export const metadata: Metadata = { title: "Financieel · LUPO" };

export default function Financieel() {
  return (
    <VerhaalPagina actief="/financieel">
      <PageHead
        eyebrow="Het verhaal · financieel"
        title="Wat LUPO kost en opbrengt"
        lede="Vier scenario's van januari 2027 tot december 2029. Alle cijfers volgen uit de aannames in het Excel-plan; wijzig daar een cel en alles rekent mee. Scenario's zijn geen prognoses tot de pilot ze bevestigt."
      />
      <div>
        <a href="/financieel/LUPO-financieel-plan.xlsx" className="inline-block bg-accent text-black font-mono text-[11px] tracking-[0.12em] uppercase px-5 py-3 rounded-full hover:opacity-90">
          Download het financieel plan (Excel)
        </a>
      </div>

      <Section title="Vier scenario's" intro={<>Berekend op 7 november 2026. Zonder loon voor Jan en zonder vennootschapsbelasting. <Tag label="aanname" /></>}>
        <Table
          head={["", "Voorzichtig", "Basis", "Groei", "Ambitie"]}
          rows={[
            ["Betalende klanten eind 2027", "180", "392", "607", "913"],
            ["Betalende klanten eind 2028", "254", "605", "1.402", "2.879"],
            ["Betalende klanten eind 2029", "298", "751", "2.113", "5.023"],
            ["Omzet 2029 (excl. btw)", "€55.089", "€148.141", "€366.319", "€866.704"],
            ["MRR december 2029", "€4.318", "€12.486", "€32.672", "€80.029"],
            ["Resultaat 2029", "€32.225", "€61.468", "€183.395", "€472.943"],
            ["Nodig vooraf", "€5.724", "€5.592", "€6.071", "€7.982"],
          ]}
        />
      </Section>

      <Section title="Wat het verschil maakt">
        <Table
          head={["Hefboom", "Basis", "Ambitie", "Waarom"]}
          rows={[
            ["Nieuwe klanten per maand", "45–50", "±400 vanaf 2029", "Het plafond is instroom gedeeld door opzeggingen: 45 / 6% ≈ 750 klanten"],
            ["Opzeggingen per maand", "6%", "4%", "Een reden om na je race te blijven: off-season, volgend doel"],
            ["Markten", "België", "+ Nederland (2028), + Frankrijk en Wallonië", "Vraagt de app in het Engels en Frans"],
            ["Coaches", "0,5 per maand", "3 per maand", "15 atleten per coach aan €7,50 per atleet"],
            ["Clubs en sponsoring", "klein", "1,5 club per maand, €7.500 per tryout-golf", "Niets toegezegd"],
            ["Marketing per nieuwe klant", "€25", "€45", "Nieuwe markten kosten meer"],
          ]}
        />
      </Section>

      <Section title="Per klant per maand" intro="Unit economics na btw. Bron: Notion, Kost per klant (7/11/2026).">
        <Table
          head={["", "Maandklant", "Jaarklant (per maand)", "Raceblok", "Chatbundel"]}
          rows={[
            ["Prijs inclusief btw", "€19,00", "€14,08", "€49,00", "€3,00"],
            ["Netto-omzet na 21% btw", "€15,70", "€11,64", "€40,50", "€2,48"],
            ["Betaalkost (Mollie)", "€0,25", "€0,02", "€0,99", "op de factuur"],
            ["AI", "€0,15", "€0,15", "€0,45", "€0,60"],
            ["Infrastructuur", "€0,11", "€0,11", "€0,34", "—"],
            ["Brutomarge", "€15,19 · 97%", "€11,36 · 98%", "€38,72 · 96%", "€1,88 · 76%"],
          ]}
        />
      </Section>

      <Section title="Beslissingen over kosten">
        <div className="grid md:grid-cols-2 gap-4">
          <Callout title="Chatlimiet met bijkoop">
            Premium krijgt een limiet op de vrije chat, voorstel 200 berichten per maand. Wie meer wil, koopt 200 berichten
            bij voor €3, op de volgende factuur. De ochtendbeslissing en het schema vallen nooit onder de limiet.
          </Callout>
          <Callout title="AI blijft klein">
            Haiku is het standaardmodel, Sonnet alleen voor vragen over het schema. Vaste context wordt gecachet,
            weekoverzichten lopen via batch. De ochtendzin komt uit sjablonen die de sportarts vooraf kan nalezen.
          </Callout>
          <Callout title="Mollie en geen app stores">
            SEPA-incasso via Mollie kost €0,25 per betaling, goedkoper dan GoCardless, Stripe of Paddle. Betalen via Apple of
            Google kost 15 tot 30% van de omzet; daarom een webapp met betaling buiten de app.
          </Callout>
          <Callout title="Btw en OSS">
            Boven €10.000 verkoop aan particulieren in andere EU-landen geldt hun btw-tarief, aan te geven via OSS. Te regelen
            met de boekhouder.
          </Callout>
        </div>
      </Section>

      <Section title="Wat er niet in zit">
        <ul className="text-[14px] text-muted-2 leading-relaxed list-disc pl-5 max-w-[75ch]">
          <li>Een loon voor Jan. Zonder dat is het basisscenario snel positief; de echte break-even ligt verder.</li>
          <li>Vennootschapsbelasting en sociale bijdragen.</li>
          <li>Het kasvoordeel van jaarabonnementen, die vooraf betalen.</li>
          <li>Kosten voor Garmin-toegang, nog onbekend.</li>
        </ul>
      </Section>
    </VerhaalPagina>
  );
}
