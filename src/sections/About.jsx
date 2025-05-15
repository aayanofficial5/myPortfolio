import { motion } from 'framer-motion';
import { Code, Laptop, Zap } from 'lucide-react';
import { portfolioInfo } from '../data';

const tech = [
  { icon: <Code size={28} />, name: 'JavaScript' },
  { icon: <Laptop size={28} />, name: 'React' },
  { icon: <Zap size={28} />, name: 'Tailwind CSS' },
];

const About = () => {
  return (
    <section id="about" className="bg-accent dark:bg-accent h-[50vh] w-full flex justify-center items-center min-h-full border-t dark:border-secondary/50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl flex flex-col items-center gap-10"
      >
        <div className='flex flex-col items-center gap-2'>
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary">About Me</h2>
        <p className="text-primary dark:text-primary opacity-60 text-lg">{portfolioInfo.aboutMe}
        </p>
        </div>
        <div className="flex flex-row gap-10 w-full">
          {tech.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 py-3 bg-secondary dark:bg-secondary rounded-xl shadow-md flex-1"
            >
              <div className="text-primary dark:text-primary">{tech.icon}</div>
              <p className="text-sm font-medium dark:text-primary">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
