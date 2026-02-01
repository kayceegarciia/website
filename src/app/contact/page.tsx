import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-green-950 via-green-900 to-green-800">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-green-100 mb-4">Contact Me</h1>
          <p className="text-lg text-green-200 mb-12">
            Feel free to reach out using the contact information below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-br from-green-700 to-green-900">
              <div className="relative text-center px-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-3xl">✉️</div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Email</h2>
                <p className="text-white mb-2">
                  <a href="mailto:kgarc107@asu.edu" className="hover:text-green-200 font-semibold">
                    kgarc107@asu.edu
                  </a>
                </p>
                <p className="text-green-200 text-sm">
                  Feel free to reach out for opportunities or collaboration
                </p>
              </div>
            </div>

            <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-br from-teal-800 to-green-900">
              <div className="relative text-center px-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-3xl">📱</div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Phone</h2>
                <p className="text-white mb-2">
                  <a href="tel:+1-602-332-6042" className="hover:text-green-200 font-semibold">
                    +1 (602) 332-6042
                  </a>
                </p>
                <p className="text-green-200 text-sm">
                  Call or text me anytime
                </p>
              </div>
            </div>

            <div className="relative h-64 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-br from-blue-700 to-green-900">
              <div className="relative text-center px-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-3xl">💼</div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">LinkedIn</h2>
                <p className="text-white mb-2">
                  <a href="https://www.linkedin.com/in/kaycee-garciia" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 font-semibold">
                    Connect with me
                  </a>
                </p>
                <p className="text-green-200 text-sm">
                  View my professional profile
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/" className="text-green-400 hover:text-green-300 font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
