import SkillsLayout from "./SkillsLayout";
import Content from "./components/Content";

const About = () => {
  return (
    <section id="Apropos" className="darker">
      <section className="section about">
        <h2 style={{ marginBottom: "30px" }}>A PROPOS</h2>
        <Content />
        <SkillsLayout />
      </section>
    </section>
  );
};

export default About;
