import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-green-950 via-green-900 to-green-800">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold text-green-100 mb-4">
              Kaycee Garcia
            </h1>
            <p className="text-xl text-green-200 mb-8">
              Computer Science Student & AI/ML Engineer
            </p>
            <div className="bg-green-900/50 backdrop-blur shadow-lg p-8 mb-12 border-2 border-green-700">
              <h2 className="text-2xl font-semibold text-green-100 mb-4">About Me</h2>
              <p className="text-green-200 leading-relaxed mb-4">
                I'm a Computer Science student at Arizona State University's Barrett, the Honors College, graduating May 2026. 
                Currently an AI/ML Engineer Intern at USAA, I'm passionate about machine learning, data analysis, and building 
                scalable software solutions. I have experience with NLP, distributed systems, and full-stack development.
              </p>
              <p className="text-green-200 leading-relaxed">
                Explore my work through the navigation menu to learn more about my projects, technical skills, professional 
                experience, and what drives me forward in software engineering.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <Link href="/projects">
              <div className="relative h-80 w-full flex items-center justify-center cursor-pointer group bg-gradient-to-br from-green-700 to-green-900 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition">
                <div className="relative text-center px-6">
                  <div className="text-5xl mb-4">💼</div>
                  <h3 className="text-xl font-bold text-white mb-2">Projects & Skills</h3>
                  <p className="text-green-100">
                    View my projects, technical skills, and download my resume.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/contact">
              <div className="relative h-80 w-full flex items-center justify-center cursor-pointer group bg-gradient-to-br from-teal-800 to-green-900 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition">
                <div className="relative text-center px-6">
                  <div className="text-5xl mb-4">📧</div>
                  <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
                  <p className="text-green-100">
                    Get in touch with me via email or phone.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/interests">
              <div className="relative h-80 w-full flex items-center justify-center cursor-pointer group bg-gradient-to-br from-green-800 to-green-950 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition">
                <div className="relative text-center px-6">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-2">Interests</h3>
                  <p className="text-green-100">
                    Learn about my personal interests and hobbies.
                  </p>
                </div>
              </div>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
