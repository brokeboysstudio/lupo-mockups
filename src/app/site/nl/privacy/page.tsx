import type { Metadata } from "next";
import { Privacy, TITEL_PRIVACY } from "../../_inhoud/privacy";

export const metadata: Metadata = { title: TITEL_PRIVACY.nl };

export default function Page() {
  return <Privacy taal="nl" />;
}
