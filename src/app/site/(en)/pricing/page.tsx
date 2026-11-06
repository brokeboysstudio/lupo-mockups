import type { Metadata } from "next";
import { Prijzen, TITEL_PRIJZEN } from "../../_inhoud/prijzen";

export const metadata: Metadata = { title: TITEL_PRIJZEN.en };

export default function Page() {
  return <Prijzen taal="en" />;
}
