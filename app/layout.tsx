import type { Metadata } from "next";
import "./globals.css";
import { Bodoni_Moda, Newsreader } from "next/font/google";
import { cn } from "@/lib/utils";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Relojes Venezuela",
  description:
    "Relojes originales, elegantes y accesibles en toda Venezuela.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        newsreader.variable,
        bodoni.variable
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
