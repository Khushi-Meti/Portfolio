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

        <div className="max-w-4xl mx-auto mt-12">
          {/* Technical Section */}
          <ScrollReveal delay={200}>
            <div className="card-shiny p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Journey
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-200">
                <p>
                  I'm a Computer Science graduate with a specialization in Data Science from Presidency University, Bangalore, where I achieved a CGPA of 8.10. My academic journey has equipped me with a strong foundation in both theoretical concepts and practical applications.
                </p>
                <p>
                  Currently working as a Software Engineer at Capgemini, I contribute to innovative technology solutions and software development projects. I have also gained valuable experience as a Machine Learning Intern at Newspace Research and Technologies, where I developed reinforcement learning solutions for drone swarms.
                </p>
                <p>
                  My technical expertise spans Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Full-Stack Development. I'm proficient in Python, Java, SQL, C, and modern web technologies, with hands-on experience in building scalable applications and intelligent systems.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Quote */}
        <ScrollReveal delay={400}>
          <div className="max-w-3xl mx-auto mt-12 p-6 glass-effect rounded-lg border-l-4 border-blue-500">
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
              href="https://drive.google.com/file/d/1SR1-qem0VtqPhWeG89jm84LT6jLk3Q-t/view?usp=sharing" 
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
