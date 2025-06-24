import React, { useState } from 'react';
import SectionHeading from './common/SectionHeading';
import ScrollReveal from '../utils/ScrollReveal';
import { ExternalLink, Github, Tag, Calendar, Code, Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  demoLink?: string;
  repoLink?: string;
  category: 'web' | 'ml' | 'data' | 'mobile';
  featured?: boolean;
  accuracy?: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 'chat-app',
    title: 'Real-Time Chat Application',
    description: 'Developed a real-time web chat application enabling instant message exchange using WebSockets with STOMP protocol over SockJS fallback. Designed a responsive dark-themed frontend using Bootstrap with user input validation and real-time chat updates.',
    date: 'July 2025',
    technologies: ['Java', 'Spring Boot', 'WebSocket', 'STOMP', 'SockJS', 'HTML', 'Bootstrap'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/chat-App',
    category: 'web',
    featured: true,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'book-recommendation',
    title: 'Book Recommendation System',
    description: 'Developed an 85% accurate hybrid recommendation engine combining popularity-based, collaborative filtering (matrix factorization, cosine similarity), and content-based filtering to address cold-start issues.',
    date: 'Nov 2024',
    technologies: ['TensorFlow', 'OpenAI API', 'Streamlit', 'Collaborative Filtering', 'Matplotlib', 'Seaborn'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/Book-recommendation-System',
    category: 'ml',
    featured: true,
    accuracy: '85%',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'movie-recommendation',
    title: 'Movie Recommendation System',
    description: 'Built a sophisticated movie recommendation system using TMDB dataset, implementing natural language processing and cosine similarity for personalized suggestions. Created a Streamlit web interface with dynamic movie poster display via TMDB API.',
    date: 'Sep 2024',
    technologies: ['Python', 'Scikit-learn', 'Streamlit', 'TMDB API', 'Pandas', 'NumPy'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/Movie-Recommendation-System',
    category: 'ml',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'sports-classification',
    title: 'Sports Image Classification',
    description: 'Developed a machine learning pipeline achieving 92% accuracy in classifying sports celebrity images using SVM with RBF kernel. Implemented face detection with OpenCV and feature extraction through Haar Wavelet Transformation.',
    date: 'Aug 2024',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'SVM', 'Flask', 'Matplotlib'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/Sports-Image-Classification',
    category: 'ml',
    accuracy: '92%',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'house-price',
    title: 'House Price Prediction',
    description: 'Created a predictive model for Bengaluru house prices with 82% R² score using Linear Regression. Implemented comprehensive data cleaning and feature engineering, deployed via Flask API for real-time predictions.',
    date: 'Aug 2024',
    technologies: ['Python', 'Scikit-learn', 'Flask', 'Pandas', 'NumPy'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti',
    category: 'data',
    accuracy: '82% R²',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'todo-app',
    title: 'To-Do List Web App',
    description: 'Developed a full-stack task management application using Spring Boot, JPA, and MySQL, enabling users to efficiently add, update, and delete tasks with real-time UI feedback.',
    date: 'Apr 2025',
    technologies: ['Spring Boot', 'Thymeleaf', 'MySQL', 'JPA', 'Bootstrap', 'Lombok'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/todo_app',
    category: 'web',
    color: 'from-emerald-500 to-green-500'
  },
  {
    id: 'linkedin-scraper',
    title: 'LinkedIn Web Scraping',
    description: 'Built an automated web scraper using Selenium and BeautifulSoup, extracting LinkedIn profiles with an accuracy rate of 95%. Designed a structured pipeline with Pandas for data cleaning and analysis.',
    date: 'Feb 2025 - Present',
    technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti',
    category: 'data',
    accuracy: '95%',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'potato-disease',
    title: 'Potato Disease Classification',
    description: 'Developed a CNN model to classify potato leaf diseases with 98% accuracy using the PlantVillage dataset. Applied data augmentation and preprocessing techniques for enhanced model robustness.',
    date: 'Jul 2024',
    technologies: ['Python', 'TensorFlow', 'Keras'],
    demoLink: '#',
    repoLink: 'https://github.com/Khushi-Meti/Potato-Disease-Classification',
    category: 'ml',
    accuracy: '98%',
    color: 'from-yellow-500 to-orange-500'
  }
];

const categories = [
  { id: 'all', name: 'All Projects', icon: <Code className="w-4 h-4" />, color: 'from-gray-500 to-gray-600' },
  { id: 'web', name: 'Web Development', icon: <Code className="w-4 h-4" />, color: 'from-blue-500 to-cyan-500' },
  { id: 'ml', name: 'Machine Learning', icon: <Star className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
  { id: 'data', name: 'Data Science', icon: <Tag className="w-4 h-4" />, color: 'from-green-500 to-teal-500' }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isLarge = project.featured && index % 3 === 0;
  
  return (
    <div className={`group ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className="card-shiny h-full overflow-hidden relative">
        {/* Gradient overlay */}
        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.color}`}></div>
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
              <Star className="w-3 h-3" />
              <span>Featured</span>
            </div>
          </div>
        )}
        
        <div className="p-8 h-full flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                <Code className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
            </div>
            
            <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
              {project.title}
            </h3>
            
            {project.accuracy && (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                <Star className="w-3 h-3 mr-1" />
                {project.accuracy} Accuracy
              </div>
            )}
          </div>
          
          {/* Description */}
          <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3 uppercase tracking-wider">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center text-xs px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm text-gray-700 dark:text-gray-200 border border-white/40 dark:border-white/20 hover:scale-105 transition-transform duration-200"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex space-x-3">
              {project.repoLink && (
                <a 
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-all duration-200 hover:scale-105"
                  aria-label="View source code"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm font-medium">Code</span>
                </a>
              )}
              {project.demoLink && (
                <a 
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-lg`}
                  aria-label="View live demo"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm font-medium">Demo</span>
                </a>
              )}
            </div>
            
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color} shadow-lg`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Featured Projects" subtitle="My Creative Work" />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my diverse portfolio of projects spanning web development, machine learning, and data science. 
              Each project represents a unique challenge solved with creativity and technical expertise.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Category Filter */}
        <ScrollReveal delay={300}>
          <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap gap-3 p-2 glass-effect rounded-2xl border border-white/30 dark:border-white/20">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    filter === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : 'text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-600/50 hover:scale-102'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
                    {category.id === 'all' ? projects.length : projects.filter(p => p.category === category.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={100 * (index + 1)}>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
        
        {/* Stats Section */}
        <ScrollReveal delay={400}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 glass-effect rounded-xl border border-white/30 dark:border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                {projects.length}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Projects Completed
              </div>
            </div>
            
            <div className="text-center p-6 glass-effect rounded-xl border border-white/30 dark:border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Best Accuracy
              </div>
            </div>
            
            <div className="text-center p-6 glass-effect rounded-xl border border-white/30 dark:border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Technologies
              </div>
            </div>
            
            <div className="text-center p-6 glass-effect rounded-xl border border-white/30 dark:border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                4
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Categories
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;