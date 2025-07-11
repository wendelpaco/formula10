import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const appName = "NetStart eBook";
const appDescription = "Descubra o método passo a passo para ganhar dinheiro na internet mesmo sem experiência com nosso eBook exclusivo.";

export const metadata: Metadata = {
  title: appName,
  description: appDescription,
  keywords: ["ganhar dinheiro", "trabalhar online", "renda extra", "netstart", "ebook", "marketing digital"],
  openGraph: {
    title: appName,
    description: appDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: appName,
    description: appDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
