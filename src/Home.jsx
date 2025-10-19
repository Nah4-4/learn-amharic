import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
      <div className="main">
        <p>
          <Link to={"/play"}>Play</Link>
        </p>
        <p>
          <Link to={"/how-to"}>How to play</Link>
        </p>
        <p style={{marginBottom:"13rem"}}>
          <Link to={"/about"}>About</Link>
        </p>
      </div>
  );
}
