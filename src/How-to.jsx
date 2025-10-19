import "./how-to.css";
export default function HowToUse() {
  return (
    <div className="how-to-use">
      <h1>How to Use</h1>

      <p>
        Learn Amharic in a fun and simple way by guessing letters and checking
        their pronunciation!
      </p>

      <section>
        <h2>🕹️ How to Play</h2>
        <ol>
          <li><strong>Start the Game:</strong> Press <em>Play</em> to begin. A random Amharic letter appears.</li>
          <li><strong>Guess the Letter:</strong> Think of how to say the letter, then press <span>Show Answer</span>.</li>
          <li><strong>Check Yourself:</strong> If you were right, click <span>Correct</span> to earn a point. If not, click <span>Wrong</span>.</li>
          <li><strong>Next Letter:</strong> After checking yourself Press <span>Next</span> to move on. Each round ends after your chosen number of letters.</li>
        </ol>
      </section>

      <section>
        <h2>⚙️ Settings</h2>
        <p>
          Click the settings icon on the top right to choose how many letters
          appear per round. Letters don’t repeat within the same session.
        </p>
      </section>

      <section>
        <h2>📊 End of Round</h2>
        <p>
          When the round ends, you’ll see all the letters you got wrong. Review
          them and either <span>Continue</span> or <span>Return Home</span>.
        </p>
      </section>

      <section>
        <h2>💡 Tips</h2>
        <ul>
          <li>Say each letter out loud before revealing the answer.</li>
          <li>Focus on the wrong ones after each round.</li>
          <li>Play a few short rounds every day to memorize faster.</li>
        </ul>
      </section>

      {/* <p className="footer-note">📱 Works on any device — no downloads needed!</p> */}
    </div>
  );
}
