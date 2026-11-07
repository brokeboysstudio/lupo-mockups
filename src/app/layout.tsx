import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Lettertypes staan in de repo (src/fonts), zodat de build niet afhangt van Google Fonts.
const anton = localFont({ src: "../fonts/anton.woff2", weight: "400", variable: "--font-anton" });
const bricolage = localFont({ src: "../fonts/bricolage.woff2", weight: "300 600", variable: "--font-bricolage" });
const jetbrains = localFont({ src: "../fonts/jetbrains-mono.woff2", weight: "400 600", variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "LUPO · het verhaal",
  description: "Gameplan, financieel plan, doorklikbare renders en website van LUPO",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${anton.variable} ${bricolage.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
