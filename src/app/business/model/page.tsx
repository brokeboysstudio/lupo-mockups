import { Callout, Card, NextLink, PageHead, Section, Table, Tag } from "../ui";

const tiers = [
  {
    name: "Tryout",
    price: "€0, 8–12 weken",
    horizon: "één golf",
    who: "Iedereen die denkt dat hij een potential is",
    items: ["Nulmeting met vast protocol", "8–12 weken LUPO-schema", "Hertest: progressie telt, niet niveau", "Top 5% progressie bij weinig volume → Pack Talent"],
    note: "Twee golven per jaar. Wie niet doorgaat krijgt een Premium-aanbod. Geen permanente gratis app.",
  },
  {
    name: "Premium",
    price: "€19/mnd · €169/jr · €49/race",
    horizon: "6 tot 18 maanden",
    who: "Iedereen met een datum in het hoofd",
    items: ["Schema naar je doel, elke ochtend herrekend", "Beslissing met reden: voluit, afbouwen, rusten", "Haalbaarheid in 3 scenario's", "Coachtaal, later koppeling met het horloge"],
    note: "Start nu, met de proefperiode van zes weken.",
  },
  {
    name: "Pack",
    price: "€0, LUPO betaalt",
    horizon: "een carrière",
    who: "Top van de ladder, op uitnodiging",
    items: ["Fysieke Combine, labtests", "Materiaal en inschrijvingen", "Mentor, levenslang Premium"],
    note: "Marketingbudget met een gezicht erop. Niet vóór 2027 H2.",
  },
];

export default function Model() {
  return (
    <>
      <PageHead
        eyebrow="Business · model"
        title="Tryout, Premium, Pack"
        lede="Geen permanente gratis laag meer. Gratis is een tryout met een begin en een einde; wie talent toont gaat naar Pack, wie een race heeft naar Premium. Wijzigt het businessplan van augustus 2026 op voorstel van Jan (5 nov)."
      />

      <Section title="Drie lagen">
        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((t) => (
            <Card key={t.name}>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent">{t.horizon}</p>
              <h3 className="font-display text-[30px] leading-none">{t.name}</h3>
              <p className="font-mono text-[12px]">{t.price}</p>
              <p className="text-[13px] text-muted-2 font-light">{t.who}</p>
              <ul className="text-[13px] leading-relaxed list-disc pl-5">
                {t.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="mt-auto pt-3 border-t border-line text-[12px] text-muted-2">{t.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="De tryout" intro="Voorstel van Jan, 5 november: gratis voor iedereen die denkt dat hij een potential is, en testen beslissen wie in aanmerking komt.">
        <Table
          head={["Stap", "Wat", "Waarom"]}
          rows={[
            ["Inschrijven", "Open, per golf (bv. maart en september)", "Iedereen meet tegelijk; elke golf is een verhaal"],
            ["Nulmeting", "3 km tijdrit, 20 min FTP, 400 m zwem, of Hyrox-variant", "Vast protocol, identiek voor iedereen"],
            ["8–12 weken", "LUPO-schema gratis, zonder coachtaal", "Kost bijna niets; meet of iemand het plan volgt"],
            ["Hertest", "Zelfde protocol", "Talent = progressie bij weinig volume, niet absoluut niveau"],
            ["Bevestiging", "Top op een fysieke Combine", "Thuistests zijn te vervalsen"],
            ["Uitkomst", "Pack Talent, of een Premium-aanbod (studentenprijs mogelijk)", "Tryout is ook het beste conversiekanaal"],
          ]}
        />
        <p className="text-[12px] text-muted">
          Onder 18: ouderlijke toestemming, score alleen op testen, geen HRV of slaap. <Tag label="aanname" /> door jurist te bevestigen.
        </p>
      </Section>

      <Section title="Proefperiode: zes weken, verdiend in blokken van twee" intro="Wie het plan volgt, speelt telkens twee weken bij. Wie een poort mist, valt terug naar Gratis en houdt alles. Rust die LUPO oplegde telt als gehaald.">
        <Table
          head={["Blok", "Dagen", "Poort", "Per 1.000 starters"]}
          rows={[
            ["1", "1–14", "80% planvolging en horloge op ≥10 van 14 dagen", "550 halen de poort"],
            ["2", "15–28", "zelfde poort", "358"],
            ["3", "29–42", "hertest naast nulmeting, dan de vraag", "286 voltooien"],
            ["Betalend", "—", "35% van wie voltooit", "100 · 10%"],
          ]}
        />
        <p className="text-[12px] text-muted">
          <Tag label="aanname" /> Percentages per poort tot de eerste groep ze bevestigt. Health &amp; Fitness: trial naar betalend ±35%, maar de eerste verlenging lukt maar bij ±30% (Adapty 2026). <Tag label="feit" />
        </p>
      </Section>

      <Section title="Unit economics per betalende gebruiker" intro={<>Uit het businessplan van augustus. <Tag label="aanname" /></>}>
        <Table
          head={["Post", "Bedrag", "Toelichting"]}
          rows={[
            ["Gemengde opbrengst", "€17,03/mnd", "60% maandelijks, 40% jaarlijks"],
            ["Betaalverwerking", "−€0,51", "±3%"],
            ["AI-kost", "−€0,40", "coachtaal; gratis gebruikers kosten niets"],
            ["Infrastructuur", "−€0,30", "Supabase, Vercel"],
            ["Brutomarge", "€15,82 · 93%", ""],
            ["Levensduur", "14–18 maanden", "lagere churn na het eerste jaar"],
            ["LTV", "±€237", "bij 15 maanden"],
            ["Doel-CAC", "< €25", "instroom via clubs, Race Boards, Combine; geen gekochte installs"],
            ["Break-even", "±700 betalend", "eerste hire bij 500 betalend én €8.000 MRR"],
          ]}
        />
      </Section>

      <Section title="Tweede inkomstenstroom: LUPO Labs">
        <Callout title="Doorverwijzen, geen inkoop">
          Lactaattest, VO2 max, zwem-CSS en looptechniek bij partnerlabo&apos;s in Antwerpen, Gent en Leuven, tegen partnertarief.
          Marge ±€15–35 per test. In jaar 1 en 2 alleen doorverwijzen. Medische tests interpreteert altijd een arts, nooit LUPO.
        </Callout>
      </Section>

      <Section title="Open in het model">
        <ul className="text-[14px] text-muted-2 leading-relaxed list-disc pl-5 max-w-[75ch]">
          <li>In de code staan nog drie prijsmodellen naast elkaar (€19 enkel, Gratis/Premium/Pack, Community/Solo). Eén kiezen. <Tag label="aanbeveling" /></li>
          <li>Het model voor coaches (€5–10 per atleet per maand) is een hypothese, nog geen laag. <Tag label="aanname" /></li>
          <li>Prijs voor jongeren in Premium: gratis via het talentsignaal, of een studentenprijs. <Tag label="open" /></li>
        </ul>
      </Section>

      <NextLink href="/business/dfrnt">DFRNT: niveaus en normen</NextLink>
    </>
  );
}
