import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ersagun Tosun — Robotics Engineer",
  description: "Personal portfolio of Ersagun Tosun.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
