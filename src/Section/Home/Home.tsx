import { Fade } from "react-awesome-reveal";
import CartoonMe from "../../assets/Standing_confident.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export interface Icone {
  icon: React.ReactElement;
  link: string;
}
const icone: Icone[] = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/tyron-william-chanu-483956171/",
  },
  { icon: <FaGithub />, link: "https://github.com/Tyronwilliam" },
];
const scrollTo = (sectionName: string) => {
  const contactSection = document.getElementById(sectionName);

  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth", // Fait défiler en douceur
    });
  }
};
const Home = () => {
  return (
    <section id="home">
      <div className="section custom-heigth">
        <div className="left_right-box">
          <Presentation /> <Cartoon />{" "}
        </div>
      </div>
    </section>
  );
};

export default Home;

const Presentation = () => {
  return (
    <Fade triggerOnce={true} cascade>
      <div className="intro__content-box">
        <div>
          <p>Je suis</p>
          <p>Tyron-William CHANU </p>
        </div>
        <span>Développeur Fullstack JS</span>
        <button onClick={() => scrollTo("Contact")}>Contact</button>
      </div>
    </Fade>
  );
};

const Cartoon = () => {
  return (
    <div className="container_cartoon">
      <img src={CartoonMe} alt="Cartoon Character" /> <SocialMedia />
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="container__social">
      <div className="yellow__band"></div>
      <div className="container_icone">
        {icone?.map((el: any) => (
          <a href={el.link} target="blank" key={el.link}>
            {el.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
