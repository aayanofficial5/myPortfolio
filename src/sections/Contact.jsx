import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const onSubmit = (data) => {
    if (data.name && data.email && data.message) {
      setStatus('success');
      reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-accent dark:bg-accent border-t dark:border-secondary/50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary dark:text-primary">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 bg-background dark:bg-background p-8 rounded-lg shadow-md"
        >
          <input
            type="text"
            placeholder="Your Name"
            {...register('name', { required: true })}
            className="p-3 rounded border-3 border-accent dark:border-accent text-primary dark:text-primary"
          />
          {errors.name && <span className="text-red-500">Name is required</span>}

          <input
            type="email"
            placeholder="Your Email"
            {...register('email', { required: true })}
            className="p-3 rounded border-3 border-accent dark:border-accent text-primary dark:text-primary"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}

          <textarea
            placeholder="Your Message"
            rows="5"
            {...register('message', { required: true })}
            className="p-3 rounded border-3 border-accent dark:border-accent text-primary dark:text-primary"
          ></textarea>
          {errors.message && <span className="text-red-500">Message is required</span>}

          <button
            type="submit"
            className="bg-accent dark:bg-accent text-primary py-3 rounded-lg shadow-lg hover:opacity-90 transition-all
            flex items-center gap-4 text-lg justify-center hover:scale-97 hover:bg-secondary cursor-pointer"
          >
            Send Message
            <MdSend size={30}/>
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-10 text-primary">
          <a href="mailto:your.email@example.com" aria-label="Email">
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
