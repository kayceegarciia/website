import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-green-400 mb-4">Contact Me</h1>
          <p className="text-lg text-green-300 mb-12">
            Feel free to reach out using the contact information below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-br from-black/60 to-black border-2" style={{borderColor: '#07450C'}}>
              <div className="relative text-center px-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-3xl">✉️</div>
                </div>
                <h2 className="text-2xl font-bold mb-2" style={{color: '#0EA551'}}>Email</h2>
                <p className="mb-2" style={{color: '#07450C'}}>
                  <a href="mailto:kgarc107@asu.edu" className="font-semibold" style={{color: '#0EA551'}}>
                    kgarc107@asu.edu
                  </a>
                </p>
                <p className="text-sm" style={{color: '#07450C'}}>
                  Feel free to reach out for opportunities or collaboration
                </p>
              </div>
            </div>

            <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-br from-black/60 to-black border-2" style={{borderColor: '#07450C'}}>
              <div className="relative text-center px-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-3xl">📱</div>
                </div>
                <h2 className="text-2xl font-bold mb-2" style={{color: '#0EA551'}}>Phone</h2>
                <p className="mb-2" style={{color: '#07450C'}}>
                  <a href="tel:+1-602-332-6042" className="font-semibold" style={{color: '#0EA551'}}>
                    +1 (602) 332-6042
                  </a>
                </p>
                <p className="text-sm" style={{color: '#07450C'}}>
                  Call or text me anytime
                </p>
              </div>
            </div>

            <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-br from-black/60 to-black border-2" style={{borderColor: '#07450C'}}>
              <div className="relative text-center px-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-3xl">💼</div>
                </div>
                <h2 className="text-2xl font-bold mb-2" style={{color: '#0EA551'}}>LinkedIn</h2>
                <p className="mb-2" style={{color: '#07450C'}}>
                  <a href="https://www.linkedin.com/in/kaycee-garciia" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{color: '#0EA551'}}>
                    Connect with me
                  </a>
                </p>
                <p className="text-sm" style={{color: '#07450C'}}>
                  View my professional profile
                </p>
              </div>
            </div>
          </div>

          {/* Resume Section */}
          <section className="mb-12 mt-12">
            <div className="rounded-2xl shadow-lg p-8 border-2 bg-gradient-to-br from-black/60 to-black" style={{borderColor: '#07450C'}}>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#0EA551'}}>My Resume</h2>
              <p className="mb-6" style={{color: '#4ADE80'}}>
                Download my resume to see a detailed overview of my experience and qualifications.
              </p>
              <a
                href="/resume/Kaycee_Garcia_Resume.pdf"
                download
                className="inline-block font-bold py-3 px-6 rounded-lg transition"
                style={{backgroundColor: '#0EA551', color: '#000', border: '2px solid #07450C'}}
              >
                📥 Download Resume (PDF)
              </a>
            </div>
          </section>

          
        </div>
    </main>
  );
}
