const categories = [
  {
    num: 1,
    title: "Onboarding",
    desc: "Kennismaking, niveau, voorproefje, FAQ en beslismoment. Geen account nodig.",
    status: "in opbouw",
    screens: "5 schermen",
    href: "/mockups/onboarding-fase-1/index.html",
    active: true,
  },
  {
    num: 2,
    title: "De app",
    desc: "Validatiedemo: korte onboarding, ochtend met en zonder waarom, Niet 100%, DFRNT tryout, raceblok €49. Verder Vandaag met de reden bij elke beslissing, Niet 100%, één vraag na de training, plan, maandkalender, logboek met afgewerkte trainingen en inzichten, Ladder, vergelijken (waar sta je, naast een vriend, het pad van wie je doel haalde, openbaar profiel), Samen, coach en privacy.",
    status: "doorklikbaar",
    screens: "46 schermen",
    href: "/mockups/app/index.html",
    active: true,
  },
  {
    num: 3,
    title: "Webversie",
    desc: "Mobiel beslist, web verklaart en plant. Zijbalk, panelen naast elkaar, weekkalender met verslepen, commandopalet met ⌘K.",
    status: "doorklikbaar",
    screens: "6 schermen",
    href: "/mockups/app/w1.html",
    active: true,
  },
  {
    num: 4,
    title: "Website",
    desc: "Volledige website voor lupo.coach en de Garmin-aanvraag: home, hoe het werkt, je data, DFRNT, prijzen met wachtlijst, over, contact, privacy, voorwaarden en cookies.",
    status: "klaar voor review",
    screens: "10 pagina's",
    href: "/site",
    active: true,
  },
  {
    num: 5,
    title: "Business",
    desc: "Gameplan, funding, subsidies en positionering.",
    status: "in opbouw",
    screens: "4 pagina's",
    href: "/business",
    active: true,
  },
  {
    num: 6,
    title: "Workout uitvoering",
    desc: "Voor de start, tijdens de sessie (doel groot, band eromheen, wat hierna komt), bijsturen bij hartslagdrift volgens een vaste regel, en klaar.",
    status: "doorklikbaar",
    screens: "4 schermen",
    href: "/mockups/app/x1.html",
    active: true,
  },
  {
    num: 7,
    title: "Race day",
    desc: "Taper met belasting en vorm, raceplan uit eigen data met voeding, de ochtend van de race, uitslag claimen, herstel en volgende race.",
    status: "doorklikbaar",
    screens: "5 schermen",
    href: "/mockups/app/y1.html",
    active: true,
  },
];

export default function Home() {
  const today = new Date().toLocaleDateString("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="mx-auto max-w-[1200px] px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent mb-4">
          V1 — {today}
        </p>
        <h1 className="font-display text-[72px] leading-[0.92] tracking-tight mb-4">
          LUPO <span className="text-accent">Mockups</span>
        </h1>
        <p className="text-muted-2 text-base leading-relaxed max-w-[600px] font-light">
          Elke ochtend één beslissing, met de reden erbij. Tot aan je startlijn.
          Klikbare flows van de app, de webversie en het businessplan.
        </p>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {categories.map((cat) => {
          const inner = (
            <>
              {/* Top row: number + status */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent">
                  {String(cat.num).padStart(2, "0")}
                </span>
                <span
                  className={`
                    font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-full
                    ${cat.active
                      ? "bg-[rgba(216,255,0,0.1)] text-accent"
                      : "bg-[rgba(255,255,255,0.05)] text-muted"
                    }
                  `}
                >
                  {cat.status}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-[22px] leading-tight">
                {cat.title}
              </h2>

              {/* Description */}
              <p className="text-[12px] text-muted-2 leading-relaxed font-light">
                {cat.desc}
              </p>

              {/* Screen count */}
              <div className="mt-auto pt-3 border-t border-line">
                <span className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">
                  {cat.screens}
                </span>
              </div>
            </>
          );

          const className = `
            bg-card border border-line rounded-xl p-5
            flex flex-col gap-2 transition-colors duration-150
            ${cat.active
              ? "hover:border-accent cursor-pointer no-underline text-text"
              : "opacity-35 cursor-default"
            }
          `;

          return cat.active ? (
            <a key={cat.num} href={cat.href!} className={className}>
              {inner}
            </a>
          ) : (
            <div key={cat.num} className={className}>
              {inner}
            </div>
          );
        })}
      </div>
    </main>
  );
}
