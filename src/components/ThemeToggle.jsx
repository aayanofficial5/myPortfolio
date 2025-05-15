import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-2 left-5 bg-accent dark:bg-accent text-primary dark:text-primary p-2 rounded-full shadow-lg z-50 transition-colors cursor-pointer"
      aria-label="Toggle Mode"
      title="Toggle Mode"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
