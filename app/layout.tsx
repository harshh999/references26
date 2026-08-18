import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/app/components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lazlle & Co Productions — Selected Digital References",
  description:
    "A curated collection of website references across beverage, food, hospitality and travel — selected for their design, storytelling and digital presence. By Lazlle & Co Productions.",
  openGraph: {
    title: "Lazlle & Co Productions — Selected Digital References",
    description:
      "A curated collection of website references across beverage, food, hospitality and travel — selected for their design, storytelling and digital presence.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
