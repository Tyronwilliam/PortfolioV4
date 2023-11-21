import { Testimonial } from ".";
import Carousel from "./components/Carousel";

const Portfolio = () => {
  return (
    <section className="dark portfolio" id="Portfolio">
      <section className="section">
        <h2 style={{ marginBottom: "30px" }}>PORTFOLIO</h2>
        <Carousel /> <Testimonial />
      </section>
    </section>
  );
};

export default Portfolio;
