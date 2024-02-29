import type { Metadata } from "next";
import { sans, mont } from "@/app/ui/fonts"
import Navbar from '@/app/components/navbar/navbar'
import Footer from '@/app/components/footer/footer'
import "./globals.css";



export const metadata: Metadata = {
  title: "Evogym fitness", 
  description: "React/Next.js fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mont.variable} min-h-screen min-w-full bg-gray-20`}>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
