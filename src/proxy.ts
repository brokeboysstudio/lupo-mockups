// Het verhaal staat altijd achter een login (regel uit het brein, 5/11/2026).
// Gebruikersnaam en wachtwoord: Vercel > Settings > Environment Variables,
// MOCKUP_USER en MOCKUP_PASSWORD. Zonder die twee blijft alles dicht.
import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const user = process.env.MOCKUP_USER;
  const password = process.env.MOCKUP_PASSWORD;

  if (user && password) {
    const header = request.headers.get("authorization") || "";
    const [scheme, encoded] = header.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const sep = decoded.indexOf(":");
      if (decoded.slice(0, sep) === user && decoded.slice(sep + 1) === password) {
        const res = NextResponse.next();
        res.headers.set("X-Robots-Tag", "noindex, nofollow");
        return res;
      }
    }
  }

  return new NextResponse("Login vereist", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="LUPO verhaal", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

export const config = { matcher: "/:path*" };
