"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BASIS, TALEN, type Taal, pad } from "./bedrijf";

/** Wisselt van taal en blijft op dezelfde pagina. */
export function TaalKeuze({ taal }: { taal: Taal }) {
  const pathname = usePathname() || BASIS;
  let rest = pathname.startsWith(BASIS) ? pathname.slice(BASIS.length) : pathname;
  if (rest.startsWith("/nl") || rest.startsWith("/fr")) rest = rest.slice(3);
  return (
    <div className="talen">
      {TALEN.map(t => (
        <Link key={t} href={pad(t, rest)} className={t === taal ? "actief" : undefined} hrefLang={t}>
          {t.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
