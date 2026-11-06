import type { Metadata } from "next";
import { Terms, TITEL_TERMS } from "../../_inhoud/terms";

export const metadata: Metadata = { title: TITEL_TERMS.fr };

export default function Page() {
  return <Terms taal="fr" />;
}
