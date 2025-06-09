import { education } from '../data/personalInfo';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="section-title">Education</h1>
        
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {edu.school}
                  </h2>
                  <h3 className="text-lg text-primary-600 dark:text-primary-400 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full px-4 py-2 text-sm font-medium">
                    {edu.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
