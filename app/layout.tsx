import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadcn Font Picker - Beautiful Font Selection Component",
  description:
    "A beautiful and customizable font picker component built with shadcn/ui and Google Fonts API. Perfect for modern web applications.",
  keywords: [
    "shadcn",
    "font picker",
    "react",
    "component",
    "google fonts",
    "ui",
  ],
  alternates: { canonical: "https://shadcn-font-picker.vercel.app/" },
  authors: [{ name: "Vinod Patidar" }],
  openGraph: {
    title: "Shadcn Font Picker",
    description:
      "A beautiful font picker component built with shadcn/ui and Google Fonts API",
    type: "website",
    url: "https://shadcn-font-picker.vercel.app/",
    siteName: "Shadcn Font Picker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadcn Font Picker",
    description:
      "A beautiful font picker component built with shadcn/ui and Google Fonts API",
    creator: "@thevinodpatidar",
  },
  icons: { icon: "/favicon.ico" },
  verification: {
    google: "Hz1IFTnXjR3j5H80jC25eENAjgzEhbatuRNeg46tTow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
