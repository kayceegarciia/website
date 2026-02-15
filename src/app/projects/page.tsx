import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'CrowsList',
      description: 'Full-stack marketplace web application for college students to buy and sell academic resources. Features real-time messaging, admin moderation, image uploads, and community-based transactions within campus communities.',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Cloudinary'],
    },
    {
      title: 'Similar Operational Loss Event Predictor',
      description: 'NLP model that identifies relationships between operational losses using embeddings and cosine similarity (threshold 0.64) for enterprise-wide risk detection.',
      technologies: ['NLP', 'PyTorch', 'Python', 'Embeddings'],
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Responsive portfolio website showcasing projects, technical skills, professional experience, and interests. Built with modern web technologies for optimal performance.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    },
  ];

  const skills = {
    'Languages': ['Java', 'Python', 'JavaScript','C++', 'SQL', 'HTML', 'CSS'],
    'AI/ML & Data': ['PyTorch', 'SciKit', 'NLP', 'Jupyter Notebooks', 'Apache Airflow', 'Snowflake'],
    'Tools & Technologies': ['Git', 'GitLab', 'Docker', 'Node.js', 'Jira', 'JUnit', 'MATLAB'],
  };

  return (
    <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-12" style={{color: '#0EA551'}}>Projects & Skills</h1>

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{color: '#0EA551'}}>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-6 py-4 border-b border-[#0EA551]/20">
                    <h3 className="text-lg font-bold" style={{color: '#0EA551'}}>{project.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm mb-4" style={{color: '#4ADE80'}}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-[#0EA551]/20 text-[#0EA551] text-xs px-3 py-1 rounded-full border border-[#0EA551]/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{color: '#0EA551'}}>Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#0EA551]/30 overflow-hidden hover:shadow-[0_8px_48px_rgba(14,165,81,0.2)] transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-[#0EA551]/10 to-transparent px-6 py-4 border-b border-[#0EA551]/20">
                    <h3 className="text-lg font-bold" style={{color: '#0EA551'}}>{category}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {skillList.map((skill, i) => (
                        <li key={i} className="text-sm flex items-center" style={{color: '#4ADE80'}}>
                          <span className="mr-2" style={{color: '#0EA551'}}>✓</span> {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
    </main>
  );
}
