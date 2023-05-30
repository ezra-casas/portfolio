import "./Main.css";
import { CreateBox } from "../IdkWhatToCallThis/CreateBox";

export default function Main() {
  return (
    <main>
      <section className="boxes">
        <CreateBox projectName="Kana King" key={1} id="kanaking" />
        <CreateBox
          projectName="KeePassXC"
          key={2}
          id="keepassxc"
          description="Links to source code in GitHub"
        />
      </section>
    </main>
  );
}
