import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Inter font to the body */}
      <body className={`font-serif bg-white text-black antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}