import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NeatBackground from "@/components/NeatBackground";
import BackToTop from "@/components/BackToTop";
import ScrollVignette from "@/components/ScrollVignette";

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
      <body className={`${inter.className} bg-[#EBF4FE] text-slate-800 min-h-screen antialiased`}>
        <ScrollVignette />
        <NeatBackground />
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
