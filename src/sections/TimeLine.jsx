import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

import { timeline } from '../data';
import TimelineItem from './../components/TimelineItem';

const Timeline = () => {
  return (
    <section id="timeline" className="py-10 px-10 md:px-20 bg-background dark:bg-background border-t dark:border-secondary/50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary dark:text-primary">
          Timeline
        </h2>

        <div className="relative border-l-4 border-secondary dark:border-secondary/60 w-full">
          {timeline.map((item, index) => (
            <TimelineItem item={item} index={index}/>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
