import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import ScrollReveal from '../utils/ScrollReveal';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  grade: string;
  year: string;
  icon: React.ReactNode;
  color: string;
}

const educationData: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech Computer Science - Data Science',
    institution: 'Presidency University',
    grade: '8.10 CGPA',
    year: '2021 - 2025',
    icon: <GraduationCap className="h-6 w-6" />,
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 'puc',
    degree: '12th Standard - Karnataka PUC Board',
    institution: 'SVVN PU College',
    grade: '84.83%',
    year: '2019 - 2021',
    icon: <Award className="h-6 w-6" />,
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'icse',
    degree: '10th Standard - ICSE Board',
    institution: 'Lorven Public School',
    grade: '87.5%',
    year: '2019',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'from-pink-600 to-blue-600'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Education" subtitle="Academic Journey" />
        </ScrollReveal>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <ScrollReveal key={edu.id} delay={200 * (index + 1)}>
                <div className="card p-6 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                      {edu.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 md:mb-0">
                          {edu.degree}
                        </h3>
                        <span className="text-sm font-medium px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800/60 dark:to-purple-800/60 text-blue-700 dark:text-blue-300 rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">
                        {edu.institution}
                      </p>
                      
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-500 mr-2">Grade:</span>
                        <span className={`font-bold text-lg bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;