import { motion } from 'framer-motion';
import LanguageIcon from '../components/LanguageIcon';
import { languages } from '../data';
import SkillCard from '../components/SkillCard';
const Skills = () => {
  return (
    <section
  id="skills"
  className="flex flex-col justify-center bg-background dark:bg-background h-[70vh] w-full border-t dark:border-secondary/50 overflow-visible"
>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto flex flex-col gap-5 overflow-visible"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-primary mb-6">
      Skills
    </h2>

    <div className="flex gap-4 flex-wrap max-w-[90vw] relative z-0 overflow-visible">

      {languages.map((language, index) => (
        <SkillCard language={language} key={index} />
      ))}
    </div>
  </motion.div>
</section>

  );
};

export default Skills;