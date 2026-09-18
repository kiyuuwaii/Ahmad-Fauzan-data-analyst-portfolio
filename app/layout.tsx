import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Fauzan Ash Shidiq | Data Analyst",
  description: "Personal Portfolio of Ahmad Fauzan Ash Shidiq, Data Analyst and Problem Solver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200 antialiased`}>
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          {children}
        </div>
      </body>
    </html>
  );
}
