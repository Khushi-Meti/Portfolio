import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Contact info */}
          <div className="md:col-span-1 space-y-6">
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
          </div>
          
          {/* Contact form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-colors ${
                    isSubmitting
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-100 border border-green-200 text-green-700 rounded-lg">
                  Your message has been sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;