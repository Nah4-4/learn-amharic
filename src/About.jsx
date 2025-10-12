import "./About.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-page">
      <main className="about-content">
        <h2>About This App</h2>
        <p>
          Learn Amharic is an app made to help
          you practice and memorize the Amharic alphabet and vocabulary. Each
          round shows you a random character — test yourself and track your
          score as you improve!
        </p>
        <p>
            Learn Amharic letters and their pronunciations in English,
            keep practicing until you've mastered all the letters.
        </p>
         <p className="credits">
          Created by <span>Nahom Kiflu</span><br />
        </p>

        <div className="social-links">
          <a
            href="https://github.com/Nah4-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nahom-kiflu-50b4472b5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:nahokifl@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </main>
    </div>
  );
}
