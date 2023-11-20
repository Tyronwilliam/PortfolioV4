import Html from "../../../assets/html.png";
import Css from "../../../assets/css.png";
import Sass from "../../../assets/sass.png";
import Tailwind from "../../../assets/tailwind.png";
import Typescript from "../../../assets/typescript.png";
import ReactIcone from "../../../assets/reactIcon.png";
import NextIcone from "../../../assets/nextjs.png";
import Git from "../../../assets/git.png";
import NodeIcone from "../../../assets/node.png";
import Mongo from "../../../assets/mongo.png";
import SQLIcone from "../../../assets/mysql.png";
import Prisma from "../../../assets/prisma.png";
import JSIcon from "../../../assets/jsIcon.png";
import { Fade } from "react-awesome-reveal";
const skills = [
  { image: [Html, Css], value: "Html & CSS" },
  { image: [JSIcon], value: "Javascript" },
  { image: [Sass], value: "SASS" },
  { image: [Tailwind], value: "Tailwind" },
  { image: [Typescript], value: "Typescript" },
  { image: [ReactIcone], value: "React" },
  { image: [NextIcone], value: "Next JS" },
  { image: [Git], value: "Git" },
  { image: [NodeIcone], value: "Node JS" },
  { image: [Mongo], value: "Mongo DB" },
  { image: [Prisma], value: "Prisma" },
  { image: [SQLIcone], value: "MySQL" },
];
const LayoutSkill = () => {
  return (
    <div className="container__skills-item">
      <Fade cascade duration={300} direction="left" triggerOnce={true}>
        <ul>
          {skills?.map((skill) => (
            <li>
              <div>
                {skill?.image?.map((item) => (
                  <img src={item} alt="icon" />
                ))}
              </div>
              <span>{skill.value}</span>
            </li>
          ))}
        </ul>{" "}
      </Fade>
    </div>
  );
};

export default LayoutSkill;
