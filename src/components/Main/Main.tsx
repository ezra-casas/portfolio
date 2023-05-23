import "./Main.css";
import { CreateBox } from "../IdkWhatToCallThis/CreateBox";
const array = ["Kana King", "KeePassXC"];

const projects = array.map((project, index) => (
  <CreateBox project={project} key={index} id={array[index]} />
));

export default function Main() {
  return (
    <main>
      <section className="boxes">{projects}</section>
    </main>
  );
}
