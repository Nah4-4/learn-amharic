import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
  return (
    <>
      <div className="main">
        <Link to={"/play"}>Play</Link>
        <Link to={"/how_to"}>How to play</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </>
  );
}
