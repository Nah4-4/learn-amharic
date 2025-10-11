import { useState } from "react";
import "./Game.css";
import Setting from "./Setting";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function Game() {
  //*add multiple choice option
  const data = [
    { key: 1, am: "ሀ", en: "ha" },
    { key: 2, am: "ሁ", en: "hu" },
    { key: 3, am: "ሂ", en: "hi" },
    { key: 4, am: "ሃ", en: "ha" },
    { key: 5, am: "ሄ", en: "hēa" },
    { key: 6, am: "ህ", en: "h/hi" },
    { key: 7, am: "ሆ", en: "ho" },
    { key: 8, am: "ለ", en: "le" },
    { key: 9, am: "ሉ", en: "lu" },
    { key: 10, am: "ሊ", en: "li" },
    { key: 11, am: "ላ", en: "la" },
    { key: 12, am: "ሌ", en: "lēa" },
    { key: 13, am: "ል", en: "l/li" },
    { key: 14, am: "ሎ", en: "lo" },
    { key: 15, am: "ሐ", en: "ḥa" },
    { key: 16, am: "ሑ", en: "ḥu" },
    { key: 17, am: "ሒ", en: "ḥi" },
    { key: 18, am: "ሓ", en: "ḥa" },
    { key: 19, am: "ሔ", en: "ḥēa" },
    { key: 20, am: "ሕ", en: "ḥ/ḥi" },
    { key: 21, am: "ሖ", en: "ḥo" },
    { key: 22, am: "መ", en: "me" },
    { key: 23, am: "ሙ", en: "mu" },
    { key: 24, am: "ሚ", en: "mi" },
    { key: 25, am: "ማ", en: "ma" },
    { key: 26, am: "ሜ", en: "mēa" },
    { key: 27, am: "ም", en: "m/mi" },
    { key: 28, am: "ሞ", en: "mo" },
    { key: 29, am: "ሠ", en: "śe" },
    { key: 30, am: "ሡ", en: "śu" },
    { key: 31, am: "ሢ", en: "śi" },
    { key: 32, am: "ሣ", en: "śa" },
    { key: 33, am: "ሤ", en: "śēa" },
    { key: 34, am: "ሥ", en: "ś/śi" },
    { key: 35, am: "ሦ", en: "śo" },
    { key: 36, am: "ረ", en: "re" },
    { key: 37, am: "ሩ", en: "ru" },
    { key: 38, am: "ሪ", en: "ri" },
    { key: 39, am: "ራ", en: "ra" },
    { key: 40, am: "ሬ", en: "rēa" },
    { key: 41, am: "ር", en: "r/ri" },
    { key: 42, am: "ሮ", en: "ro" },
    { key: 43, am: "ሰ", en: "se" },
    { key: 44, am: "ሱ", en: "su" },
    { key: 45, am: "ሲ", en: "si" },
    { key: 46, am: "ሳ", en: "sa" },
    { key: 47, am: "ሴ", en: "sēa" },
    { key: 48, am: "ስ", en: "s/si" },
    { key: 49, am: "ሶ", en: "so" },
    { key: 50, am: "ሸ", en: "she" },
    { key: 51, am: "ሹ", en: "shu" },
    { key: 52, am: "ሺ", en: "shi" },
    { key: 53, am: "ሻ", en: "sha" },
    { key: 54, am: "ሼ", en: "shie" },
    { key: 55, am: "ሽ", en: "sh" },
    { key: 56, am: "ሾ", en: "sho" },
    { key: 57, am: "ቀ", en: "qe" },
    { key: 58, am: "ቁ", en: "qu" },
    { key: 59, am: "ቂ", en: "qi" },
    { key: 60, am: "ቃ", en: "qa" },
    { key: 61, am: "ቄ", en: "qēa" },
    { key: 62, am: "ቅ", en: "qie" },
    { key: 63, am: "ቆ", en: "qo" },
    { key: 64, am: "በ", en: "be" },
    { key: 65, am: "ቡ", en: "bu" },
    { key: 66, am: "ቢ", en: "bi" },
    { key: 67, am: "ባ", en: "ba" },
    { key: 68, am: "ቤ", en: "bēa" },
    { key: 69, am: "ብ", en: "b/bi" },
    { key: 70, am: "ቦ", en: "bo" },
    { key: 71, am: "ተ", en: "te" },
    { key: 72, am: "ቱ", en: "tu" },
    { key: 73, am: "ቲ", en: "ti" },
    { key: 74, am: "ታ", en: "ta" },
    { key: 75, am: "ቴ", en: "tēa" },
    { key: 76, am: "ት", en: "t/ti" },
    { key: 77, am: "ቶ", en: "to" },
    { key: 78, am: "ቸ", en: "che" },
    { key: 79, am: "ቹ", en: "chu" },
    { key: 80, am: "ቺ", en: "chi" },
    { key: 81, am: "ቻ", en: "cha" },
    { key: 82, am: "ቼ", en: "chēa" },
    { key: 83, am: "ች", en: "ch/chi" },
    { key: 84, am: "ቾ", en: "cho" },
    { key: 85, am: "ኀ", en: "ḫa" },
    { key: 86, am: "ኁ", en: "ḫu" },
    { key: 87, am: "ኂ", en: "ḫi" },
    { key: 88, am: "ኃ", en: "ḫa" },
    { key: 89, am: "ኄ", en: "ḫēa" },
    { key: 90, am: "ኅ", en: "ḫ/ḫi" },
    { key: 91, am: "ሖ", en: "ḫo" },
    { key: 92, am: "ነ", en: "ne" },
    { key: 93, am: "ኑ", en: "nu" },
    { key: 94, am: "ኒ", en: "ni" },
    { key: 95, am: "ና", en: "na" },
    { key: 96, am: "ኔ", en: "nēa" },
    { key: 97, am: "ን", en: "n/ni" },
    { key: 98, am: "ኖ", en: "no" },
    { key: 99, am: "ኘ", en: "ñe" },
    { key: 100, am: "ኙ", en: "ñu" },
    { key: 101, am: "ኚ", en: "ñi" },
    { key: 102, am: "ኛ", en: "ña" },
    { key: 103, am: "ኜ", en: "ñēa" },
    { key: 104, am: "ኝ", en: "ñ/ñi" },
    { key: 105, am: "ኞ", en: "ño" },
    { key: 106, am: "አ", en: "'a" },
    { key: 107, am: "ኡ", en: "'u" },
    { key: 108, am: "ኢ", en: "'ei" },
    { key: 109, am: "ኣ", en: "'a" },
    { key: 110, am: "ኤ", en: "'aē" },
    { key: 111, am: "እ", en: "'i" },
    { key: 112, am: "ኦ", en: "'o" },
    { key: 113, am: "ከ", en: "ke" },
    { key: 114, am: "ኩ", en: "ku" },
    { key: 115, am: "ኪ", en: "ki" },
    { key: 116, am: "ካ", en: "ka" },
    { key: 117, am: "ኬ", en: "kēa" },
    { key: 118, am: "ክ", en: "k/ki" },
    { key: 119, am: "ኮ", en: "ko" },
    { key: 120, am: "ኸ", en: "khe" },
    { key: 121, am: "ኹ", en: "khu" },
    { key: 122, am: "ኺ", en: "khi" },
    { key: 123, am: "ኻ", en: "kha" },
    { key: 124, am: "ኼ", en: "khēa" },
    { key: 125, am: "ኽ", en: "kh/khi" },
    { key: 126, am: "ኾ", en: "kho" },
    { key: 127, am: "ወ", en: "we" },
    { key: 128, am: "ዉ", en: "wu" },
    { key: 129, am: "ዊ", en: "wi" },
    { key: 130, am: "ዋ", en: "wa" },
    { key: 131, am: "ዌ", en: "wēa" },
    { key: 132, am: "ው", en: "w/wi" },
    { key: 133, am: "ዎ", en: "wo" },
    { key: 134, am: "ዐ", en: "'a" },
    { key: 135, am: "ዑ", en: "'u" },
    { key: 136, am: "ዒ", en: "'ei" },
    { key: 137, am: "ዓ", en: "'a" },
    { key: 138, am: "ዔ", en: "'aē" },
    { key: 139, am: "ዕ", en: "'i" },
    { key: 140, am: "ዖ", en: "'o" },
    { key: 141, am: "ዘ", en: "ze" },
    { key: 142, am: "ዙ", en: "zu" },
    { key: 143, am: "ዚ", en: "zi" },
    { key: 144, am: "ዛ", en: "za" },
    { key: 145, am: "ዜ", en: "zēa" },
    { key: 146, am: "ዝ", en: "z/zi" },
    { key: 147, am: "ዞ", en: "zo" },
    { key: 148, am: "ዠ", en: "zhe" },
    { key: 149, am: "ዡ", en: "zhu" },
    { key: 150, am: "ዢ", en: "zhi" },
    { key: 151, am: "ዣ", en: "zha" },
    { key: 152, am: "ዤ", en: "zhēa" },
    { key: 153, am: "ዥ", en: "zh/zhi" },
    { key: 154, am: "ዦ", en: "zho" },
    { key: 155, am: "የ", en: "ye" },
    { key: 156, am: "ዩ", en: "yu" },
    { key: 157, am: "ዪ", en: "yi" },
    { key: 158, am: "ያ", en: "ya" },
    { key: 159, am: "ዬ", en: "yēa" },
    { key: 160, am: "ይ", en: "y/yi" },
    { key: 161, am: "ዮ", en: "yo" },
    { key: 162, am: "ደ", en: "de" },
    { key: 163, am: "ዱ", en: "du" },
    { key: 164, am: "ዲ", en: "di" },
    { key: 165, am: "ዳ", en: "da" },
    { key: 166, am: "ዴ", en: "dēa" },
    { key: 167, am: "ድ", en: "d/di" },
    { key: 168, am: "ዶ", en: "do" },
    { key: 169, am: "ጀ", en: "je" },
    { key: 170, am: "ጁ", en: "ju" },
    { key: 171, am: "ጂ", en: "ji" },
    { key: 172, am: "ጃ", en: "ja" },
    { key: 173, am: "ጄ", en: "jēa" },
    { key: 174, am: "ጅ", en: "j/ji" },
    { key: 175, am: "ጆ", en: "jo" },
    { key: 176, am: "ገ", en: "ge" },
    { key: 177, am: "ጉ", en: "gu" },
    { key: 178, am: "ጊ", en: "gi" },
    { key: 179, am: "ጋ", en: "ga" },
    { key: 180, am: "ጌ", en: "gēa" },
    { key: 181, am: "ግ", en: "g/gi" },
    { key: 182, am: "ጎ", en: "go" },
    { key: 183, am: "ጠ", en: "ṭ'e" },
    { key: 184, am: "ጡ", en: "ṭ'u" },
    { key: 185, am: "ጢ", en: "ṭ'i" },
    { key: 186, am: "ጣ", en: "ṭ'a" },
    { key: 187, am: "ጤ", en: "ṭ'ēa" },
    { key: 188, am: "ጥ", en: "ṭ'" },
    { key: 189, am: "ጦ", en: "ṭ'o" },
    { key: 190, am: "ጨ", en: "ċ'e" },
    { key: 191, am: "ጩ", en: "ċ'u" },
    { key: 192, am: "ጪ", en: "ċ'i" },
    { key: 193, am: "ጫ", en: "ċ'a" },
    { key: 194, am: "ጬ", en: "ċ'ē" },
    { key: 195, am: "ጭ", en: "ċ'/" },
    { key: 196, am: "ጮ", en: "ċ'o" },
    { key: 197, am: "ጰ", en: "p'e" },
    { key: 198, am: "ጱ", en: "p'u" },
    { key: 199, am: "ጲ", en: "p'i" },
    { key: 200, am: "ጳ", en: "p'a" },
    { key: 201, am: "ጴ", en: "p'ēa" },
    { key: 202, am: "ጵ", en: "p'/" },
    { key: 203, am: "ጶ", en: "p'o" },
    { key: 204, am: "ጸ", en: "ṣ'e" },
    { key: 205, am: "ጹ", en: "ṣ'u" },
    { key: 206, am: "ጺ", en: "ṣ'i" },
    { key: 207, am: "ጻ", en: "ṣ'a" },
    { key: 208, am: "ጼ", en: "ṣ'ē" },
    { key: 209, am: "ጽ", en: "ṣ'/" },
    { key: 210, am: "ጾ", en: "ṣ'o" },
    { key: 211, am: "ፀ", en: "ṣ'e" },
    { key: 212, am: "ፁ", en: "ṣ'u" },
    { key: 213, am: "ፂ", en: "ṣ'i" },
    { key: 214, am: "ፃ", en: "ṣ'a" },
    { key: 215, am: "ፄ", en: "ṣ'ē" },
    { key: 216, am: "ፅ", en: "ṣ'/" },
    { key: 217, am: "ፆ", en: "ṣ'o" },
    { key: 218, am: "ፈ", en: "fe" },
    { key: 219, am: "ፉ", en: "fu" },
    { key: 220, am: "ፊ", en: "fi" },
    { key: 221, am: "ፋ", en: "fa" },
    { key: 222, am: "ፌ", en: "fēa" },
    { key: 223, am: "ፍ", en: "f/fi" },
    { key: 224, am: "ፎ", en: "fo" },
    { key: 225, am: "ፐ", en: "pe" },
    { key: 226, am: "ፑ", en: "pu" },
    { key: 227, am: "ፒ", en: "pi" },
    { key: 228, am: "ፓ", en: "pa" },
    { key: 229, am: "ፔ", en: "pēa" },
    { key: 230, am: "ፕ", en: "p/pi" },
    { key: 231, am: "ፖ", en: "po" },
    { key: 232, am: "ቨ", en: "ve" },
    { key: 233, am: "ቩ", en: "vu" },
    { key: 234, am: "ቪ", en: "vi" },
    { key: 235, am: "ቫ", en: "va" },
    { key: 236, am: "ቬ", en: "vēa" },
    { key: 237, am: "ቭ", en: "v/vi" },
    { key: 238, am: "ቮ", en: "vo" },
  ];
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [checkBool, setCheckBool] = useState(true);
  const [nextBool, setNextBool] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [openContinue, setOpenContinue] = useState(false);
  const [count, setCount] = useState(1);
  const [gameSettings, setGameSettings] = useState(() => {
    const storedVolume = localStorage.getItem("volume");
    const storedLetters = localStorage.getItem("letters");
    return {
      volume: storedVolume !== null ? Number(storedVolume) : 50,
      letters: storedLetters !== null ? Number(storedLetters) : 25,
    };
  });

  const openHandler = () => setOpenSetting(true);
  const closeHandler = () => setOpenSetting(false);

  // Assuming data = [{ key: 1, am: "አ", en: "a" }, { key: 2, am: "በ", en: "b" }, ...]

  const getShuffledPool = () => {
    // Shuffle based on object indices
    const arr = Array.from({ length: data.length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const initialPool = getShuffledPool();
  const initialIndex = initialPool.pop();

  const [pool, setPool] = useState(initialPool);
  const [randomIndex, setRandomIndex] = useState(initialIndex);

  const currentItem = data[randomIndex];
  // currentItem.am, currentItem.en, currentItem.key

  function nextLetter() {
    setCount((prev) => prev + 1);
    let newPool = [...pool];

    if (newPool.length === 0) {
      console.log("end");
      // Add your end-game logic here
      return;
    }

    if (count === gameSettings.letters) {
      setCount(1);
      setOpenContinue(true);
      // if (!continueGame) {
      //   navigate("/");
      //   return;
      // }
    }

    const nextIdx = newPool.pop();
    setPool(newPool);
    setRandomIndex(nextIdx);
    setShowAnswer(false);
    setCheckBool(true);
    setNextBool(false);
  }

  function handleShowAnswer() {
    setShowAnswer(true);
  }
  function handleCorrectScore() {
    if (checkBool) {
      setScore(score + 1);
      setCheckBool(false);
      setNextBool(true);
    }
  }
  function handleWrongScore() {
    if (checkBool) {
      setWrongAnswers([...wrongAnswers, currentItem]);
      setCheckBool(false);
      setNextBool(true);
    }
  }
  function handleSettingsSave(data) {
    setGameSettings(data);
  }

  return (
    <>
      {openSetting && (
        <Setting
          open={openSetting}
          onClose={closeHandler}
          onSave={handleSettingsSave}
        />
      )}
      {openContinue && (
        <div>
          <div className="wrapper">
            <h2>Wrong Answers</h2>
            <div className="card-grid">
              <Card data={wrongAnswers}></Card>
            </div>
          </div>
          <div style={{margin:"1rem", textAlign:"end", paddingRight:"2rem", gap:"3rem"}}>
            <button style={{padding:"0.8rem", marginRight:"1rem"}}>Go to home</button>
            <button style={{padding:"0.8rem"}}>Continue  -{">"}</button>
          </div>
        </div>
      )}
      {!openContinue && (
        <div className="game">
          <div className="top">
            <div className="score">
              <h2>Score: </h2>
              <h2>{score}</h2>
            </div>
            <div
              style={{ alignContent: "center", marginRight: "4rem", zIndex: 1 }}
            >
              <button
                aria-label="settings"
                className="settings"
                onClick={openHandler}
              >
                ⚙️
              </button>
            </div>
          </div>
          <div className="body">
            <h1>{currentItem.am}</h1>
            <div>
              <h2 style={{ color: showAnswer ? "inherit" : "transparent" }}>
                {currentItem.en}
              </h2>
            </div>
          </div>
          <div className="next">
            <button disabled={!nextBool} onClick={nextLetter}>
              Next
            </button>
          </div>
          <div className="show">
            <button onClick={handleShowAnswer}>Show answer</button>
          </div>
          <div className="check">
            <button className="wrong" onClick={handleWrongScore}>
              Wrong
            </button>
            <button className="correct" onClick={handleCorrectScore}>
              Correct
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Game;
