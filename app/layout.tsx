"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import Navbars from "./Navbar";

const disableNav = ["/login", "/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <div>
            {!disableNav.includes(pathname) && <Navbars />}
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
