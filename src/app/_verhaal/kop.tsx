import Link from "next/link";

export const VERHAAL_NAV = [
  { href: "/", label: "Start" },
  { href: "/verloop", label: "Verloop" },
  { href: "/business", label: "Business en gameplan" },
  { href: "/financieel", label: "Financieel" },
  { href: "/mockups", label: "Mockups" },
  { href: "/site", label: "Website" },
  { href: "/documenten", label: "Documenten" },
];

export const BIJGEWERKT = "7 november 2026";

export function VerhaalKop({ actief }: { actief: string }) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-8 py-4 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link href="/" className="font-display text-[22px] tracking-tight">
          LUPO <span className="text-accent">Verhaal</span>
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {VERHAAL_NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`font-mono text-[10px] tracking-[0.14em] uppercase hover:text-accent ${actief === n.href ? "text-accent" : "text-muted-2"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function VerhaalVoet() {
  return (
    <footer className="mx-auto w-full max-w-[1100px] px-4 md:px-8 pb-10">
      <div className="border-t border-line pt-4 font-mono text-[10px] tracking-[0.1em] uppercase text-muted flex flex-wrap gap-x-4 gap-y-1">
        <span>Vertrouwelijk · alleen voor Jan en wie hij uitnodigt</span>
        <span>Mockups gebruiken voorbeelddata</span>
        <span>Scenario&apos;s zijn geen prognoses</span>
        <span>Bijgewerkt {BIJGEWERKT}</span>
      </div>
    </footer>
  );
}

export function VerhaalPagina({ actief, children }: { actief: string; children: React.ReactNode }) {
  return (
    <>
      <VerhaalKop actief={actief} />
      <main className="mx-auto w-full max-w-[1100px] px-4 md:px-8 py-10 md:py-14 flex flex-col gap-14 flex-1">{children}</main>
      <VerhaalVoet />
    </>
  );
}
