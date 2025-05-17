import React, { useEffect, useState } from "react";
import { navLinks } from "../data";
import ThemeToggle from "./ThemeToggle";

const SideBar = () => {
  const [pathName, setPathName] = useState(window.location.hash.slice(1)); // remove '#' from the hash

  useEffect(() => {
    const handleHashChange = () => {
      setPathName(window.location.hash.slice(1)); // update on hash change
    };

    // Listen for changes in the hash (e.g., when user scrolls or clicks nav)
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="hidden fixed top-0 bg-blue-950 text-center py-4 h-[100vh] w-fit lg:flex flex-col items-center text-white font-medium">
      {navLinks.map(({ name, url, icon }) => (
        <a
          key={name}
          href={url}
          aria-label={name}
          className={`text-base px-4 py-3 flex flex-col items-center justify-center opacity-80 hover:opacity-100 w-full ${
            pathName === url.slice(1)
              ? "bg-gray-700 border-l-2 opacity-100"
              : ""
          }`}
        >
          <div className="text-[25px]">{icon}</div>
          {name.split("")[0].toUpperCase() + name.slice(1)}
        </a>
      ))}
      <ThemeToggle />
    </div>
  );
};

export default SideBar;
