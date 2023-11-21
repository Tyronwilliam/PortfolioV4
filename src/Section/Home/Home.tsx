import { Fade } from "react-awesome-reveal";
import CartoonMe from "../../assets/Standing_confident.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export interface Icone {
  icon: React.ReactElement;
  link: string;
  aria: string;
}
const icone: Icone[] = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/tyron-william-chanu-483956171/",
    aria: "Linkedin",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/Tyronwilliam",
    aria: "Github",
  },
];

const Home = () => {
  return (
    <section className="dark">
      <section id="home" className="section custom_heigth-home">
        <div className="left_right-box">
          <Presentation /> <Cartoon />{" "}
        </div>
      </section>
    </section>
  );
};

export default Home;

const Presentation = () => {
  return (
    <Fade triggerOnce={true} cascade>
      <div className="intro__content-box">
        <div>
          <h1>
            Je suis
            <strong>Tyron-William CHANU </strong>
          </h1>
        </div>
        <span>Développeur Fullstack JS</span>
        <a href="#Contact">Contact</a>
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
          <a href={el.link} target="blank" key={el.link} aria-label={el.aria}>
            {el.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
