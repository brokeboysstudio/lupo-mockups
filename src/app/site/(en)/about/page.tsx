import type { Metadata } from "next";
import { Over, TITEL_OVER } from "../../_inhoud/over-contact";

export const metadata: Metadata = { title: TITEL_OVER.en };

export default function Page() {
  return <Over taal="en" />;
}
