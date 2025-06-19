import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getImagePath, lazyLoadImage } from '../utils/imageUtils';

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      try {
        await lazyLoadImage(getImagePath(project.imageUrl));
        setImageLoaded(true);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };
    loadImage();
  }, [project.imageUrl]);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card overflow-hidden"
    >
      <div className="relative aspect-video mb-4 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={getImagePath(project.imageUrl)}
          alt={project.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {project.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full dark:bg-primary-900 dark:text-primary-300"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">              
                {/* <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary text-sm"
                >
                  Live Demo →
                </a> */}
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary text-sm"
                >
                  GitHub →
                </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
