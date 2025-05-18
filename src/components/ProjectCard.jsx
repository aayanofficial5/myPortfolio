import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-background/45 rounded-2xl shadow-2xl overflow-hidden flex flex-col group transition-transform duration-300 hover:scale-[1.02]"
      whileHover={{ y: -6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Title Overlay */}
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm z-20 flex items-center justify-center p-4"
        initial={{ opacity: 1 }}
        animate={
          isHovered
            ? { opacity: 0, y: -230, scale: 1 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-primary dark:text-primary text-center">
          {project.title}
        </h3>
      </motion.div>

      {/* Project Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="aspect-auto border-b border-accent transition duration-500"
        loading="lazy"
        initial={{ scale: 1 }}
        animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Project Details */}
      <motion.div
        className="p-4 flex flex-col justify-between flex-1 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: isHovered ? 0.1 : 0 }}
      >
        <div className="space-y-2">
          {/* Smooth Card Title Transition */}
          <motion.h3
            className="text-xl md:text-2xl font-bold text-primary dark:text-primary"
            initial={{ opacity: 0, y: 10 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {project.title}
          </motion.h3>

          <p className="text-primary/80 text-sm md:text-base leading-relaxed">
            {project.description}
          </p>

          {project.tags && (
            <div className="flex flex-row flex-wrap items-center gap-2">
              <span className="text-xs md:text-sm font-semibold text-ternary/70">
                Tech Stack Used :
              </span>

              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[9px] md:text-xs capitalize bg-background text-primary border border-secondary/50 px-2 py-[1.5px] md:py-1 rounded-full tracking-wide shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent/70 transition text-sm text-primary font-semibold shadow-md"
          >
            <FaGithub size={18} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-background font-semibold text-sm transition shadow-md"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
