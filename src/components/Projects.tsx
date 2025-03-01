
import React, { useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "Minimalist Portfolio",
    description: "A clean, modern portfolio design with smooth animations and responsive layout.",
    category: "Web Design",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured online shopping experience with intuitive navigation and checkout process.",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "User-friendly banking application focused on security and ease of use.",
    category: "UX/UI Design",
  },
  {
    id: 4,
    title: "Smart Home Dashboard",
    description: "Control panel for managing connected home devices with real-time monitoring.",
    category: "Interface Design",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
            (el as HTMLElement).style.animationDelay = `${i * 100}ms`;
            el.classList.add('animate-slide-up');
          });
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 sm:py-32 bg-secondary/50">
      <div ref={sectionRef} className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Selected work from my portfolio</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-on-scroll opacity-0 project-card">
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-6xl font-bold text-black/5">{project.id}</span>
                </div>
                <div className="project-overlay">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/80 text-center mb-4">{project.description}</p>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="animate-on-scroll opacity-0 mb-6 text-muted-foreground">
            Interested in seeing more of my work?
          </p>
          <a 
            href="#contact" 
            className="animate-on-scroll opacity-0 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300"
          >
            Let's discuss your project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
