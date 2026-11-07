import Link from "next/link";
import type { ReactNode } from "react";

export type Label = "feit" | "aanname" | "aanbeveling" | "open";

const labelStyle: Record<Label, string> = {
  feit: "text-[#7cc4ff] border-[#7cc4ff]/40",
  aanname: "text-[#f0b54a] border-[#f0b54a]/40",
  aanbeveling: "text-accent border-accent/40",
  open: "text-muted-2 border-line-strong",
};

export function Tag({ label, children }: { label: Label; children?: ReactNode }) {
  return (
    <span
      className={`inline-block font-mono text-[9px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-full border whitespace-nowrap ${labelStyle[label]}`}
    >
      {children ?? label}
    </span>
  );
}

export function PageHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="flex flex-col gap-4">
      <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent">{eyebrow}</p>
      <h1 className="font-display text-[44px] md:text-[64px] leading-[0.95] tracking-tight text-balance">
        {title}
      </h1>
      {lede && <p className="text-muted-2 text-base leading-relaxed max-w-[65ch] font-light">{lede}</p>}
    </header>
  );
}

export function Section({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-display text-[26px] md:text-[32px] leading-tight text-balance">{title}</h2>
      {intro && <div className="text-muted-2 text-[14px] leading-relaxed max-w-[70ch] font-light">{intro}</div>}
      {children}
    </section>
  );
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto bg-card border border-line rounded-xl">
      <table className="w-full min-w-[640px] text-[13px] border-collapse">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="text-left font-mono font-normal text-[10px] tracking-[0.12em] uppercase text-muted px-4 py-3 border-b border-line"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-line last:border-0 align-top">
              {r.map((c, j) => (
                <td key={j} className={`px-4 py-3 leading-relaxed ${j === 0 ? "text-text" : "text-muted-2"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-card border border-line rounded-xl p-5 flex flex-col gap-2 min-w-0 ${className}`}>
      {children}
    </div>
  );
}

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border border-line border-l-4 border-l-accent bg-card rounded-xl p-5 flex flex-col gap-2">
      <p className="font-display text-[20px] leading-tight">{title}</p>
      <div className="text-[14px] text-muted-2 leading-relaxed font-light">{children}</div>
    </div>
  );
}

export function NextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-mono text-[11px] tracking-[0.12em] uppercase text-accent hover:underline">
      {children} →
    </Link>
  );
}
