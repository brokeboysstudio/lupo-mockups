import { Kader } from "../_ui/kader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Kader taal="en">{children}</Kader>;
}
