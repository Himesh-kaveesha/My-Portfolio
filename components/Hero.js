import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero({ scrollY }) {
  const [displayedName, setDisplayedName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const fullName = 'Himesh Kaveesha';

  useEffect(() => {
    let timer;
    
    if (isDeleting) {
      if (currentIndex > 0) {
        timer = setTimeout(() => {
          setDisplayedName(fullName.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
          setTypingSpeed(50);
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setTypingSpeed(100);
      }
    } else {
      if (currentIndex < fullName.length) {
        timer = setTimeout(() => {
          setDisplayedName(fullName.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullName, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 mt-12 gap-12 items-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 mt-36 rounded-full text-sm font-medium animate-pulse-gentle">
              🇱🇰 Based in Sri Lanka
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
              {displayedName}
              <span className="typing-cursor">|</span>
            </span>
          </h1>
          <div className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            <span className="font-semibold">Full Stack Developer</span> & 
            <span className="font-semibold"> UI/UX Designer</span> & 
            <span className="font-semibold"> Business Analyst</span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Motivated Software Engineering student with hands-on experience in full stack development, business analysis , and UI/UX design. Skilled in building scalable web and mobile applications using React, React Native, backend technologies, and user-centered design practices. Currently pursuing a BSc in Computer Science at the University of Colombo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}
              className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
            >
              View My Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 font-medium"
            >
              Let's Connect
            </button>
          </div>
        </div>

        <div className="relative animate-slide-in-right">
          <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 rounded-full animate-float"></div>
            <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/images/222Profilepic.jpg"
                alt="Himesh Kaveesha"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
              <div className="flex space-x-3">
                <a href="https://github.com/Himesh-kaveesha" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/himesh-kaveesha" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .typing-cursor {
          animation: blink 1s infinite;
          margin-left: 2px;
          color: inherit;
        }
      `}</style>
    </section>
  );
}
