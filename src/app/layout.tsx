import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DockNavigation from "@/components/DockNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio | Software Engineer",
  description: "A portfolio showcasing my projects, skills, and experience as a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen m-0 p-0`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <DockNavigation />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
