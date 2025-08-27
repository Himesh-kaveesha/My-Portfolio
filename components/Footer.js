import { Github, Linkedin, Mail } from 'lucide-react';
import { navItems } from '../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-4">
              Himesh Kaveesha
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Frontend Developer & UI/UX Designer passionate about creating beautiful, functional digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Himesh-kaveesha"
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group"
              >
                <Github className="w-5 h-5 text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/in/himesh-kaveesha"
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              </a>
              <a
                href="mailto:himeshkaveesha984@gmail.com"
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © 2025 Himesh Kaveesha. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            
            <span>in Sri Lanka</span>
            <span>🇱🇰</span>
          </div>
        </div>
      </div>
    </footer>
  );
}