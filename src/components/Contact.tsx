import React from 'react';
import { Mail, Linkedin, MapPin, Github } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import ScrollReveal from '../utils/ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="text-center px-4 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Get In Touch" subtitle="Contact Me" />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Say Hello */}
            <div className="card p-6 flex items-start">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="ml-4 text-left">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Say Hello</h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  <a
                    href="mailto:khushi.s.meti@gmail.com"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    khushi.s.meti@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Connect on LinkedIn */}
            <div className="card p-6 flex items-start">
              <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="ml-4 text-left">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Connect on LinkedIn</h3>
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

            {/* Currently in */}
            <div className="card p-6 flex items-start">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="ml-4 text-left">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Currently in</h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">Bangalore, India</p>
              </div>
            </div>

            {/* GitHub */}
            <div className="card p-6 flex items-start">
              <Github className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="ml-4 text-left">
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
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;