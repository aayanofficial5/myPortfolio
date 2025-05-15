import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-primary text-center py-6 border-t dark:border-gray-700 relative">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>

      <button
        onClick={scrollToTop}
        className="absolute right-4 bottom-4 bg-accent text-white p-2 rounded-full shadow-md hover:scale-105 transition-transform"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
