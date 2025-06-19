import { personalInfo } from '../data/personalInfo';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="section-title">About Me</h1>
        
        <div className="grid gap-8">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Who I Am
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              {personalInfo.bio}
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Career Goals
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am passionate about creating innovative solutions that make a positive impact.
              My goal is to continue growing as a developer while contributing to meaningful projects
              that push the boundaries of what's possible in web development.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Interests & Hobbies
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.interests && personalInfo.interests.map((interest, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <span className="text-primary-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
