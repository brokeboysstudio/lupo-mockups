import { Callout, Card, NextLink, PageHead, Section, Table, Tag } from "../ui";

const pains = [
  ["Data zonder beslissing", "Horloge, ring en plan zeggen elk iets anders.", 92],
  ["Weinig tijd, elke sessie moet tellen", "Geen ruimte voor een verloren week in maand 5 van 9.", 88],
  ["Kracht en duur in twee apps", "Hard voor de hybride atleet, niet voor de rest.", 80],
  ["Een coach is te duur", "€80–300 per maand voor 1-op-1 online coaching.", 70],
  ["Zwarte doos", "Het plan verandert zonder uitleg; vertrouwen zakt.", 58],
  ["Schuldgevoel bij rust", "Streaks straffen een rustdag.", 50],
  ["Vastzitten aan een merk", "Weinigen voelen het, tot ze van horloge wisselen.", 34],
] as const;

const prices = [
  { name: "Garmin Coach", price: "€0", x: 2 },
  { name: "Connect+", price: "±€7", x: 35 },
  { name: "Runna", price: "±€10", x: 42 },
  { name: "LUPO", price: "€19 · €49/race", x: 53, lupo: true },
  { name: "TrainerRoad", price: "±€20", x: 58 },
  { name: "Coach", price: "€80", x: 77 },
  { name: "Topcoach", price: "€300", x: 98 },
];

