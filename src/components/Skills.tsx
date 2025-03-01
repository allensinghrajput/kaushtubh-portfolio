
import React, { useEffect, useRef } from 'react';

const skills = [
  { id: 1, name: "UI Design", category: "Design" },
  { id: 2, name: "UX Research", category: "Design" },
  { id: 3, name: "Prototyping", category: "Design" },
  { id: 4, name: "Wireframing", category: "Design" },
  { id: 5, name: "HTML", category: "Development" },
  { id: 6, name: "CSS", category: "Development" },
  { id: 7, name: "JavaScript", category: "Development" },
  { id: 8, name: "React", category: "Development" },
  { id: 9, name: "Responsive Design", category: "Development" },
  { id: 10, name: "Typography", category: "Design" },
  { id: 11, name: "Color Theory", category: "Design" },
  { id: 12, name: "Frontend Development", category: "Development" },
  { id: 13, name: "Animation", category: "Development" },
  { id: 14, name: "Accessibility", category: "Development" },
  { id: 15, name: "Graphic Design", category: "Design" },
];

const skillCategories = ["All", ...Array.from(new Set(skills.map(skill => skill.category)))];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
            (el as HTMLElement).style.animationDelay = `${i * 50}ms`;
            el.classList.add('animate-fade-in');
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
    <section id="skills" className="py-20 sm:py-32">
      <div ref={sectionRef} className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">What I bring to the table</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.id} 
              className="animate-on-scroll opacity-0 skill-badge"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
