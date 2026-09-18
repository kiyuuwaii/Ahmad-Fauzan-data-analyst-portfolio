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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen selection:bg-emerald-100 selection:text-emerald-900 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
