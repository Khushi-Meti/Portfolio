import React, { useState } from 'react';
import SectionHeading from './common/SectionHeading';
import ScrollReveal from '../utils/ScrollReveal';
import { ExternalLink, Github, Tag } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  demoLink?: string;
  repoLink?: string;
}

const projects: Project[] = [
  {
    id: 'chat-app',
    title: 'Real-Time Chat Application',
    description: 'Developed a real-time web chat application enabling instant message exchange using WebSockets with STOMP protocol over SockJS fallback. Designed a responsive dark-themed frontend using Bootstrap with user input validation and real-time chat updates.',
    date: 'July 2025',
    technologies: ['Java', 'Spring Boot', 'WebSocket', 'STOMP', 'SockJS', 'HTML', 'Bootstrap'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/chat-App'
  },
  {
    id: 'book-recommendation',
    title: 'Book Recommendation System',
    description: 'Developed an 85% accurate hybrid recommendation engine combining popularity-based, collaborative filtering (matrix factorization, cosine similarity), and content-based filtering to address cold-start issues.',
    date: 'Nov 2024',
    technologies: ['TensorFlow', 'OpenAI API', 'Streamlit', 'Collaborative Filtering', 'Matplotlib', 'Seaborn'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/Book-recommendation-System'
  },
  {
    id: 'movie-recommendation',
    title: 'Movie Recommendation System',
    description: 'Built a sophisticated movie recommendation system using TMDB dataset, implementing natural language processing and cosine similarity for personalized suggestions. Created a Streamlit web interface with dynamic movie poster display via TMDB API.',
    date: 'Sep 2024',
    technologies: ['Python', 'Scikit-learn', 'Streamlit', 'TMDB API', 'Pandas', 'NumPy'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/Movie-Recommendation-System'
  },
  {
    id: 'sports-classification',
    title: 'Sports Image Classification',
    description: 'Developed a machine learning pipeline achieving 92% accuracy in classifying sports celebrity images using SVM with RBF kernel. Implemented face detection with OpenCV and feature extraction through Haar Wavelet Transformation.',
    date: 'Aug 2024',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'SVM', 'Flask', 'Matplotlib'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/Sports-Image-Classification'
  },
  {
    id: 'house-price',
    title: 'House Price Prediction',
    description: 'Created a predictive model for Bengaluru house prices with 82% R² score using Linear Regression. Implemented comprehensive data cleaning and feature engineering, deployed via Flask API for real-time predictions.',
    date: 'Aug 2024',
    technologies: ['Python', 'Scikit-learn', 'Flask', 'Pandas', 'NumPy'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti'
  },
  {
    id: 'todo-app',
    title: 'To-Do List Web App',
    description: 'Developed a full-stack task management application using Spring Boot, JPA, and MySQL, enabling users to efficiently add, update, and delete tasks with real-time UI feedback.',
    date: 'Apr 2025',
    technologies: ['Spring Boot', 'Thymeleaf', 'MySQL', 'JPA', 'Bootstrap', 'Lombok'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/todo_app'
  },
  {
    id: 'linkedin-scraper',
    title: 'LinkedIn Web Scraping',
    description: 'Built an automated web scraper using Selenium and BeautifulSoup, extracting LinkedIn profiles with an accuracy rate of 95%. Designed a structured pipeline with Pandas for data cleaning and analysis.',
    date: 'Feb 2025 - Present',
    technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti'
  },
  {
    id: 'potato-disease',
    title: 'Potato Disease Classification',
    description: 'Developed a CNN model to classify potato leaf diseases with 98% accuracy using the PlantVillage dataset. Applied data augmentation and preprocessing techniques for enhanced model robustness.',
    date: 'Jul 2024',
    technologies: ['Python', 'TensorFlow', 'Keras'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/Potato-Disease-Classification'
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="card group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
            {project.date}
          </span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
          {project.description}
        </p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm text-gray-700 dark:text-gray-300"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-end space-x-4">
          {project.repoLink && (
            <a 
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="View source code"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.demoLink && (
            <a 
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const allTechnologies = ['all', ...new Set(projects.flatMap(p => p.technologies))].slice(0, 10);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-gray-900"></div>
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeading title="My Projects" subtitle="Recent Work" />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 backdrop-blur-sm ${
                  filter === tech
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/70 hover:transform hover:scale-102'
                }`}
              >
                {tech === 'all' ? 'All Projects' : tech}
              </button>
            ))}
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={100 * (index + 1)}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;