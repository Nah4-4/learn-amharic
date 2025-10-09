import { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const getSystemTheme = () =>
    window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
  
  const [theme, setTheme] = useState(getSystemTheme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <header>
        <Link to={"/"}>Learn Amharic</Link>
        <div className="options">
          <button onClick={toggleTheme}>
            {" "}
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
