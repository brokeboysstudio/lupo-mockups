import type { Metadata } from "next";
import { Cookies, TITEL_COOKIES } from "../../_inhoud/cookies";

export const metadata: Metadata = { title: TITEL_COOKIES.nl };

export default function Page() {
  return <Cookies taal="nl" />;
}
