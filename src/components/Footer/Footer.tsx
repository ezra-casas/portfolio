import "./Footer.css";
import ContactModal from "./ContactModal/ContactModal";

export default function Footer() {
  return (
    <footer>
      <div id="contact">
        <ContactModal />
      </div>
      <div id="github">GitHub</div>
      <div id="linkedin">LinkedIn</div>
    </footer>
  );
}
