import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import project1 from '../assets/images/project1.png'; // replace with your image

const projects = [
  {
    title: 'Portfolio Website',
    image: project1,
    description: 'A sleek, modern personal portfolio built with React and Tailwind CSS.',
    github: 'https://github.com/aayanofficial5/portfolio',
    demo: 'https://yourportfolio.com',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-accent dark:bg-accent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
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
                    className="text-secondary dark:text-secondary hover:underline flex items-center gap-2"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary dark:text-secondary hover:underline flex items-center gap-2"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
