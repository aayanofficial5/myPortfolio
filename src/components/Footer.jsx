import { ArrowUp } from 'lucide-react';
import { portfolioInfo } from '../data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background dark:bg-background text-center py-4 border-t dark:border-secondary/50 relative">
      <p className="text-sm text-primary dark:text-primary">
        © {new Date().getFullYear()} {portfolioInfo.fullName}. All rights reserved.
      </p>

      <button
        onClick={scrollToTop}
        className="absolute right-7 bottom-2 hover:bg-accent hover:dark:bg-accent text-white p-2 rounded-full shadow-md hover:scale-105 bg-secondary dark:bg-secondary transition-transform 
        cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
