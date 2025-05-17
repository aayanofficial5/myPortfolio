import { motion } from 'framer-motion';
import { Trophy, CheckCircle, Star } from 'lucide-react';

const achievements = [
  {
    icon: (
      // Replace this with your actual badge image if you have one
      <a href="https://api.badgr.io/public/assertions/25g_qsqkRo2bKLhgtxG69w?identity__email=aayanofficial5%40gmail.com"><img
        src="/postmanBadge.png"
        alt="Postman Certification Badge"
        className="w-50 h-50"
      /></a>
    ),
    title: 'Postman API Fundamentals Expert',
    description: 'Received certification for Postman API Fundamentals Expert',
  },
  // {
  //   icon: <CheckCircle size={28} />,
  //   title: 'Coding Problems on Various Platforms',
  //   description:
  //     'Solved coding problems on LeetCode, GeeksforGeeks, CodingNinja, and more for placement prep',
  // },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="bg-accent dark:bg-accent min-h-screen w-full flex justify-center border-t dark:border-secondary/50 py-10 px-6 md:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full flex flex-col items-center gap-12"
      >
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-4xl md:text-4xl font-extrabold text-primary dark:text-primary tracking-tight">
            Achievements
          </h2>
          <p className="text-base md:text-lg text-primary dark:text-primary opacity-70 text-center max-w-2xl">
            Explore some of my key milestones, certifications, and recognitions that reflect my commitment to continuous learning and excellence in technology.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
              className="flex flex-col items-center gap-3 py-6 px-4 bg-secondary/70 border border-background rounded-2xl shadow-lg flex-1 min-w-[260px] max-w-xs transition-all duration-200"
            >
              <div className="mb-2">{item.icon}</div>
              <h4 className="text-lg font-semibold text-primary dark:text-primary">{item.title}</h4>
              <p className="text-sm text-muted dark:text-primary/80 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
