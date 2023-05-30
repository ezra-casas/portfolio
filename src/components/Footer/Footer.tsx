import "./Footer.css";
import ContactModal from "./ContactModal/ContactModal";

export default function Footer() {
  return (
    <footer>
      <div id="contact">
        <ContactModal />
      </div>
      <a href="https://www.github.com/ezra-casas">
        <div id="github">GitHub</div>
      </a>
      <a href="https://www.linkedin.com/in/ezra-casas">
        <div id="linkedin">LinkedIn</div>
      </a>
    </footer>
  );
}
