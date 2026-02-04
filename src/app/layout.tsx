import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DockNavigation from "@/components/DockNavigation";
import ClickSpark from "@/components/ClickSpark";

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
        <ClickSpark
          sparkColor="#07450C"
          sparkSize={15}
          sparkRadius={80}
          sparkCount={12}
          duration={500}
          easing="ease-out"
          extraScale={1.2}
        >
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
            <DockNavigation />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ClickSpark>
      </body>
    </html>
  );
}
