import { Palette, Code, Server } from 'lucide-react';
import { skills } from '../utils/constants';

const SkillBar = ({ skill, delay }) => (
  <div className="mb-6" style={{ animationDelay: `${delay}ms` }}>
    <div className="flex justify-between mb-2">
      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
      <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 rounded-full transform origin-left transition-transform duration-1000 ease-out"
        style={{ 
          transform: `scaleX(${skill.level / 100})`,
          transitionDelay: `${delay}ms`
        }}
      />
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A blend of frontend development expertise and UI/UX design creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                <Palette className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Design Tools</h3>
                <p className="text-gray-600 dark:text-gray-300">Creating beautiful interfaces</p>
              </div>
            </div>
            {skills.design.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 200} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-8">
              <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-lg mr-4">
                <Code className="w-8 h-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Frontend</h3>
                <p className="text-gray-600 dark:text-gray-300">Building interactive apps</p>
              </div>
            </div>
            {skills.frontend.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 200 + 1000} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-8">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg mr-4">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tools</h3>
                <p className="text-gray-600 dark:text-gray-300">Development workflow</p>
              </div>
            </div>
            {skills.tools.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 200 + 2000} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}