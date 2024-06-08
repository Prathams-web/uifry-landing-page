import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uifry",
  description: "Make The Best Financial Decisions",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto">
        <div className="sticky top-0 mx-auto w-full flex items-center justify-center z-[100]">
            <Navbar />
        </div>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
