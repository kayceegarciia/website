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
              <div key={index} className="relative h-72 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-br from-black/60 to-black border-2 hover:shadow-xl hover:scale-105 transition p-6" style={{borderColor: '#07450C'}}>
                <div className="relative text-center">
                  <div className="text-5xl mb-4">{interest.icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{color: '#0EA551'}}>{interest.title}</h3>
                  <p className="text-green-100 text-sm" style={{color: '#4ADE80'}}>{interest.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-green-700 to-teal-900 rounded-2xl shadow-lg p-8 border-2 border-green-600">
            <h2 className="text-2xl font-bold text-white mb-4">What Drives Me</h2>
            <p className="text-green-100 leading-relaxed">
              Coming from a Hispanic background, technology was never a field anyone in my family had ever been part of or even thought about.
              Going into college, I wanted to choose something that both challenged me and connected to my fascination with technology.
              This fueled my passion to not only succeed in this industry but also to pave the way for others like me. 
              I am driven by the desire to create impactful software solutions, contribute to the tech community, and show others who were once in my shoes
              that they too can choose the path of tech.
            </p>
          </div>

        </div>
    </main>
  );
}
