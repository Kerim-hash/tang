import "@/app/styles/globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Favicon from "../../public/favicon.ico";
export const metadata: Metadata = {
  other: {
    custom: "meta",
  },
  icons: { icon: Favicon.src },
  title:
    "Суррогатное материнство | Центр Motherhood – Безопасность и профессионализм",
  description:
    "Центр Motherhood предлагает безопасные и качественные услуги суррогатного материнства для семей по всему миру. Узнайте больше о наших услугах!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="суррогатное материнство, ЭКО клиника Tang, услуги суррогатного материнства, суррогатная мать"
        />
        <meta
          property="og:title"
          content="Суррогатное материнство | Центр Motherhood"
        />
        <meta
          property="og:description"
          content="Безопасность, профессионализм и комфорт для семей по всему миру."
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Суррогатное материнство | Центр Motherhood"
        />
        <meta
          name="twitter:description"
          content="Профессиональные услуги суррогатного материнства."
        />
        <link rel="icon" href={Favicon.src} sizes="any" />
      </head>
      <body>
        {children} <Script />{" "}
      </body>
    </html>
  );
}
