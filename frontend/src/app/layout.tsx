import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/frontend/components/Navbar";
import StarField from "@/frontend/components/StarField";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Bernard Ginn Jr. | Full-Stack Developer",
  description:
    "Professional portfolio of Bernard Ginn Jr. — full-stack developer specializing in modern web technologies, React, Next.js, and scalable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-[#e8e8e8]">
        <StarField />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
