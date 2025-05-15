import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, image, github, demo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-primary rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline flex items-center gap-2"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline flex items-center gap-2"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
