import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";  // ← add this
import Footer from "./components/Footer";
import CursorSpiral from "./components/CursorSpiral";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rosalinda Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
      <CursorSpiral />         
        <Header />                        
        <main className="pt-16"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}