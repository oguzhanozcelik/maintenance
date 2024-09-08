import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Under Maintenance | LaviniaCraft",
  description: "Our website is currently undergoing maintenance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <title>Lavinia Craft Art</title>
        <meta name="p:domain_verify" content="7fb9072a836364473fdf324d9841bd48"/>
    </head>
    <body className={inter.className}>{children}</body>
    </html>
  );
}
