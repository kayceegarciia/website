import Link from 'next/link';
import { Brain, BarChart3, Wrench, Cloud, Users, BookOpen } from 'lucide-react';

export default function Interests() {
  const interests = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Developing NLP models and AI solutions for enterprise risk management and data analysis.',
      icon: <Brain size={40} style={{color: '#0EA551'}} />,
    },
    {
      title: 'Data Science & Analytics',
      description: 'Analyzing complex datasets to drive insights and improve user experiences.',
      icon: <BarChart3 size={40} style={{color: '#0EA551'}} />,
    },
    {
      title: 'Software Engineering Best Practices',
      description: 'Writing clean, maintainable code and implementing robust testing strategies.',
      icon: <Wrench size={40} style={{color: '#0EA551'}} />,
    },
    {
      title: 'Distributed Systems',
      description: 'Building scalable systems using cloud technologies and modern architectures.',
      icon: <Cloud size={40} style={{color: '#0EA551'}} />,
    },
    {
      title: 'Community Leadership',
      description: 'Serving as Public Relations Officer for SHPE, mentoring peers in tech.',
      icon: <Users size={40} style={{color: '#0EA551'}} />,
    },
    {
      title: 'Continuous Learning',
      description: 'Staying current with emerging technologies and expanding technical skillset.',
      icon: <BookOpen size={40} style={{color: '#0EA551'}} />,
    },
  ];

  return (
    <main className="min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-6" style={{color: '#0EA551'}}>My Interests & Focus Areas</h1>
          <p className="text-lg text-green-200 mb-16">
            Areas of technology and leadership I'm passionate about exploring and mastering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-6 py-4 border-b border-[#0EA551]/20">
                  <div className="flex items-center justify-center">{interest.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2" style={{color: '#0EA551'}}>{interest.title}</h3>
                  <p className="text-sm" style={{color: '#4ADE80'}}>{interest.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-shadow duration-300">
            <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-8 py-6 border-b border-[#0EA551]/20">
              <h2 className="text-2xl font-bold" style={{color: '#0EA551'}}>What Drives Me</h2>
            </div>
            <div className="p-8">
              <p className="leading-relaxed" style={{color: '#4ADE80'}}>
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
