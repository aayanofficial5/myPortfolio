import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

import { timeline } from '../data';

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-6 md:px-20 bg-background dark:bg-background border-t dark:border-secondary/50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary dark:text-primary">
          Resume & Timeline
        </h2>

        <div className="relative border-l-4 border-secondary dark:border-secondary/60">
          {timeline.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute -left-4.5 bg-secondary rounded-full mt-11 p-2">
                {item.type === 'work' ? (
                  <Briefcase className="text-primary w-4 h-4" />
                ) : (
                  <GraduationCap className="text-primary w-4 h-4" />
                )}
              </span>
              <div className="bg-accent dark:bg-accent p-5 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-primary dark:text-primary opacity-90">
                  {item.title}
                </h3>
                <p className="text-sm text-primary dark:text-primary opacity-60 mb-2">{item.date}</p>
                <p className="text-gray-700 dark:text-ternary opacity-60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
