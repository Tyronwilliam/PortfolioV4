import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import toast, { Toaster } from "react-hot-toast";
import React from "react";

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
const notifySuccess = () => toast.success("Copié !");
const notifyError = () => toast.error("Oups ! ça n'a pas fonctionné");
function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      notifySuccess();
    })
    .catch(() => {
      notifyError();
    });
}
const Contact = () => {
  const [isEmailHovered, setIsEmailHovered] = React.useState(false);
  const [isPhoneNumberHovered, setIsPhoneNumberHovered] = React.useState(false);

  return (
    <section id="Contact" className="section contact__section">
      <Toaster />
      <Entete item="Contact" />
      <Slide delay={100}>
        <div className="container__content-contact">
          <div
            onClick={() => copyToClipboard("frenchwebdeveloper@gmail.com")}
            onMouseEnter={() => setIsEmailHovered(true)}
            onMouseLeave={() => setIsEmailHovered(false)}
          >
            <MdEmail />
            <p>frenchwebdeveloper@gmail.com</p>
            {isEmailHovered && <span>Cliquez pour copier le mail</span>}
          </div>
          <div
            onClick={() => copyToClipboard("784080036")}
            onMouseEnter={() => setIsPhoneNumberHovered(true)}
            onMouseLeave={() => setIsPhoneNumberHovered(false)}
          >
            <BsTelephone />
            <p>+33 784080036</p>{" "}
            {isPhoneNumberHovered && (
              <span>Cliquez pour copier le numéro de téléphone</span>
            )}
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
          <a href={el.link} target="blank" key={el.link}>
            {el.icon}
          </a>
        ))}
      <div></div>
    </div>
  );
};
