import { skills } from '../data/personalInfo';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, items }) => (
  <div className="card">
    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
      {title}
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-2"
        >
          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
          <span className="text-gray-700 dark:text-gray-300">{skill}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="section-title">Skills & Expertise</h1>
        
        <div className="grid gap-8">
          <SkillCategory title="Programming Languages" items={skills.languages} />
          <SkillCategory title="Frameworks & Libraries" items={skills.frameworks} />
          <SkillCategory title="Tools & Technologies" items={skills.tools} />
          <SkillCategory title="Soft Skills" items={skills.softSkills} />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
