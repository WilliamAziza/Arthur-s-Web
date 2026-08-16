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
  title: "Arthur's Web | Web Development & IT Solutions",
  description:
    "Arthur's Web builds fast, modern websites and IT solutions for businesses that want to grow online with a professional digital presence.",
  keywords: [
    "web development",
    "IT solutions",
    "website design",
    "business website",
    "digital strategy",
    "custom web apps",
  ],
  openGraph: {
    title: "Arthur's Web | Web Development & IT Solutions",
    description:
      "Fast, modern websites and IT solutions built to help businesses grow online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
