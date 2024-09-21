import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import StoreProvider from "./StoreProvider";
import { Jost } from 'next/font/google';

const jost = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ecommock",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <StoreProvider>
          {children}
        </StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
