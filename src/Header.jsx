import { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import sunIcon from "./assets/day.png";
import moonIcon from "./assets/night.png";

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
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {" "}
            {theme === "light" ? (
              <img src={moonIcon} alt="dark mode" style={{ width: 25, height: 25,marginTop: 3 }} />
            ) : (
              <img src={sunIcon} alt="light mode" style={{ width: 25, height: 25, marginTop: 3 }} />
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
