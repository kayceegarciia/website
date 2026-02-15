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
              <div key={index} className="rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-6 py-4 border-b border-[#0EA551]/20">
                  <div className="text-4xl">{interest.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2" style={{color: '#0EA551'}}>{interest.title}</h3>
                  <p className="text-sm" style={{color: '#4ADE80'}}>{interest.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-shadow duration-300">
            <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-6 py-4 border-b border-[#0EA551]/20">
              <h2 className="text-xl font-bold" style={{color: '#0EA551'}}>What Drives Me</h2>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed" style={{color: '#4ADE80'}}>
                Coming from a Hispanic background, technology was never a field anyone in my family had ever been part of or even thought about.
                Going into college, I wanted to choose something that both challenged me and connected to my fascination with technology.
                This fueled my passion to not only succeed in this industry but also to pave the way for others like me. 
                I am driven by the desire to create impactful software solutions, contribute to the tech community, and show others who were once in my shoes
                that they too can choose the path of tech.
              </p>
            </div>
          </div>

        </div>
    </main>
  );
}
