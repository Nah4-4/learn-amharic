import { useState } from "react";
import "./setting.css";

export default function Setting({ open, onClose, onSave }) {
  const TOTAL = 238;
  const PRESETS = [10, 25, 50, 100, 150, TOTAL];

  const [volume, setVolume] = useState(() => {
    const stored = localStorage.getItem("volume");
    return stored !== null ? Number(stored) : 50;
  });
  const [letters, setLetters] = useState(() => {
    return Number(localStorage.getItem("letters")) || 25;
  });

  function applyPreset(p) {
    setLetters(p);
  }

  function handleSave() {
    localStorage.setItem("volume", volume);
    localStorage.setItem("letters", letters);
    onSave({ volume, letters });
    onClose();
  }

  return (
    <>
      <div className="backdrop" onClick={onClose} />
      <dialog open={open} className="modal">
        <header className="modal-header">
          <h2>Settings</h2>
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close settings"
          >
            ×
          </button>
        </header>

        <div className="modal-body">
          {/* <label className="field">
            <span>Language</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label="Language"
            >
              <option value="am">Amharic</option>
              <option value="en">English</option>
            </select>
          </label> */}
          <label className="field">
            <span>Volume</span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
            {volume}
          </label>

          <div className="field">
            <span>Number of letters — {TOTAL} available</span>
            <div
              style={{
                display: "flex",
                gap: 15,
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {PRESETS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => applyPreset(p)}
                  style={{
                    padding: "6px 10px",
                    border:
                      p === letters ? "2px solid #007bff" : "1px solid #ccc",
                    borderRadius: 6,
                    background: p === letters ? "#ebedefff" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  {p === TOTAL ? "All" : p}
                </button>
              ))}
            </div>
          </div>

          <div className="help">
            Use these options to change the audio volume and number of questions
            (Changing number of questions resets progress).
          </div>
        </div>

        <footer className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </footer>
      </dialog>
    </>
  );
}
