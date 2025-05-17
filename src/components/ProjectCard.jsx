import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-background rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform hover:scale-[1.01]"
      whileHover={{ y: -4 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover border-b border-muted"
        loading="lazy"
      />

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-2xl font-bold text-foreground dark:text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground dark:text-muted-foreground text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/70 transition text-sm font-medium"
          >
            <FaGithub size={18} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-medium transition"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
