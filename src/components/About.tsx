import React from 'react';
import SectionHeading from './common/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="My Background" />
        
        <div className="max-w-3xl mx-auto mt-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Combining Technical Expertise with Creative Problem-Solving
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I'm a Computer Science graduate with a specialization in Data Science from Presidency University, Bangalore, where I maintained a CGPA of 8.10. My academic journey has equipped me with a strong foundation in both theoretical concepts and practical applications.
            </p>
            <p>
              Currently working as a Machine Learning Intern at Newspace Research and Technologies, I'm developing reinforcement learning solutions for drone swarms, achieving impressive results with a 93.33% success rate and zero collisions.
            </p>
            <p>
              My technical skill set spans multiple domains including Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Full Stack Development. I'm proficient in Python, SQL, Java, C, and web technologies.
            </p>
            <p>
              Beyond technology, I'm a trained Bharatnatyam dancer with a Junior Diploma and Level-3 certification from Gandharva Mahavidyalaya, demonstrating my dedication to both technical and artistic pursuits.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="https://linkedin.com/in/khushi-meti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-300"
            >
              LinkedIn Profile
            </a>
            <a 
              href="/Khushi_s_Resume.pdf" 
              download 
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              Download Resume
            </a>
            <a 
              href="https://github.com/Khushi-Meti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              GitHub Profile
            </a>
            <a 
              href="https://leetcode.com/u/Khushi152002/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              LeetCode Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
