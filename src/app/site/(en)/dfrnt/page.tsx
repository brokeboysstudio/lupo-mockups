import type { Metadata } from "next";
import { Dfrnt, TITEL_DFRNT } from "../../_inhoud/dfrnt";

export const metadata: Metadata = { title: TITEL_DFRNT.en };

export default function Page() {
  return <Dfrnt taal="en" />;
}
