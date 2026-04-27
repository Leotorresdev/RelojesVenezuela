import type { Metadata } from "next";
import { Jost } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Relojes Venezuela",
  description:
    "Descubre nuestra colección de relojes originales, elegantes y accesibles. Envíos seguros a toda Venezuela.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("h-full", "antialiased", "font-sans", jost.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
