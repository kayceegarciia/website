import Link from 'next/link';

export default function Interests() {
  const interests = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Developing NLP models and AI solutions for enterprise risk management and data analysis.',
      icon: '🤖',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Analyzing complex datasets to drive insights and improve user experiences.',
      icon: '📊',
    },
    {
      title: 'Software Engineering Best Practices',
      description: 'Writing clean, maintainable code and implementing robust testing strategies.',
      icon: '⚙️',
    },
    {
      title: 'Distributed Systems',
      description: 'Building scalable systems using cloud technologies and modern architectures.',
      icon: '☁️',
    },
    {
      title: 'Community Leadership',
      description: 'Serving as Public Relations Officer for SHPE, mentoring peers in tech.',
      icon: '👥',
    },
    {
      title: 'Continuous Learning',
      description: 'Staying current with emerging technologies and expanding technical skillset.',
      icon: '📚',
    },
  ];

  return (
    <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#0EA551'}}>My Interests</h1>
          <p className="text-lg text-green-200 mb-12">
            Here are some of the things I'm passionate about and enjoy exploring.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="relative h-72 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-br from-green-700 to-green-900 hover:shadow-xl hover:scale-105 transition p-6">
                <div className="relative text-center">
                  <div className="text-5xl mb-4">{interest.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{interest.title}</h3>
                  <p className="text-green-100 text-sm">{interest.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-green-700 to-teal-900 rounded-2xl shadow-lg p-8 border-2 border-green-600">
            <h2 className="text-2xl font-bold text-white mb-4">What Drives Me</h2>
            <p className="text-green-100 leading-relaxed">
              I'm passionate about leveraging technology to solve real-world problems. Whether it's developing 
              AI models for risk management, analyzing data to improve user engagement, or optimizing system performance, 
              I'm driven by the opportunity to make meaningful impact. As a Barrett Honors student and SHPE leader, 
              I believe in continuous learning and lifting others up in the tech community.
            </p>
          </div>

          <div className="mt-12">
            <Link href="/" className="text-green-400 hover:text-green-300 font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
    </main>
  );
}
