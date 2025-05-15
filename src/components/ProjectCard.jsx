import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {FaGithub} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-background dark:bg-background rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-primary dark:text-primary opacity-60 mt-2">{project.description}</p>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary dark:text-secondary flex items-center gap-2"
                  >
                    <FaGithub size={25} />GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary dark:text-secondary  flex items-center gap-2"
                  >
                    <ExternalLink size={25} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
  );
};

export default ProjectCard;
