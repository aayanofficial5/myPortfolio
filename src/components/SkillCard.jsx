import { motion } from 'framer-motion';
import LanguageIcon from './LanguageIcon';

const SkillCard = ({ language }) => {
  return (
    <motion.div
  whileHover={{ scale: 1.05 }}
  className="flex flex-col items-center gap-3 px-8 py-3 rounded-xl shadow-md text-center dark:bg-accent cursor-pointer relative z-0 group"
>

      <LanguageIcon language={language} />
      <p className="text-sm font-medium dark:text-primary">{language.name}</p>

      {/* Tooltip */}
     <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
                bg-yellow-300 text-black p-2 rounded shadow-lg w-48 text-sm 
                z-[999] opacity-0 pointer-events-none 
                group-hover:opacity-100 group-hover:pointer-events-auto 
                transition-opacity duration-300">
  <p>{language.desc}</p>
</div>

    </motion.div>
  );
};

export default SkillCard;
