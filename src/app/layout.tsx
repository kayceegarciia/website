import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import DockNavigation from "@/components/DockNavigation";
import ClickSpark from "@/components/ClickSpark";
import LineWaves from "@/components/LineWaves";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kayceegarcia.com",
  description: "A portfolio showcasing my projects, skills, and experience as a software engineer.",
  icons: {
    icon: '/image.png',
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
        className={`${playfair.className} ${outfit.className} antialiased flex flex-col min-h-screen m-0 p-0`}
      >
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <LineWaves
            speed={0.3}
            innerLineCount={40}
            outerLineCount={36}
            warpIntensity={0.8}
            rotation={-45}
            edgeFadeWidth={0}
            colorCycleSpeed={1}
            brightness={0.2}
            color1="#43963f"
            color2="#f2577e"
            color3="#35822d"
            enableMouseInteraction
            mouseInfluence={0.9}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', width: '100%' }}>
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
        </div>
      </body>
    </html>
  );
}
