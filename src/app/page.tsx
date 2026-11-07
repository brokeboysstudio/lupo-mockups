import Link from "next/link";
import { VerhaalPagina, BIJGEWERKT } from "./_verhaal/kop";
import { Callout, PageHead } from "./business/ui";

const stats = [
  ["Garmin", "volgende stap: website live, aanvraag in"],
  ["4 jul 2027", "IRONMAN Thun, atleet nul"],
  ["61", "doorklikbare schermen"],
  ["3 talen", "website voor lupo.coach"],
];

const delen = [
  { href: "/verloop", titel: "Verloop", tekst: "Van de eerste app in oktober tot het financieel plan van vandaag, stap voor stap." },
  { href: "/business", titel: "Business en gameplan", tekst: "Positionering, model en prijzen, DFRNT-tryouts, gameplan met killcriteria, funding en oprichting." },
  { href: "/financieel", titel: "Financieel", tekst: "Kost per klant, vier scenario's tot 2029 en het volledige plan in Excel." },
  { href: "/mockups", titel: "Mockups", tekst: "De app, de webversie, een workout uitvoeren en de racedag: 61 doorklikbare schermen." },
  { href: "/site", titel: "Website", tekst: "Tien pagina's in het Engels, Nederlands en Frans, nodig voor de Garmin-aanvraag." },
  { href: "/documenten", titel: "Documenten", tekst: "Analyses en dossiers in Notion, het Garmin-formulier en het Excel-plan." },
];

export default function Start() {
  return (
    <VerhaalPagina actief="/">
      <PageHead
        eyebrow="LUPO · het verhaal"
        title="De laatste onafhankelijke coach"
        lede="Alles wat voor LUPO is voorbereid, op één plek: hoe het liep, het gameplan, de cijfers, de klikbare renders en de website. De echte app staat apart op lupo.coach; dit is het verhaal dat vooruitloopt."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(([b, s]) => (
          <div key={s} className="bg-card border border-line rounded-xl p-5">
            <p className="font-display text-[34px] leading-none text-accent">{b}</p>
            <p className="text-[12px] text-muted-2 mt-2">{s}</p>
          </div>
        ))}
      </div>
      <Callout title={`Waar we nu staan (${BIJGEWERKT})`}>
        De app draait op lupo.coach met testdata. Sinds 5 november bouwen we niet verder aan de app, maar bereiden we alles voor: het verhaal staat hier volledig,
        met 61 schermen, een drietalige website en een gameplan met financieel plan. Volgende stap: de website live op
        lupo.coach en de aanvraag bij Garmin. Daarna testen Jan, Bob en Axel, en pas dan volgen gesprekken en een go/no-go.
        AI blijft een kleine kost: ongeveer €0,50 tot €1 per klant per maand.
      </Callout>
      <section className="flex flex-col gap-4">
        <h2 className="font-display text-[26px] md:text-[32px] leading-tight">Bekijk</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {delen.map((d) => (
            <Link key={d.href} href={d.href} className="bg-card border border-line rounded-xl p-5 flex flex-col gap-2 hover:border-accent transition-colors">
              <h3 className="font-display text-[24px] leading-none">{d.titel}</h3>
              <p className="text-[13px] text-muted-2 leading-relaxed font-light">{d.tekst}</p>
            </Link>
          ))}
        </div>
      </section>
    </VerhaalPagina>
  );
}
