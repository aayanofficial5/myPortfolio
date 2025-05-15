import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated form submission
    if (formData.name && formData.email && formData.message) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-6 bg-white dark:bg-primary p-8 rounded-lg shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded border dark:bg-secondary dark:border-gray-700 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded border dark:bg-secondary dark:border-gray-700 dark:text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded border dark:bg-secondary dark:border-gray-700 dark:text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-accent text-white py-3 rounded hover:opacity-90 transition-all"
          >
            Send Message
          </button>
          {status === 'success' && (
            <p className="text-green-600 dark:text-green-400">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 dark:text-red-400">Please fill in all fields.</p>
          )}
        </form>

        <div className="flex justify-center gap-6 mt-10 text-accent">
          <a href="mailto:your.email@example.com" aria-label="Email">
            <Mail size={24} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
