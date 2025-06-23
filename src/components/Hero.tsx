import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="inline-block py-2 px-4 rounded-full bg-blue-100 dark:bg-gray-600/80 text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm border border-white/30 dark:border-white/20">
              Full Stack Developer & Machine Learning Engineer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Hi, I'm Khushi S M
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-12 leading-relaxed">
            A passionate computer science graduate specializing in data science, machine learning, and full-stack development. Building intelligent solutions to solve real-world problems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 glass-effect text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-600 dark:text-gray-300 mb-2">Scroll Down</span>
        <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </div>
    </section>
  );
};

export default Hero;