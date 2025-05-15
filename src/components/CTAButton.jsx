
import { motion } from 'framer-motion';

export const CTAButton = ({ text, link, icon: Icon, download = false }) => {
  return (
    <motion.a
      href={link}
      download={download}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 border-3 dark:border-accent text-primary dark:text-primary px-5 py-3 font-medium shadow-md transition-transform w-fit hover:bg-secondary hover:border-secondary ease-in"
    >
      {text}
      {Icon && <Icon size={20} />}
    </motion.a>
  );
};
