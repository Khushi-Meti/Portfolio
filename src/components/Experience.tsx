import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import ScrollReveal from '../utils/ScrollReveal';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  current?: boolean;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'newspace',
    title: 'Machine Learning Intern',
    company: 'Newspace Research and Technologies Pvt Ltd',
    location: 'Bangalore, India',
    date: 'Jan 2025 - Present',
    current: true,
    description: [
      'Developed a reinforcement learning-based drone swarm using PPO for hovering, obstacle avoidance, and target-reaching.',
      'Designed reward functions, termination conditions, and feedback systems to improve drone performance. Achieved 93.33% success rate with zero collisions and minimal oscillations.',
      'Trained 8192 drone simulations in parallel, optimizing policy updates and system stability.'
    ]
  },
  {
    id: 'bluelearn',
    title: 'Member',
    company: 'Blue Learn Community',
    location: 'Bangalore, India',
    date: 'Sep 2021 - Jan 2022',
    description: [
      'Learned about virtual assistant jobs and related concepts, enhancing knowledge and skills in virtual assistance and remote work environments.',
      'Participated in community discussions and workshops, gaining insights into effective virtual assistance practices.'
    ]
  }
];

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);

  const selectedExperience = experiences.find(exp => exp.id === activeExperience) || experiences[0];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Work Experience" subtitle="My Professional Journey" />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Experience navigation */}
            <div className="col-span-1">
              <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible space-x-4 md:space-x-0 md:space-y-3 pb-4 md:pb-0">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    className={`py-4 px-6 text-left rounded-xl transition-all duration-300 whitespace-nowrap md:whitespace-normal glass-card ${
                      activeExperience === exp.id
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 dark:text-blue-300 font-medium shadow-lg transform scale-105 border-blue-300/30'
                        : 'hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-gray-600/10 text-gray-700 dark:text-gray-300 hover:transform hover:scale-102'
                    }`}
                    onClick={() => setActiveExperience(exp.id)}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Experience details */}
            <div className="col-span-1 md:col-span-2 glass-card p-8">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedExperience.title}
                  </h3>
                  {selectedExperience.current && (
                    <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full border border-green-200/50 dark:border-green-700/50">
                      Current
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center mt-2 text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-blue-600 dark:text-blue-400 text-lg">{selectedExperience.company}</span>
                  <span className="mx-3">•</span>
                  <span className="text-lg">{selectedExperience.location}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 font-medium">{selectedExperience.date}</p>
              </div>
              
              <ul className="space-y-4 mt-8">
                {selectedExperience.description.map((item, index) => (
                  <li key={index} className="flex">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <span className="ml-3 text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;