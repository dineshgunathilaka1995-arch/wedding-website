import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nimesh & Gayasha | Wedding Invitation",
  description:
    "You are cordially invited to the wedding of Gayasha and nimesh on December 2, 2026 at Holy Cross Church and Tangerine Beach Hotel, Kalutara.",
  openGraph: {
    title: "Nimesh & Gayasha | Wedding Invitation",
    description: "December 2, 2026 · Kalutara, Sri Lanka",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#6b1d2d",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${script.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
