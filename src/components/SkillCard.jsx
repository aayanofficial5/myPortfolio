import { motion } from "framer-motion";
import LanguageIcon from "./LanguageIcon";

const SkillCard = ({ language }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center gap-3  rounded-xl text-center  cursor-pointer group"
    >
      <LanguageIcon language={language} />
      <p className="text-base font-medium dark:text-primary">{language.name}</p>

      {/* Tooltip */}
      <div
        className="group-hover:block hidden absolute top-full 
              dark:bg-accent dark:text-primary p-2 rounded shadow-lg border-1 w-48 text-sm 
                opacity-0 
                group-hover:opacity-100 "
      >
        <p>{language.desc}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
