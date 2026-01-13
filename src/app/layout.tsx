import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const kanit = Kanit({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio for lazy people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* If we needed manual head tags */}
      </head>
      <body className={`${kanit.className} ${kanit.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

