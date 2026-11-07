import type { Metadata } from "next";
import { Data, TITEL_DATA } from "../../_inhoud/data";

export const metadata: Metadata = { title: TITEL_DATA.fr };

export default function Page() {
  return <Data taal="fr" />;
}
