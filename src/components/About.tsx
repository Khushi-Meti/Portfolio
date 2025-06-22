import React from 'react';
import SectionHeading from './common/SectionHeading';
import ScrollReveal from '../utils/ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeading title="About Me" subtitle="My Background" />
        </ScrollReveal>
        
        <div className="max-w-5xl mx-auto mt-12">
          {/* Technical Section - Expanded */}
          <ScrollReveal delay={200}>
            <div className="glass-card p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Journey
              </h3>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm a Computer Science graduate with a specialization in Data Science from Presidency University, Bangalore, where I maintained a CGPA of 8.10. My academic journey has equipped me with a strong foundation in both theoretical concepts and practical applications across multiple domains.
                </p>
                <p className="text-lg">
                  Currently working as a Machine Learning Intern at Newspace Research and Technologies Pvt Ltd, I'm developing cutting-edge reinforcement learning solutions for drone swarms, achieving impressive results with a 93.33% success rate and zero collisions. This role has deepened my expertise in advanced AI algorithms and real-world implementation challenges.
                </p>
                <p className="text-lg">
                  My technical expertise spans a comprehensive range of technologies including Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Full Stack Development. I'm proficient in Python, Java, SQL, C, and modern web technologies, with hands-on experience in frameworks like TensorFlow, Spring Boot, and various data science libraries.
                </p>
                <p className="text-lg">
                  I've successfully delivered multiple end-to-end projects, from building recommendation systems with 85% accuracy to developing real-time chat applications and implementing computer vision solutions. My approach combines theoretical knowledge with practical problem-solving, always focusing on creating scalable and efficient solutions.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Quote Section */}
          <ScrollReveal delay={400}>
            <div className="glass-card p-6 mb-8 border-l-4 border-gradient-to-b from-blue-500 to-purple-500">
              <p className="text-xl italic text-gray-800 dark:text-gray-200 text-center font-medium">
                "To me, technology is poetry written in logic — a way to solve what once seemed unsolvable, and connect what once felt distant. It is both tool and torch."
              </p>
            </div>
          </ScrollReveal>

          {/* Off the Clock Section - Condensed */}
          <ScrollReveal delay={600}>
            <div className="glass-card p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Off the Clock
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Bharatanatyam Dancer</span> - Classical dance with Junior Diploma certification
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Mystery Novel Enthusiast</span> - Agatha Christie fan
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={800}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="https://linkedin.com/in/khushi-meti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gradient-blue"
            >
              LinkedIn
            </a>
            <a 
              href="https://drive.google.com/file/d/1HXEaZohGqsQ6ILFI8MDB-IICuwL1Rphk/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient-purple"
            >
              Resume
            </a>
            <a 
              href="https://github.com/Khushi-Meti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient-pink"
            >
              GitHub
            </a>
            <a 
              href="https://leetcode.com/u/Khushi152002/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient-indigo"
            >
              LeetCode
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;