import { Callout, Card, NextLink, PageHead, Section, Table, Tag } from "../ui";

const levels = [
  {
    n: "0",
    name: "Voorbereiding in de app",
    who: "Open voor iedereen",
    what: "8–12 weken LUPO-schema met een begin- en eindtest in de app. Toont algemene conditie, volhouden en vooruitgang per trainingsuur.",
    out: "Haal je de norm of het progressieticket: uitnodiging voor niveau 1.",
  },
  {
    n: "1",
    name: "Tryout-dag",
    who: "Op uitnodiging",
    what: "Iedereen met dezelfde LUPO-hartslagband en hetzelfde testhorloge. Tijdrit op de piste, 20 min FTP op een gekalibreerde fietstrainer, 400 m zwemmen, lengte, gewicht, beenlengte.",
    out: "Wie in de app vals speelde, valt hier door de mand. De besten gaan naar niveau 2.",
  },
  {
    n: "2",
    name: "Labo",
    who: "Top van de tryout",
    what: "Lactaatprofiel (drempels), VO2max, loopeconomie, sportmedisch onderzoek met ECG. Uitgevoerd en geïnterpreteerd door een arts of partnerlabo, nooit door LUPO.",
    out: "Medische goedkeuring is ook de veiligheidsvoorwaarde voor maximale tests.",
  },
  {
    n: "3",
    name: "LUPO Athlete",
    who: "Eindfase",
    what: "Pack-programma: begeleiding, materiaal, inschrijvingen, mentor.",
    out: "Contract volgens het Pack-raamwerk.",
  },
];

