import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { navItems } from '../utils/constants';

export default function Navbar({ scrollY }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = '/files/Himesh_Kaveesha_CV.pdf';
    a.download = 'Himesh_Kaveesha_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
              Himesh Kaveesha
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button
                onClick={handleDownloadCV}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
              >
                <Download size={16} />
                <span>CV</span>
              </button>
            </div>

            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-20 md:hidden">
          <div className="flex flex-col space-y-6 px-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 text-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white px-6 py-3 rounded-lg mt-4"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}