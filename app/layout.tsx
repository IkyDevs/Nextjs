"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbars from "./components/ui/Navbar";
import { usePathname } from "next/navigation";

const disableNav = ["/login", "/register"];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!disableNav.includes(pathname) && <Navbars />}

        {children}
      </body>
    </html>
  );
}
