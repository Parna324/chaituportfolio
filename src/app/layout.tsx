import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Punnam Lakshmi Naga Chaitanya Bhagyakiran | Full-Stack Developer",
  description: "DevOps Expert, Full-Stack Developer & Cloud Architect.",
};

import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary selection:text-white overflow-x-hidden`}
      >
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="min-height-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
