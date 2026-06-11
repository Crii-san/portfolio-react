import Home from "../../children/Home/Home";
import Projects from "../../children/Projects/Projects";

function Main() {
  return (
    <main className="flex items-center font-nunito flex-col">
      <Home />
      <Projects />
    </main>
  );
}

export default Main;