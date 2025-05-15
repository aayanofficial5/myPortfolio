import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    title: 'Frontend Developer – XYZ Corp',
    date: '2023 – Present',
    description: 'Developed modern UIs using React, optimized performance, and collaborated on cross-functional teams.',
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science',
    date: '2019 – 2023',
    description: 'Graduated with honors, focused on web technologies and software development.',
  },
  // Add more entries as needed
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-6 md:px-20 bg-white dark:bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Resume & Timeline
        </h2>

        <div className="relative border-l-4 border-accent dark:border-accent/60">
          {timeline.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute -left-3 top-1.5 bg-accent rounded-full p-1.5">
                {item.type === 'work' ? (
                  <Briefcase className="text-white w-4 h-4" />
                ) : (
                  <GraduationCap className="text-white w-4 h-4" />
                )}
              </span>
              <div className="bg-gray-50 dark:bg-primary p-5 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{item.date}</p>
                <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/resume.pdf" // Replace with actual resume path
            download
            className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-200"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
