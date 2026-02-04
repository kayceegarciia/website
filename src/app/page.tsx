import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4" style={{color: '#0EA551'}}>
              Kaycee Garcia
            </h1>
            <p className="text-xl mb-8" style={{color: '#07450C'}}>
              Computer Science Student & AI/ML Engineer
            </p>
            <div className="bg-black/50 backdrop-blur shadow-lg p-8 mb-12 border-2" style={{borderColor: '#07450C'}}>
              <h2 className="text-2xl font-semibold mb-4" style={{color: '#0EA551'}}>About Me</h2>
              <p className="leading-relaxed mb-4" style={{color: '#4ADE80'}}>
                I'm a Computer Science student at Arizona State University's Barrett, the Honors College, graduating May 2026. 
                Currently an AI/ML Engineer Intern at USAA, I'm passionate about machine learning, data analysis, and building 
                scalable software solutions. I have experience with NLP, distributed systems, and full-stack development.
              </p>
              <p className="leading-relaxed" style={{color: '#4ADE80'}}>
                Explore my work through the navigation menu to learn more about my projects, technical skills, professional 
                experience, and what drives me forward in software engineering.
              </p>
            </div>
          </section>
        </div>
    </main>
  );
}
