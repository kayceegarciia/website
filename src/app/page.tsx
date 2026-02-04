'use client';
import dynamic from 'next/dynamic';

const Lanyard = dynamic(() => import('@/components/Lanyard'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100vh', backgroundColor: '#000000' }} />,
});

export default function Home() {
  return (
    <main className="w-full bg-black">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', minHeight: '100vh', width: '100%' }}>
        {/* Left Column: About Me */}
        <div style={{ padding: '2rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '4rem' }}>
          <section>
            <h1 className="text-5xl font-bold mb-4" style={{ color: '#0EA551' }}>
              Kaycee Garcia
            </h1>
            <p className="text-xl mb-8" style={{ color: '#07450C' }}>
              Computer Science Student & AI/ML Engineer
            </p>
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
