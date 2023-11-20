import { About } from "./Section/About";
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
    </main>
  );
}

export default App;
