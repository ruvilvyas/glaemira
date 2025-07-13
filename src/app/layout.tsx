import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { CartProvider } from "@/components/CartContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gleamira",
  keywords: ["jewelry", "e-commerce", "next.js", "react"],
  authors: [
    {
      name: "Gleamira Team",
     // url: "https://gleamira.com",
    },
  ],
  description: "Gleamira - Your Destination for Custom Jewelry",
  openGraph: {
    title: "Gleamira",
    description: "Gleamira - Your Destination for Custom Jewelry",}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
        {children}
        </CartProvider>
        <WhatsAppChat />
        <Footer />
      </body>
    </html>
  );
}
