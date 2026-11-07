import type { Metadata } from "next";
import { Prijzen, TITEL_PRIJZEN } from "../../_inhoud/prijzen";

export const metadata: Metadata = { title: TITEL_PRIJZEN.nl };

export default function Page() {
  return <Prijzen taal="nl" />;
}
