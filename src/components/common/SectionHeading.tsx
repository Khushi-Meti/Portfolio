import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centerText?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centerText = true 
}) => {
  return (
    <div className={`mb-12 ${centerText ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mt-4 mb-2 mx-auto"></div>
    </div>
  );
};

export default SectionHeading;