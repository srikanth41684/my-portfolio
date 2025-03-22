import { darkTheme, lightTheme } from "@/styles/themeStyles";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [themeStyles, setThemeStyles] = useState(lightTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "light") {
      setThemeStyles(lightTheme);
    } else {
      setThemeStyles(darkTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
