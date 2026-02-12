'use client';
import dynamic from 'next/dynamic';
import TextType from '@/components/TextType';

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
            <div className="mb-8">
              <TextType
                text={[
                  'Welcome to my Website! Feel free to play with my lanyard -->',
                  'Kaycee Garcia\nComputer Science Student & AI/ML Engineer'
                ]}
                typingSpeed={85}
                pauseDuration={2300}
                deletingSpeed={35}
                loop={false}
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
                className="leading-tight"
                lineClassNames={["text-4xl md:text-5xl font-bold", "text-xl md:text-2xl font-semibold"]}
                lineColors={["#4ADE80", "#0EA551"]}
                singleLineClassName="text-xl md:text-2xl font-semibold"
                singleLineColor="#0EA551"
              />
            </div>
            <div
              className="bg-black/50 backdrop-blur shadow-lg p-8 border-2"
              style={{ borderColor: '#07450C' }}
            >
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#0EA551' }}>
                About Me
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: '#4ADE80' }}>
                I'm a Computer Science student at Arizona State University's Barrett, the Honors College, graduating May 2026.
                Previously an AI/ML Engineer Intern at USAA, I'm passionate about machine learning, data analysis, and building
                scalable software solutions. I have experience with NLP, distributed systems, and full-stack development.
              </p>
              <p className="leading-relaxed" style={{ color: '#4ADE80' }}>
                Explore my work through the navigation menu to learn more about my projects, technical skills, professional
                experience, and what drives me forward in software engineering.
              </p>
            </div>
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