export default function Positionering() {
  return (
    <>
      <PageHead
        eyebrow="Business · positionering"
        title="Elke ochtend één beslissing, met de reden erbij. Tot aan je startlijn."
        lede="De ochtendbeslissing zelf geven Garmin, WHOOP en Oura al. LUPO doet het anders: de reden staat er altijd bij, het werkt met elk horloge, en rust die LUPO oplegt telt als nagekomen."
      />

      <Section title="Twee groepen: wie betaalt en wie je zoekt" intro="Talent zoek je niet op je 35ste. De betaler en de potential zijn verschillende mensen, met een verschillend product.">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent">Betaler · Premium</p>
            <p className="font-display text-[48px] leading-none">28–50</p>
            <ul className="text-[14px] text-muted-2 leading-relaxed list-disc pl-5">
              <li>Eén A-race, 6–12 uur per week, job en gezin, meestal Garmin</li>
              <li>Zoekt zekerheid tot de startlijn</li>
              <li>€19 per maand, €169 per jaar of €49 per racedoel</li>
              <li>Financiert het systeem, ook de tryouts</li>
            </ul>
          </Card>
          <Card>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent">Potential · Tryout</p>
            <p className="font-display text-[48px] leading-none">15–25</p>
            <ul className="text-[14px] text-muted-2 leading-relaxed list-disc pl-5">
              <li>Veel progressie bij weinig volume: het talentsignaal</li>
              <li>Tryout: nulmeting, 8–12 weken, hertest; de plek om je te onderscheiden</li>
              <li>Via clubs met jeugdwerking en studentenwedstrijden</li>
              <li>Vanaf 16, ouderlijke toestemming tot 18, geen HRV of slaap in de score</li>
              <li>Tryouts zijn ook de sociale laag: samen meten in plaats van een feed</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="Welke pijn lost LUPO op" intro={<>Gerangschikt op verwachte hardheid voor de betaler. <Tag label="aanname" /> tot de gesprekken het bevestigen.</>}>
        <div className="flex flex-col gap-3">
          {pains.map(([t, d, w]) => (
            <div key={t} className="grid md:grid-cols-[1.2fr_1fr] gap-2 md:gap-6 items-center">
              <div>
                <p className="text-[15px]">{t}</p>
                <p className="text-[13px] text-muted-2 font-light">{d}</p>
              </div>
              <div className="h-2.5 rounded-full bg-[rgba(216,255,0,0.08)]">
                <div className="h-full rounded-full bg-accent" style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Wat is uniek, en wat is te kopiëren" intro="In jaar 1 heeft LUPO geen technische moat. Wel een reden om te kiezen.">
        <Table
          head={["Claim", "Uniek", "Kopieerbaar", "Gebruik"]}
          rows={[
            ["Reden bij elke beslissing", "ja", "in maanden", <Tag key="1" label="aanbeveling">kern van de belofte</Tag>],
            ["Onafhankelijk van merk", "ja, sinds Garmin–TrainingPeaks en Strava–Runna", "niet voor wie hardware of een feed verkoopt", <Tag key="2" label="aanbeveling">merk</Tag>],
            ["Rust telt als nagekomen", "ja", "ja", <Tag key="3" label="aanbeveling">karakter</Tag>],
            ["Eerlijke toon (\"je doel is niet haalbaar\")", "ja", "moeilijk: vraagt durf", <Tag key="4" label="aanbeveling">merk</Tag>],
            ["Score, Ladder, talentsignaal", "ja", "moeilijk zonder gebruikers", <Tag key="5" label="open">na 250–500 betalend</Tag>],
            ["Nederlandstalig, Belgische races", "deels", "ja", <Tag key="6" label="open">startvoordeel</Tag>],
            ["Norwegian Method", "nee", "ja", <Tag key="7" label="open">niet als hoofdboodschap</Tag>],
            ["Ochtendbeslissing op HRV", "nee: Garmin, WHOOP, Oura, Athletica", "—", <Tag key="8" label="open">basisvoorwaarde</Tag>],
          ]}
        />
        <Callout title="Wat het onderzoek zegt">
          Meta-analyses (2021) vinden geen significant prestatievoordeel van HRV-gestuurd trainen tegenover een goed vast plan,
          wel minder mensen die niet vooruitgaan. <Tag label="feit" /> Verkoop zekerheid en minder verloren weken, geen snelheid.
        </Callout>
      </Section>

      <Section title="Tussen app en coach" intro="Euro per maand, logaritmische schaal.">
        <div className="overflow-x-auto">
          <div className="relative min-w-[620px] h-[150px]">
            <div className="absolute left-0 right-0 top-[70px] h-px bg-line-strong" />
            {prices.map((p, i) => {
              const up = i % 2 === 0;
              return (
                <div
                  key={p.name}
                  className={`absolute -translate-x-1/2 w-[110px] flex items-center text-center text-[12px] gap-1 ${up ? "top-0 h-[76px] flex-col" : "top-[64px] h-[80px] flex-col-reverse"}`}
                  style={{ left: `${p.x}%` }}
                >
                  <b className={p.lupo ? "text-accent" : ""}>{p.name}</b>
                  <span className="font-mono text-[10px] text-muted">{p.price}</span>
                  <span className={`rounded-full ${up ? "mt-auto" : "mb-auto"} ${p.lupo ? "w-4 h-4 bg-accent" : "w-3 h-3 bg-muted-2"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section title="Waarom LUPO en niet...">
        <Table
          head={["Alternatief", "Waarom iemand toch LUPO kiest"]}
          rows={[
            ["Garmin Training Readiness / Connect+", "Garmin geeft een getal, LUPO een beslissing met gevolg voor het plan en de reden. LUPO zegt ook: niets kopen, rusten."],
            ["Runna / Strava", "Runna is lopen. LUPO is multisport en stuurt op herstel. Geen feed."],
            ["TrainerRoad", "Fietsgericht, Engelstalig, duurder. LUPO kent de Belgische races."],
            ["Menselijke coach", "€19–49 in plaats van €80–300, en elke dag in plaats van één keer per week."],
            ["Zelf plannen (Excel, intervals.icu)", "Minder denkwerk, zelfde transparantie."],
          ]}
        />
      </Section>

      <Section title="Copyregels voor landing en app">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent">Wel</p>
            <ul className="text-[14px] text-muted-2 leading-relaxed list-disc pl-5">
              <li>De beslissing en de reden in één zin</li>
              <li>Op elk horloge</li>
              <li>Tot aan je startlijn</li>
              <li>Rust telt</li>
            </ul>
          </Card>
          <Card>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#f0b54a]">Niet</p>
            <ul className="text-[14px] text-muted-2 leading-relaxed list-disc pl-5">
              <li>&quot;AI-coach&quot; als claim</li>
              <li>Norwegian Method als hoofdboodschap, zolang Noors of 80/20 niet gekozen is</li>
              <li>&quot;Sneller&quot;, herstel of blessurepreventie als belofte (medische claim)</li>
              <li>De naam Brokeboys</li>
            </ul>
          </Card>
        </div>
      </Section>

      <NextLink href="/business/model">Model en prijzen</NextLink>
    </>
  );
}
