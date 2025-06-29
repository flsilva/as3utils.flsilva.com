import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import { MainHeader } from "@/features/shared/ui/MainHeader";
import { MainFooter } from "@/features/shared/ui/MainFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AS3Utils: utility library for AS3 apps",
  description:
    "AS3Utils is an utility library with common implementations (e.g. StringUtil, ArrayUtil, RandomUtil) for Flash/Flex/AIR AS3 daily work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`flex flex-col h-full ${geistSans.variable} ${geistMono.variable} font-geist-sans antialiased`}
      >
        <div className="flex flex-col flex-1 w-full bg-primary-bg">
          <MainHeader />
          <div className="flex flex-row justify-center mb-28">
            <div className="flex flex-col box-border w-full px-4 md:px-8 lg:w-5xl">
              <main>
                <article className="grid gap-y-6">{children}</article>
              </main>
            </div>
          </div>
        </div>
        <MainFooter />
      </body>
      <GoogleAnalytics gaId="UA-36881511-3" />
    </html>
  );
}
