import { motion } from "framer-motion";
import { CTAButton } from "../components/CTAButton";
import profile from "../assets/images/profile.png";
import { IoMdDownload } from "react-icons/io";
import { portfolioInfo } from "../data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadedItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 0.6, y: 0 },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[100vh] flex flex-col md:flex-row items-center justify-around gap-10 p-6 md:p-20 bg-background dark:bg-background"
    >
      <div className="">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 max-w-[40vw]"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold text-primary dark:text-primary"
          >
            Hi, I'm <span className="text-secondary">{portfolioInfo.fullName}</span>
          </motion.h1>
          <motion.p
            variants={fadedItem}
            className="text-lg text-primary dark:text-primary"
          >{portfolioInfo.description}
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-3">
            <CTAButton link="#projects" text="View Projects" />
            <CTAButton
              link="/LatestResume.pdf"
              download={true}
              icon={IoMdDownload}
              text="Download Resume"
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="flex justify-center"
      >
        <motion.img
          src={profile}
          alt="profile"
          className="rounded-full w-72 h-72 object-cover shadow-xl transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
