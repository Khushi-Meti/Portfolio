import React from 'react';
import SectionHeading from './common/SectionHeading';
import ScrollReveal from '../utils/ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient background matching hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/30"></div>

      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeading title="About Me" subtitle="My Background" />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto mt-12">
          {/* Technical Section */}
          <ScrollReveal delay={200}>
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Journey
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  I'm a Computer Science graduate with a specialization in Data Science from Presidency University, Bangalore, where I maintained a CGPA of 8.10. My academic journey has equipped me with a strong foundation in both theoretical concepts and practical applications.
                </p>
                <p>
                  Currently working as a Machine Learning Intern at Newspace Research and Technologies Pvt Ltd, I'm developing reinforcement learning solutions for drone swarms, achieving impressive results with a 93.33% success rate and zero collisions.
                </p>
                <p>
                  My technical skill set spans multiple domains including Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Full Stack Development. I'm proficient in Python, SQL, Java, C, and web technologies.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Quote */}
        <ScrollReveal delay={400}>
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border-l-4 border-blue-500">
            <p className="italic text-center text-gray-800 dark:text-gray-200 text-lg">
              "Technology is poetry written in logic — a way to solve what once seemed unsolvable, and connect what once felt distant. It is both tool and torch."
            </p>
          </div>
        </ScrollReveal>

        {/* Buttons */}
        <ScrollReveal delay={600}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a 
              href="https://linkedin.com/in/khushi-meti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary shadow-lg"
            >
              LinkedIn Profile
            </a>
            <a 
              href="https://drive.google.com/file/d/1HXEaZohGqsQ6ILFI8MDB-IICuwL1Rphk/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary shadow-lg"
            >
              Download Resume
            </a>
            <a 
              href="https://github.com/Khushi-Meti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary shadow-lg"
            >
              GitHub Profile
            </a>
            <a 
              href="https://leetcode.com/u/Khushi152002/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary shadow-lg"
            >
              LeetCode Profile
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
