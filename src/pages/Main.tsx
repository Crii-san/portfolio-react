import Presentation from "./Presentation";
import Projects from "./Projects";

function Main() {
  return (
    <main className="w-full flex flex-col font-nunito">
      <img
        src="/assets/app/yellow-background.png"
        alt="yellow background"
        className="absolute right-0"
      />

      <img
        src="/assets/app/image.png"
        alt="portrait"
        className="absolute right-0"
      />
      <Presentation />
      <Projects />
    </main>
  );
}

export default Main;

