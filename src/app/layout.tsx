import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Momentus Motion Corporation",
    template: "%s | Momentus Motion",
  },
  description: "Momentus Motion Corporation - Driving innovation and excellence in business solutions. Strategic consulting, digital transformation, and partnership solutions.",
  keywords: [
    "business consulting",
    "digital transformation",
    "strategic planning",
    "business innovation",
    "corporate solutions",
    "market analysis",
    "brand development",
    "Momentus Motion",
  ],
  authors: [{ name: "Momentus Motion Corporation" }],
  creator: "Momentus Motion Corporation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://momentusmotion.com",
    siteName: "Momentus Motion Corporation",
    title: "Momentus Motion Corporation",
    description: "Driving innovation and excellence in business solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentus Motion Corporation",
    description: "Driving innovation and excellence in business solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen bg-background font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
