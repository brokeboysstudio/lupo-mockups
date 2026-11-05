import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "LUPO Business",
  description: "Positionering, model, gameplan, funding en oprichting van LUPO",
};

const nav = [
  { href: "/business", label: "Overzicht" },
  { href: "/business/positionering", label: "Positionering" },
  { href: "/business/model", label: "Model en prijzen" },
  { href: "/business/gameplan", label: "Gameplan" },
  { href: "/business/funding", label: "Funding en subsidies" },
  { href: "/business/oprichting", label: "Oprichting" },
];

export default function BusinessLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-4 md:px-8 py-10 md:py-14 flex flex-col gap-10">
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-line pb-4">
        <Link href="/" className="font-display text-[22px] tracking-tight">
          LUPO <span className="text-accent">Business</span>
        </Link>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-2 hover:text-accent"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
      <main className="flex flex-col gap-14">{children}</main>
      <footer className="border-t border-line pt-4 font-mono text-[10px] tracking-[0.1em] uppercase text-muted flex flex-wrap gap-x-4 gap-y-1">
        <span>Stand 5 november 2026</span>
        <span>Bronanalyse in Notion · Project Brain</span>
        <span>Scenario&apos;s zijn geen prognoses</span>
      </footer>
    </div>
  );
}
