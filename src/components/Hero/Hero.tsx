import DarkModeSwitch from "../IdkWhatToCallThis/DarkModeSwitch";
import { handleClick } from "../IdkWhatToCallThis/handeClick";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="top">
        <h1>Ezra C.</h1>
        <span>
          <DarkModeSwitch />
        </span>
      </div>

      <div>
        <p>Father</p>
        <p>Husband</p>
        <p>Developer</p>
        <p>Programmer</p>
      </div>
    </div>
  );
}
