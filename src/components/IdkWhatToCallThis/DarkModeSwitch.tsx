import * as Switch from "@radix-ui/react-switch";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import "./DarkModeSwitch.css";

const DarkModeSwitch = () => (
  <div className="switch">
    <input type="checkbox" className="switch__input" id="Switch" />
    <label className="switch__label" htmlFor="Switch">
      <span className="switch__indicator"></span>
      <span className="switch__decoration"></span>
    </label>
  </div>
);

export default DarkModeSwitch;
