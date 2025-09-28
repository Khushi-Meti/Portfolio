import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="mb-6 inline-block">
                <span className="inline-block py-2 px-4 rounded-full bg-blue-100 dark:bg-gray-600/80 text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm border border-white/30 dark:border-white/20">
                  Software Engineer & Machine Learning Specialist
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Hi, I'm Khushi S M
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                Passionate Software Engineer specializing in Java and Spring Boot, crafting scalable, secure, and high-performance applications with clean code and modern architecture.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 glass-effect text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="relative inline-block overflow-hidden shadow-2xl ring-4 ring-white/20 dark:ring-white/10 rounded-2xl">
                  <img 
                    src="/portfolio pic copy.jpg" 
                    alt="Khushi S M - Software Engineer" 
                    className="w-auto h-auto max-w-full max-h-[500px] object-contain"
                    />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered content below for mobile */}
        <div className="max-w-4xl mx-auto text-center lg:hidden mt-8">
          <div className="mb-6 inline-block">
            <span className="inline-block py-2 px-4 rounded-full bg-blue-100 dark:bg-gray-600/80 text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm border border-white/30 dark:border-white/20">
              Software Engineer & Machine Learning Specialist
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Hi, I'm Khushi S M
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
            A passionate Software Engineer with hands-on experience in Java full-stack development and Machine Learning. Currently working at Capgemini, specializing in Backend Java-Spring Development and building innovative technology solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 glass-effect text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
