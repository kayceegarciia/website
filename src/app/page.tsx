'use client';
import dynamic from 'next/dynamic';
import TextType from '@/components/TextType';
import SongRequest from '@/components/SongRequest';

const Lanyard = dynamic(() => import('@/components/Lanyard'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100vh' }} />,
});

export default function Home() {
  return (
    <main className="w-full">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', minHeight: '100vh', width: '100%' }}>
        {/* Left Column: About Me */}
        <div style={{ padding: '2rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '4rem' }}>
          <section>
            <div className="mb-12">
              <TextType
                text={[
                  'Welcome to my portfolio!\n Feel free to interact with my lanyard -->',
                  'Kaycee Garcia\nComputer Science Student & Software Engineer'
                ]}
                typingSpeed={85}
                pauseDuration={2300}
                deletingSpeed={35}
                loop={false}
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
                className="leading-tight"
                lineClassNames={["text-5xl md:text-6xl font-bold", "text-2xl md:text-3xl font-semibold"]}
                lineColors={["#4ADE80", "#0EA551"]}
                singleLineClassName="text-2xl md:text-3xl font-semibold"
                singleLineColor="#0EA551"
              />
            </div>
            <div
              className="rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-8 py-6 border-b border-[#0EA551]/20">
                <h2 className="text-2xl font-bold" style={{ color: '#0EA551' }}>
                  About Me
                </h2>
              </div>
              <div className="p-8">
                <p className="leading-relaxed mb-4" style={{ color: '#4ADE80' }}>
                  Computer Science major at Arizona State University, graduating May 2026.
                  <br />
                  <br />
                  When I'm not engineering solutions, you'll find me exploring new technology, enjoying good music, or diving into immersive games.
                </p>
              </div>
            </div>
            <SongRequest />
          </section>
        </div>

        {/* Right Column: 3D Lanyard */}
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
          <Lanyard />
        </div>
      </div>
    </main>
  );
}
