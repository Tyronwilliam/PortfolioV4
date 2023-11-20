import { About } from "./Section/About";
import { Home } from "./Section/Home";
import { NavBar } from "./Section/components";

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <About />
    </main>
  );
}

export default App;
