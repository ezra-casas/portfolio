import "./Footer.css";
import ContactModal from "./ContactModal/ContactModal";
import { LinkedIn, GithubCircle, Rocket } from "iconoir-react";

export default function Footer() {
  return (
    <footer>
      <div id="contact">
        <ContactModal />
      </div>
      <a href="https://www.github.com/ezra-casas">
        <div id="github">
          <span className="text">GitHub</span>
          <span className="icon">
            <GithubCircle />
          </span>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/ezra-casas">
        <div id="linkedin">
          <span className="text">LinkedIn</span>
          <span className="icon">
            <LinkedIn />
          </span>
        </div>
      </a>
    </footer>
  );
}
