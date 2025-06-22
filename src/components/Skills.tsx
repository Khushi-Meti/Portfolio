import React from 'react';
import SectionHeading from './common/SectionHeading';
import ScrollReveal from '../utils/ScrollReveal';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 1-5
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Java', level: 5 },
      { name: 'Python', level: 4 },
      { name: 'SQL', level: 4 },
      { name: 'C', level: 3 },
      { name: 'HTML/CSS', level: 4 }
    ]
  },
  {
    name: 'Technologies & Frameworks',
    skills: [
      { name: 'Machine Learning', level: 4.5 },
      { name: 'Deep Learning', level: 4 },
      { name: 'NLP', level: 4 },
      { name: 'Computer Vision', level: 4 },
      { name: 'Spring Boot', level: 3 },
      { name: 'Streamlit', level: 4 },
      { name: 'PowerBI', level: 3 }
    ]
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'TensorFlow', level: 4 },
      { name: 'Pandas', level: 5 },
      { name: 'Matplotlib', level: 4 },
      { name: 'Seaborn', level: 4 },
      { name: 'Raspberry Pi', level: 3 }
    ]
  }
];

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  const percentage = level === 5 ? 95 : level === 4.5 ? 90 : level * 20;
  
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-blue-600 dark:text-blue-400 font-semibold">{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full skill-bar shadow-sm"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Skills & Expertise" subtitle="What I Can Do" />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, idx) => (
            <ScrollReveal key={idx} delay={200 * (idx + 1)}>
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {category.name}
                </h3>
                
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar key={skillIdx} name={skill.name} level={skill.level} />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;