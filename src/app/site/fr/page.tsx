import type { Metadata } from "next";
import { SLOGAN } from "../_ui/bedrijf";
import { Home } from "../_inhoud/home";

export const metadata: Metadata = { title: { absolute: `LUPO — ${SLOGAN.fr.kop}` } };

export default function Page() {
  return <Home taal="fr" />;
}
