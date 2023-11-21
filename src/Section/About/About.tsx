import SkillsLayout from "./SkillsLayout";
import Content from "./components/Content";

const About = () => {
  return (
    <section id="A propos" className="section">
      <h2 style={{ marginBottom: "30px" }}>A PROPOS</h2>
      <Content />
      <SkillsLayout />
    </section>
  );
};

export default About;
