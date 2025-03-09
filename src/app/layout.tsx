import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "Nagatsu Akiza",
  description: "Nagatsu Akiza Portofolio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen justify-center items-center bg-black`}>
        <InteractiveGridPattern
          className={`${cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
          )} z-0`}
          width={40}
          height={40}
          squares={[80, 80]}
          squaresClassName="hover:fill-secondary/20"
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
