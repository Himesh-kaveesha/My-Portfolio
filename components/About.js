import { GraduationCap, Briefcase, Award, User } from 'lucide-react';
import { certifications, softSkills } from '../utils/constants';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a motivated Software Engineering student at the University of Colombo School of Computing, specializing in frontend development and UI/UX design. With hands-on experience in React, React Native, and modern design tools, I focus on creating clean, interactive, and cross-platform solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My passion lies in building responsive web and mobile applications that solve real-world problems, particularly in sectors like tourism and healthcare. I believe in continuous learning and am currently pursuing Google UX Design certification to enhance my design skills.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-blue-600 mb-1">2026</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Expected Graduation</div>
              </div>
              <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <Briefcase className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-teal-600 mb-1">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Major Projects</div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                  Education
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">BSc in Computer Science</div>
                    <div className="text-gray-600 dark:text-gray-300">University of Colombo School of Computing</div>
                    <div className="text-sm text-blue-600">Expected 2026</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-600 via-green-600 to-blue-600 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-teal-600" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{cert.name}</div>
                        <div className="text-gray-600 dark:text-gray-300">{cert.provider}</div>
                      </div>
                      <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-full">
                        {cert.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reference Section */}
            <div className="bg-gradient-to-br from-green-600 via-blue-600 to-teal-600 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <User className="w-6 h-6 mr-2 text-green-600" />
                  Reference
                </h3>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 dark:text-white">Janaka Dissanayaka</div>
                  <div className="text-gray-600 dark:text-gray-300">Civil Engineer (SWA)</div>
                  <a href="tel:+94702108663" className="text-blue-600 hover:text-blue-700 transition-colors">
                    (+94) 70 210 8663
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}