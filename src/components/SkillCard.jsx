import { motion } from 'framer-motion';

const SkillCard = ({ icon: Icon, name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center p-5 bg-white dark:bg-primary rounded-lg shadow text-center"
    >
      <Icon size={32} className="text-accent mb-2" />
      <p className="text-gray-800 dark:text-white font-medium">{name}</p>
    </motion.div>
  );
};

export default SkillCard;
