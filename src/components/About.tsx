
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
            (el as HTMLElement).style.animationDelay = `${i * 100}ms`;
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
    <section id="about" className="py-20 sm:py-32">
      <div ref={sectionRef} className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-lg overflow-hidden aspect-square shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100"></div>
              <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-black/5">K</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="animate-on-scroll opacity-0 text-lg">
              Hello! I'm Kaushtubh, a designer and developer passionate about creating beautiful, 
              functional digital experiences.
            </p>
            <p className="animate-on-scroll opacity-0 text-lg">
              With a background in both design and development, I bridge the gap between aesthetics 
              and functionality to build products that not only look great but work flawlessly.
            </p>
            <p className="animate-on-scroll opacity-0 text-lg">
              I believe in minimalist design principles, focusing on what's essential and removing 
              everything that's not. This approach results in clean, intuitive interfaces that 
              provide delightful user experiences.
            </p>
            
            <div className="pt-4 animate-on-scroll opacity-0">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-primary rounded-md text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