export default function Dfrnt() {
  return (
    <>
      <PageHead
        eyebrow="Business · DFRNT (werknaam)"
        title="Tryouts in niveaus"
        lede="Voorstel van Jan, 5 november. In de app mag iedereen meedoen, de fysieke tryouts zijn op uitnodiging. Wie in de app vals speelt, valt op de tryout door de mand. Merknaam blijft LUPO; DFRNT is de naam van de tryouts tot de merkcheck."
      />

      <Section title="Twee sporen">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent">DFRNT Talent</p>
            <p className="font-display text-[34px] leading-none">U18 · U20 · U23</p>
            <p className="text-[13px] text-muted-2 font-light">De scoutingtrechter naar LUPO Athlete. Onder 18: ouderlijke toestemming, score alleen op testen, geen HRV of slaap.</p>
          </Card>
          <Card>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent">DFRNT Open</p>
            <p className="font-display text-[34px] leading-none">23+</p>
            <p className="text-[13px] text-muted-2 font-light">Brede groepen met leeftijdscorrectie. Community en meten voor de betalers, zonder scouting.</p>
          </Card>
        </div>
      </Section>

      <Section title="Vier niveaus">
        <div className="grid md:grid-cols-2 gap-4">
          {levels.map((l) => (
            <Card key={l.n}>
              <div className="flex items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[34px] leading-none text-accent">{l.n}</span>
                  <h3 className="font-display text-[22px] leading-none">{l.name}</h3>
                </div>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-2">{l.who}</span>
              </div>
              <p className="text-[13px] text-muted-2 leading-relaxed font-light">{l.what}</p>
              <p className="mt-auto pt-3 border-t border-line text-[12px]">{l.out}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Twee deuren naar de tryout" intro="Met alleen een norm vind je wie al snel is. Het progressieticket vindt de laatbloeier.">
        <Table
          head={["Deur", "Hoe", "Waarom"]}
          rows={[
            ["Kwalificatienorm", "Eén test op of boven de tryout-norm voor jouw groep, of twee tests binnen 3% ervan", "Publiek doel per leeftijd en geslacht, zoals een Boston-kwalificatietijd. Geeft perspectief."],
            ["Progressieticket", "Top 5% vooruitgang per trainingsuur in een app-blok van minstens 8 weken, bij minstens 80% planvolging", "Talent toont zich in hoe snel iemand beter wordt, niet in het niveau van vandaag."],
          ]}
        />
      </Section>

      <Section
        title="Normtabel, eerste voorstel"
        intro={<>Tryout-norm (trap 2). Trap 1 ligt ongeveer 15% trager, trap 3 ongeveer 7% sneller. <Tag label="aanname">niet gekalibreerd</Tag> Alleen om het systeem te tonen; kalibreren op federatietabellen en daarna op eigen data, zodat 10–15% van de app-deelnemers de norm haalt.</>}
      >
        <Table
          head={["Groep", "3 km lopen", "20 min FTP", "400 m zwemmen"]}
          rows={[
            ["U18 mannen", "10:30", "3,6 W/kg", "6:00"],
            ["U18 vrouwen", "12:00", "3,1 W/kg", "6:20"],
            ["U20 mannen", "10:00", "3,8 W/kg", "5:45"],
            ["U20 vrouwen", "11:30", "3,3 W/kg", "6:10"],
            ["U23 mannen", "9:50", "4,0 W/kg", "5:40"],
            ["U23 vrouwen", "11:15", "3,4 W/kg", "6:05"],
            ["Open 23+", "leeftijdsgecorrigeerd", "leeftijdsgecorrigeerd", "leeftijdsgecorrigeerd"],
          ]}
        />
        <p className="text-[12px] text-muted">Hybride spoor: aparte test met een Hyrox-achtige combinatie; sprints alleen daar. Protocol nog vast te leggen.</p>
      </Section>

      <Section title="Trappen: DFRNT 1 · 2 · 3" intro="Iedereen ziet hoe ver hij van de volgende trap zit, ook wie de tryout nooit haalt. Dat is de motor voor de community en voor de betalers.">
        <Table
          head={["Trap", "Wat het betekent", "Wat je krijgt"]}
          rows={[
            ["DFRNT 1", "Je staat er: ±top 40% van je groep", "Badge, je plek in de golf"],
            ["DFRNT 2", "Tryout-norm: ±top 10–15%", "Uitnodiging voor de tryout-dag"],
            ["DFRNT 3", "±top 5%", "Rechtstreeks naar de besten van de tryout-dag"],
          ]}
        />
      </Section>

      <Section title="Spelregels">
        <ul className="text-[14px] text-muted-2 leading-relaxed list-disc pl-5 max-w-[75ch]">
          <li>Normen staan vast voor een heel seizoen en worden bij de start gepubliceerd. Bijstellen kan pas het seizoen erna.</li>
          <li>Golven op vaste momenten (bijvoorbeeld maart en september), zodat iedereen tegelijk meet.</li>
          <li>Gelijke data: op de tryout meet LUPO met eigen toestellen, niet met het horloge van de atleet.</li>
          <li>Een groot verschil tussen app-test en tryout wordt gemarkeerd, niet bestraft. Wie herhaaldelijk afwijkt, verliest het recht op een uitnodiging.</li>
        </ul>
      </Section>

      <Section title="Welke inzichten we verzamelen">
        <Table
          head={["Inzicht", "Waar gemeten", "Waarom"]}
          rows={[
            ["Vooruitgang per trainingsuur", "niveau 0", "Het talentsignaal: veel progressie bij weinig volume"],
            ["Snelheid of vermogen op de drempel, per kg", "niveau 1–2", "Zegt meer dan een eindtijd"],
            ["Trainingsverleden (jaren, volume)", "intake", "Na 1 jaar al goed weegt zwaarder dan na 8 jaar"],
            ["Biologische rijpheid en geboortemaand", "intake, niveau 1", "Laat rijpe jongeren scoren nu lager maar groeien door: de verborgen talenten"],
            ["Lactaatdrempels, VO2max, loopeconomie", "niveau 2", "Fysiologisch plafond en efficiëntie"],
            ["Sportmedisch onderzoek met ECG", "niveau 2", "Veiligheid, door een arts"],
          ]}
        />
      </Section>

      <Callout title="Kost en timing">
        Een fysieke dag vraagt een locatie, toestellen, verzekering en medische aanwezigheid. Start met één pilotdag voor 20–30 mensen samen met
        een club, ten vroegste in 2027. Erasmus+ Sport (met de club als aanvrager) past precies op dit deel.
      </Callout>

      <NextLink href="/business/gameplan">Gameplan</NextLink>
    </>
  );
}
