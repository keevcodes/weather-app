import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Project using Next.js and WeatherAPI"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        antialiased width-full bg-linear-to-r from-cyan-500 to-blue-500 bg-blue-500 gap-2 lg:w-[1080px] mx-auto `}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Toaster />
      </body>
    </html>
  );
}
