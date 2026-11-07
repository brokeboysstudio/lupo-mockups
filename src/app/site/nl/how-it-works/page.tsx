import type { Metadata } from "next";
import { Hoe, TITEL_HOE } from "../../_inhoud/hoe";

export const metadata: Metadata = { title: TITEL_HOE.nl };

export default function Page() {
  return <Hoe taal="nl" />;
}
