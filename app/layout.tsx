import type { Metadata } from "next";

import "./globals.css";
import { IBM_Plex_Sans, Bebas_Neue } from "next/font/google";
// import localFont from "next/font/local";
import { ReactNode } from "react";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise is a book borrowing solution",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className=" bg-gradient-to-t from-gray-900 to-gray-950">
      <body
        className={`${ibmPlex.className}  ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
