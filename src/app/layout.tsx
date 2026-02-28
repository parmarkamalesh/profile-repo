import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamalesh Parmar | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer with 2+ years building production web and mobile apps. React, React Native, Node.js, TypeScript, AWS.",
  openGraph: {
    title: "Kamalesh Parmar | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer with 2+ years building production web and mobile apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${syne.variable}`}>
      <body className="min-h-screen font-sans antialiased bg-grid">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
