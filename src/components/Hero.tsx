
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = 1 - (scrollY / 500);
        const translateY = scrollY * 0.3;
        
        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(250,250,250,1) 100%)'
        }}
      ></div>
      
      <div ref={heroRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="opacity-0 animate-fade-in">
          <p className="text-sm sm:text-base uppercase tracking-wider text-muted-foreground mb-4">Welcome to my portfolio</p>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in animation-delay-100">
          Kaushtubh
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in animation-delay-200">
          Designer & Developer
        </p>
        <div className="opacity-0 animate-fade-in animation-delay-300">
          <a 
            href="#about" 
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            Discover my work
            <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
