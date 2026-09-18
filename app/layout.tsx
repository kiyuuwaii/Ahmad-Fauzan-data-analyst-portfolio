import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import InteractiveBackground from "@/components/InteractiveBackground";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Fauzan Ash Shidiq | Data Analyst",
  description: "Personal Portfolio of Ahmad Fauzan Ash Shidiq, Data Analyst.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 min-h-screen antialiased`}>
        <InteractiveBackground />
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
