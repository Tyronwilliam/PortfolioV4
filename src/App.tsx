import { About } from "./Section/About";
import { Contact } from "./Section/Contact";
import { Home } from "./Section/Home";
import { Portfolio } from "./Section/Portfolio";
import { NavBar } from "./Section/components";

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default App;
