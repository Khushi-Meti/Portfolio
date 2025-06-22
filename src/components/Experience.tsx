import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'newspace',
    title: 'Machine Learning Intern',
    company: 'Newspace Research and Technologies',
    location: 'Bangalore, India',
    date: 'Jan 2025 - Present',
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="Work Experience" subtitle="My Professional Journey" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experience navigation */}
          <div className="col-span-1">
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible space-x-4 md:space-x-0 md:space-y-1 pb-4 md:pb-0">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  className={`py-3 px-4 text-left rounded-lg transition-colors whitespace-nowrap md:whitespace-normal ${
                    activeExperience === exp.id
                      ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={() => setActiveExperience(exp.id)}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          
          {/* Experience details */}
          <div className="col-span-1 md:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedExperience.title}
              </h3>
              <div className="flex flex-wrap items-center mt-1 text-gray-600 dark:text-gray-400">
                <span className="font-medium text-blue-600 dark:text-blue-400">{selectedExperience.company}</span>
                <span className="mx-2">•</span>
                <span>{selectedExperience.location}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{selectedExperience.date}</p>
            </div>
            
            <ul className="space-y-3 mt-6">
              {selectedExperience.description.map((item, index) => (
                <li key={index} className="flex">
                  <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;