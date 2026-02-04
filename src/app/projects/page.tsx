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
    'Languages': ['Java', 'Python', 'JavaScript', 'C', 'C++', 'SQL', 'HTML', 'CSS'],
    'AI/ML & Data': ['PyTorch', 'SciKit', 'NLP', 'Jupyter Notebooks', 'Apache Airflow', 'Snowflake'],
    'Tools & Technologies': ['Git', 'GitLab', 'Docker', 'Node.js', 'Jira', 'JUnit', 'MATLAB'],
  };

  return (
    <main className="min-h-screen bg-black">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-12" style={{color: '#0EA551'}}>Projects & Skills</h1>

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{color: '#0EA551'}}>My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="relative h-64 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-br from-black/60 to-black border-2 p-6" style={{borderColor: '#07450C'}}>
                  <div className="relative text-center">
                    <h3 className="text-xl font-bold mb-2" style={{color: '#0EA551'}}>{project.title}</h3>
                    <p className="text-sm mb-4" style={{color: '#4ADE80'}}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-white/30 text-white text-xs px-2 py-1 rounded-full">
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
                <div key={category} className="relative h-72 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-br from-teal-800 to-green-900 p-6">
                  <div className="relative text-center">
                    <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
                    <ul className="space-y-2">
                      {skillList.map((skill, i) => (
                        <li key={i} className="text-green-100 flex items-center justify-center">
                          <span className="text-green-300 mr-2">✓</span> {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Resume Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl shadow-lg p-8 border-2 border-green-600">
              <h2 className="text-2xl font-bold text-white mb-4">My Resume</h2>
              <p className="text-green-100 mb-6">
                Download my resume to see a detailed overview of my experience and qualifications.
              </p>
              <a
                href="/resume/Kaycee_Garcia_Resume.pdf"
                download
                className="inline-block bg-green-100 text-green-900 font-bold py-3 px-6 rounded-lg hover:bg-white transition"
              >
                📥 Download Resume (PDF)
              </a>
              <p className="text-green-200 text-sm mt-4">
                
              </p>
            </div>
          </section>

          <div className="mt-12">
            <Link href="/" className="text-green-400 hover:text-green-300 font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
    </main>
  );
}
