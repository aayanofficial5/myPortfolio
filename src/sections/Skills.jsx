import { motion } from 'framer-motion';
import LanguageIcon from '../components/LanguageIcon';
import { languages } from '../data';
const Skills = () => {
  return (
    <section id="skills" className="flex flex-col justify-center bg-background dark:bg-background h-[70vh] w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col gap-5"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">Skills</h2>
        <div className="flex gap-4 flex-wrap max-w-[90vw]">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 px-8 py-3 rounded-xl shadow-md text-center bg-accent cursor-pointer"
            >
                <LanguageIcon
              key={index}
              language={language}
            />
              <p className="text-sm font-medium text-gray-800 dark:text-white">{language.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;