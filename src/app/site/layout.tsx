import type { Metadata } from "next";
import localFont from "next/font/local";
import "./site.css";

const bebas = localFont({ src: "../../fonts/bebas-neue.woff2", weight: "400", variable: "--f-kop" });
const dm = localFont({ src: "../../fonts/dm-sans.woff2", weight: "300 700", variable: "--f-tekst" });

export const metadata: Metadata = {
  title: { default: "LUPO — No excuses. Only progress.", template: "%s | LUPO" },
  description:
    "Every morning LUPO reads your recovery and your plan, and tells you what to do today: go, ease off or rest. With the reason. All the way to your start line.",
};

/** Alleen lettertypes en stijl. Kop en voet zitten per taal in _ui/kader.tsx. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <div className={`site ${bebas.variable} ${dm.variable}`}>{children}</div>;
}
