import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LTD Production — Mājas lapu izstrāde un digitālā reklāma | Cēsis",
  description:
    "LTD Production ir digitālā aģentūra Cēsīs. Veidojam mūsdienīgas mājas lapas, e-veikalus un vadām reklāmas kampaņas Facebook, Instagram un Google. Bezmaksas konsultācija.",
  keywords: [
    "mājas lapu izstrāde",
    "e-veikala izveide",
    "digitālā reklāma",
    "Meta Ads",
    "Google Ads",
    "Cēsis",
    "Latvija",
    "web development",
  ],
  openGraph: {
    title: "LTD Production — Mājas lapu izstrāde un digitālā reklāma",
    description:
      "Mūsdienīgas mājas lapas, e-veikali un reklāmas kampaņas, kas palīdz tavam biznesam augt.",
    locale: "lv_LV",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
