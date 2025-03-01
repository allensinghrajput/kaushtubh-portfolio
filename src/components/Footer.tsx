
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-medium">Kaushtubh</p>
            <p className="text-sm text-muted-foreground">Designer & Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Kaushtubh. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>Designed with precision. Built with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
