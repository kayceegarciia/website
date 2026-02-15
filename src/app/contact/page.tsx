import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-green-400 mb-4">Contact Me</h1>
          <p className="text-lg text-green-300 mb-12">
            Feel free to reach out using the contact information below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-6 py-4 border-b border-[#0EA551]/20">
                <div className="text-3xl">✉️</div>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-2" style={{color: '#0EA551'}}>Email</h2>
                <p className="mb-2">
                  <a href="mailto:kgarc107@asu.edu" className="font-semibold hover:text-[#4ADE80] transition-all hover:drop-shadow-[0_0_8px_rgba(14,165,81,0.6)]" style={{color: '#0EA551'}}>
                    kgarc107@asu.edu
                  </a>
                </p>
                <p className="text-sm" style={{color: '#4ADE80'}}>
                  Feel free to reach out for opportunities or collaboration
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-6 py-4 border-b border-[#0EA551]/20">
                <div className="text-3xl">📱</div>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-2" style={{color: '#0EA551'}}>Phone</h2>
                <p className="mb-2">
                  <a href="tel:+1-602-332-6042" className="font-semibold hover:text-[#4ADE80] transition-all hover:drop-shadow-[0_0_8px_rgba(14,165,81,0.6)]" style={{color: '#0EA551'}}>
                    +1 (602) 332-6042
                  </a>
                </p>
                <p className="text-sm" style={{color: '#4ADE80'}}>
                  Call or text me anytime
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-6 py-4 border-b border-[#0EA551]/20">
                <div className="text-3xl">💼</div>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-2" style={{color: '#0EA551'}}>LinkedIn</h2>
                <p className="mb-2">
                  <a href="https://www.linkedin.com/in/kaycee-garciia" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#4ADE80] transition-all hover:drop-shadow-[0_0_8px_rgba(14,165,81,0.6)]" style={{color: '#0EA551'}}>
                    Connect with me
                  </a>
                </p>
                <p className="text-sm" style={{color: '#4ADE80'}}>
                  View my professional profile
                </p>
              </div>
            </div>
          </div>

          {/* Resume Section */}
          <section className="mb-12 mt-12">
            <div className="rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-shadow duration-300">
              <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-6 py-4 border-b border-[#0EA551]/20">
                <h2 className="text-xl font-bold" style={{color: '#0EA551'}}>My Resume</h2>
              </div>
              <div className="p-6">
                <p className="mb-6" style={{color: '#4ADE80'}}>
                  Download my resume to see a detailed overview of my experience and qualifications.
                </p>
                <a
                  href="/resume/Kaycee_Garcia_Resume.pdf"
                  download
                  className="inline-block font-bold py-3 px-6 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0EA551]/50"
                  style={{backgroundColor: '#0EA551', color: '#000'}}
                >
                  📥 Download Resume (PDF)
                </a>
              </div>
            </div>
          </section>

          
        </div>
    </main>
  );
}
