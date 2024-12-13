import "@/app/styles/globals.css";
import type { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title:
    "Суррогатное материнство | Центр Motherhood – Безопасность и профессионализм",
  description:
    "Центр Motherhood предлагает безопасные и качественные услуги суррогатного материнства для семей по всему миру. Узнайте больше о наших услугах!",
    icons: {icon: {url: "icon-192x192.png", sizes: "32x32", rel: "icon",}},
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
          content="суррогатное материнство, центр суррогатного материнства, услуги суррогатного материнства, суррогатная мать"
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
        <link rel="icon" href="/icon-192x192.png" sizes="32x32" />
        <link rel="icon" href="/icon-192x192.svg" sizes="32x32" />
      </head>
      <body>
        {children} <Script />{" "}
      </body>
    </html>
  );
}
