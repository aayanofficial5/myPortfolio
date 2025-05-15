export const CTAButton = ({ href, label }) => {
  return (
    <a
      href={href}
      className="inline-block px-6 py-3 bg-accent text-white rounded-2xl font-semibold shadow-md hover:bg-secondary transition-colors"
    >
      {label}
    </a>
  );
};

// import { motion } from 'framer-motion';

// export const CTAButton = ({ text, link, icon: Icon, download = false }) => {
//   return (
//     <motion.a
//       href={link}
//       download={download}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium shadow-md transition-transform"
//     >
//       {text}
//       {Icon && <Icon size={18} />}
//     </motion.a>
//   );
// };
