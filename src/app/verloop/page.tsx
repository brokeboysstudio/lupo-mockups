import type { Metadata } from "next";
import { VerhaalPagina } from "../_verhaal/kop";
import { PageHead, Tag } from "../business/ui";

export const metadata: Metadata = { title: "Verloop · LUPO" };

const stappen: [string, string, string, string?][] = [
  ["4 mei 2026", "Bootstrap", "Geen co-founder, eerst twaalf maanden bewijzen. Subsidies vullen aan, ze vervangen de test op betaalbereidheid niet."],
  ["aug 2026", "Eerste businessplan", "Gratis, Premium en Pack. €19 per maand, €169 per jaar, €49 per racedoel. Break-even rond 700 betalende klanten."],
  ["8 okt 2026", "App live met testdata", "De app draait op lupo.coach. Ochtendbeslissing op vaste testwaarden, nog geen koppeling met een horloge. Import van de TrainingPeaks-export gebouwd. Jan herstart de training richting IRONMAN Thun."],
  ["11 okt – 5 nov", "Stilstand", "Vier weken bewoog er niets. De doorlichting van 5 november maakte dat zichtbaar en zette killcriteria om het te voorkomen."],
  ["5 nov 2026", "Doorlichting en koers", "Versnellingsplan met killcriteria. Schemaregels getoetst aan onderzoek, concurrentie doorgelicht, positionering: waarom iemand voor LUPO kiest. Tryouts (DFRNT) vervangen de permanente gratis laag. Beslissing: eerst alles in het verhaal, niet verder bouwen in de app."],
  ["5–6 nov", "Doorklikbare app", "61 schermen: ochtend met de reden, Niet 100%, plan en kalender, logboek met analyse, vergelijken zonder feed, workout uitvoeren, racedag, webversie. TrainingPeaks doorgelicht als referentie."],
  ["6 nov", "Website", "Tien pagina's voor lupo.coach in het Engels, Nederlands en Frans. Slogan: Geen excuses. Alleen vooruitgang. Echte foto's met fades. Garmin-formulier voorbereid."],
  ["7 nov", "Kosten en financieel plan", "Kost per klant ongeveer €0,50 tot €1 per maand. Chatlimiet met bijkoop, Mollie als betaalprovider, geen app stores. Financieel plan met vier scenario's tot 2029, van Voorzichtig tot Ambitie."],
  ["7 nov", "Het verhaal", "Alles op één plek achter een login: verloop, business, financieel, mockups, website en documenten. Telefoonbeelden op de website in drie talen. Eén slogan: Geen excuses. Alleen vooruitgang."],
  ["nov 2026", "Website live en Garmin", "Echte bedrijfsgegevens en mailadressen, website naar lupo.coach, aanvraag Garmin Connect Developer Program.", "open"],
  ["daarna", "Testen en gesprekken", "Jan, Bob en Axel testen zonder formulieren. Daarna de gesprekken met de rondleiding uit de mockups.", "open"],
  ["na de gesprekken", "Go/no-go", "Op de killcriteria K1–K6: gesprekken, eerste betalende atleten, data-toegang, sportarts en jurist.", "open"],
  ["na go", "Kern bouwen", "Supabase in de EU, login, eerste koppeling met een horloge, betalingen via Mollie, chatlimiet. Doel: 50 betalende klanten.", "open"],
  ["4 jul 2027", "IRONMAN Thun", "Atleet nul aan de start, doel sub 9u30. De voorbereiding is het publieke verhaal: Locked In.", "open"],
];

export default function Verloop() {
  return (
    <VerhaalPagina actief="/verloop">
      <PageHead eyebrow="Het verhaal · verloop" title="Hoe het liep" lede="De belangrijkste stappen en beslissingen, van het eerste plan tot vandaag (7 november 2026), en wat er nu volgt." />
      <ol className="flex flex-col">
        {stappen.map(([wanneer, titel, tekst, status]) => (
          <li key={titel} className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-6 border-l-2 border-line md:border-l-0 pl-4 md:pl-0 py-4 md:border-t md:border-line">
            <span className={`font-mono text-[11px] tracking-[0.12em] uppercase ${status ? "text-muted" : "text-accent"}`}>{wanneer}</span>
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-[24px] leading-tight flex items-center gap-3">
                {titel} {status && <Tag label="open">gepland</Tag>}
              </h3>
              <p className="text-[14px] text-muted-2 leading-relaxed font-light max-w-[75ch]">{tekst}</p>
            </div>
          </li>
        ))}
      </ol>
    </VerhaalPagina>
  );
}
