import React from 'react';
import { Mail, Linkedin, MapPin, Github } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Email */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  <a href="mailto:khushi.s.meti@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    khushi.s.meti@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
            <div className="flex items-start">
              <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  <a 
                    href="https://linkedin.com/in/khushi-meti" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/khushi-meti
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  Bangalore, India
                </p>
              </div>
            </div>
          </div>

          {/* GitHub (Optional) */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm">
            <div className="flex items-start">
              <Github className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">GitHub</h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  <a 
                    href="https://github.com/Khushi-Meti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    github.com/Khushi-Meti
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
