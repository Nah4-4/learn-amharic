import { useState } from "react";
import "./Game.css";

function Game() {
  //add dark mode

  //add settings for number of questions
  //*add sound
  //*add multiple choice option
  //*add progress bar
  //add reset score
  //add instructions
  //add about
  //add end logic
  //add wrong answer review

  const letters =[
    "ሀ","ሁ","ሂ","ሃ","ሄ","ህ","ሆ",
    "ለ","ሉ","ሊ","ላ","ሌ","ል","ሎ",
    "ሐ","ሑ","ሒ","ሓ","ሔ","ሕ","ሖ",
    "መ","ሙ","ሚ","ማ","ሜ","ም","ሞ",
    "ሠ","ሡ","ሢ","ሣ","ሤ","ሥ","ሦ",
    "ረ","ሩ","ሪ","ራ","ሬ","ር","ሮ",
    "ሰ","ሱ","ሲ","ሳ","ሴ","ስ","ሶ",
    "ሸ","ሹ","ሺ","ሻ","ሼ","ሽ","ሾ",
    "ቀ","ቁ","ቂ","ቃ","ቄ","ቅ","ቆ",
    "በ","ቡ","ቢ","ባ","ቤ","ብ","ቦ",
    "ተ","ቱ","ቲ","ታ","ቴ","ት","ቶ",
    "ቸ","ቹ","ቺ","ቻ","ቼ","ች","ቾ",
    "ኀ","ኁ","ኂ","ኃ","ኄ","ኅ","ሖ",
    "ነ","ኑ","ኒ","ና","ኔ","ን","ኖ",
    "ኘ","ኙ","ኚ","ኛ","ኜ","ኝ","ኞ",
    "አ","ኡ","ኢ","ኣ","ኤ","እ","ኦ",
    "ከ","ኩ","ኪ","ካ","ኬ","ክ","ኮ",
    "ኸ","ኹ","ኺ","ኻ","ኼ","ኽ","ኾ",
    "ወ","ዉ","ዊ","ዋ","ዌ","ው","ዎ",
    "ዐ","ዑ","ዒ","ዓ","ዔ","ዕ","ዖ",
    "ዘ","ዙ","ዚ","ዛ","ዜ","ዝ","ዞ",
    "ዠ","ዡ","ዢ","ዣ","ዤ","ዥ","ዦ",
    "የ","ዩ","ዪ","ያ","ዬ","ይ","ዮ",
    "ደ","ዱ","ዲ","ዳ","ዴ","ድ","ዶ",
    "ጀ","ጁ","ጂ","ጃ","ጄ","ጅ","ጆ",
    "ገ","ጉ","ጊ","ጋ","ጌ","ግ","ጎ",
    "ጠ","ጡ","ጢ","ጣ","ጤ","ጥ","ጦ",
    "ጨ","ጩ","ጪ","ጫ","ጬ","ጭ","ጮ",
    "ጰ","ጱ","ጲ","ጳ","ጴ","ጵ","ጶ",
    "ጸ","ጹ","ጺ","ጻ","ጼ","ጽ","ጾ",
    "ፀ","ፁ","ፂ","ፃ","ፄ","ፅ","ፆ",
    "ፈ","ፉ","ፊ","ፋ","ፌ","ፍ","ፎ",
    "ፐ","ፑ","ፒ","ፓ","ፔ","ፕ","ፖ",
    "ቨ","ቩ","ቪ","ቫ","ቬ","ቭ","ቮ"]
  const pron =[
    "ha","hu","hi","ha","hēa","h/hi","ho",
"le","lu","li","la","lēa","l/li","lo",
"ḥa","ḥu","ḥi","ḥa","ḥēa","ḥ/ḥi","ḥo",
"me","mu","mi","ma","mēa","m/mi","mo",
"śe","śu","śi","śa","śēa","ś/śi","śo",
"re","ru","ri","ra","rēa","r/ri","ro",
"se","su","si","sa","sēa","s/si","so",
"she","shu","shi","sha","shie","sh","sho",
"qe","qu","qi","qa","qēa","qie","qo",
"be","bu","bi","ba","bēa","b/bi","bo",
"te","tu","ti","ta","tēa","t/ti","to",
"che","chu","chi","cha","chēa","ch/chi","cho",
"ḫa","ḫu","ḫi","ḫa","ḫēa","ḫ/ḫi","ḫo",
"ne","nu","ni","na","nēa","n/ni","no",
"ñe","ñu","ñi","ña","ñēa","ñ/ñi","ño",
"'a","'u","'ei","'a","'aē","'i","'o",
"ke","ku","ki","ka","kēa","k/ki","ko",
"khe","khu","khi","kha","khēa","kh/khi","kho",
"we","wu","wi","wa","wēa","w/wi","wo",
"'a","'u","'ei","'a","'aē","'i","'o",
"ze","zu","zi","za","zēa","z/zi","zo",
"zhe","zhu","zhi","zha","zhēa","zh/zhi","zho",
"ye","yu","yi","ya","yēa","y/yi","yo",
"de","du","di","da","dēa","d/di","do",
"je","ju","ji","ja","jēa","j/ji","jo",
"ge","gu","gi","ga","gēa","g/gi","go",
"ṭ'e","ṭ'u","ṭ'i","ṭ'a","ṭ'ēa","ṭ'","ṭ'o",
"ċ'e","ċ'u","ċ'i","ċ'a","ċ'ē","ċ'/","ċ'o",
"p'e","p'u","p'i","p'a","p'ēa","p'/","p'o",
"ṣ'e","ṣ'u","ṣ'i","ṣ'a","ṣ'ē","ṣ'/","ṣ'o",
"ṣ'e","ṣ'u","ṣ'i","ṣ'a","ṣ'ē","ṣ'/","ṣ'o",
"fe","fu","fi","fa","fēa","f/fi","fo",
"pe","pu","pi","pa","pēa","p/pi","po",
"ve","vu","vi","va","vēa","v/vi","vo"]
    const wrongAnswers = [];

  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [checkBool,setCheckBool]=useState(true);
  const [nextBool,setNextBool]=useState(false);

  const getShuffledPool = () => {
    const arr = Array.from({ length: letters.length }, (_, i) => i);
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

  function nextLetter() {
    let newPool = pool.slice();
    if (newPool.length === 0) {
      console.log("end");
      //end logic
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
  function handleCorrectScore(){
    if(checkBool){
      setScore(score + 1);
      setCheckBool(false);
      setNextBool(true);
    }
  }
  function handleWrongScore(){
    if(checkBool){
      wrongAnswers.push(randomIndex);
      setCheckBool(false);
      setNextBool(true);
    }
  }
  return (
    <>
      <div className="game">
        <div className="score">
          <div style={{display:"flex",gap:"0.4rem"}}>
            <h2>Score: </h2>
            <h2>{score}</h2>
          </div>
        </div>
        <div className="body">
          <h1>{letters[randomIndex]}</h1>
          <div>

          <h2 style={{color: showAnswer?"black":"transparent"}}>{pron[randomIndex]}</h2>
          </div>
        </div>
          <div className="next">
            <button disabled={!nextBool} onClick={nextLetter}>Next</button>
          </div>
        <div className="show">
          <button onClick={handleShowAnswer}>show answer</button>
        </div>
        <div className="check">
          <button onClick={handleWrongScore} style={{ backgroundColor: "red" }}>Wrong</button>
          <button onClick={handleCorrectScore} style={{ backgroundColor: "lime" }}>Correct</button>
        </div>
      </div>

    </>
  );
}

export default Game;
