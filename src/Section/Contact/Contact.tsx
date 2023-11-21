import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

export interface Icone {
  icon: React.ReactElement;
  link: string;
}
const icone: Icone[] = [
  { icon: <FaGithub />, link: "https://github.com/Tyronwilliam" },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/tyron-william-chanu-483956171/",
  },
];
const Contact = () => {
  return (
    <section id="Contact" className="section contact__section">
      <Entete item="Contact" />
      <Slide delay={100}>
        <div className="container__content-contact">
          <div>
            <MdEmail />
            <p>frenchwebdeveloper@gmail.com</p>
          </div>
          <div>
            <BsTelephone />
            <p>+33 784080036</p>
          </div>
          <div>
            <MdOutlineLocationOn />
            <p>Paris 19, France</p>
          </div>
        </div>{" "}
      </Slide>
      <Entete item={icone} />
    </section>
  );
};

export default Contact;

type EnteteProps = {
  item: string | any[];
};
const Entete = ({ item }: EnteteProps) => {
  return (
    <div
      className={`container__border ${
        typeof item === "string" ? "add__margin" : "no__margin"
      }`}
    >
      <div></div>
      {typeof item === "string" && <h2>{item}</h2>}
      {Array.isArray(item) &&
        item?.map((el: any) => (
          <a href={el.link} target="blank">
            {el.icon}
          </a>
        ))}
      <div></div>
    </div>
  );
};
