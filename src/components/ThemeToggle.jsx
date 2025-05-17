import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { MdDarkMode } from 'react-icons/md';
import { BsSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 text-primary pl-[4px] rounded-full shadow-lg transition-all duration-300 cursor-pointer mt-auto"
      aria-label="Toggle Mode"
      title="Toggle Mode"
    >
      {theme === 'dark' ? <MdDarkMode size={30} />:<BsSunFill className='text-gray-500' size={30} />}
      
    </button>
  );
};

export default ThemeToggle;
