import { About } from "./Section/About";
import { Home } from "./Section/Home";
import { Portfolio, Testimonial } from "./Section/Portfolio";
import { NavBar } from "./Section/components";

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Testimonial />
    </main>
  );
}

export default App;
