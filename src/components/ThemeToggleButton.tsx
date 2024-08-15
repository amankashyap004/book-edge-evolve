import React from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "./context/ThemeProvider";

const ThemeToggleButton: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="cursor-pointer text-lg">
      {isDarkMode ? <BsSunFill /> : <BsFillMoonStarsFill />}
    </button>
  );
};

export default ThemeToggleButton;
