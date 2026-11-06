import type { Metadata } from "next";
import { Contact, TITEL_CONTACT } from "../../_inhoud/over-contact";

export const metadata: Metadata = { title: TITEL_CONTACT.nl };

export default function Page() {
  return <Contact taal="nl" />;
}
