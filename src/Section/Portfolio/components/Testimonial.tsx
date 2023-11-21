import PRO from "../../../assets/pro.png";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import React from "react";

interface Temoignage {
  fullName: string;
  testimony: string;
  role: string;
  linkedinUrl: string;
}
const temoignage: Temoignage[] = [
  {
    fullName: "Erik Le Noac'h",
    testimony:
      "J'ai travaillé avec Tyron sur plusieurs projets. Proactif, toujours à l'écoute des nouvelles technologies et disponible, il a été un élément moteur lors de nos collaborations. Ce fut un véritable plaisir pour moi de travailler avec lui.",
    role: "Développeur Web Fullstack",
    linkedinUrl: "https://www.linkedin.com/in/erik-le-noac-h-91a82b101/",
  },
  {
    fullName: "Samba M'BOH",
    testimony:
      "J'ai travaillé avec Tyron sur plusieurs projets. Proactif, toujours à l'écoute des nouvelles technologies et disponible, il a été un élément moteur lors de nos collaborations. Ce fut un véritable plaisir pour moi de travailler avec lui.",
    role: "Consultant en Stratégie Marketing Digital",
    linkedinUrl: "https://www.linkedin.com/in/samba-mboh/",
  },
  {
    fullName: "Milca Del Zotto",
    testimony:
      "Tyron a crée notre site internet avec beaucoup de professionnalisme et de créativité, toujours disponible pour répondre à nos questions et à nos exigences, nous avons pu être en contact permanent pour avancer sur le travail. Il a su parfaitement comprendre notre demande, et a totalement répondu à nos attentes.",
    role: "Gérante de Bar",
    linkedinUrl: "",
  },
];
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      // Passer au témoignage suivant après 150ms
      setCurrentIndex((prevIndex) => (prevIndex + 1) % temoignage.length);
    }, 6000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []); // Le tableau de dépendances est vide, ce qui signifie que cela ne dépend d'aucune variable, il s'exécute donc une seule fois après le montage du composant.

  return (
    <section className="section light__background">
      <div className="left_right-box">
        <div>
          <h2>Témoignages</h2>
          {temoignage?.map(
            (item, index) =>
              index === currentIndex && (
                <Slide key={index}>
                  <ContentTestimonial
                    fullName={item.fullName}
                    testimony={item.testimony}
                    role={item.role}
                    linkedinUrl={item.linkedinUrl}
                  />
                </Slide>
              )
          )}
          <Bullets currentIndex={currentIndex} />
        </div>
        <div className="container_cartoon">
          <img src={PRO} alt="Cartoon character" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

const ContentTestimonial = ({
  fullName,
  testimony,
  role,
  linkedinUrl,
}: Temoignage) => {
  return (
    <div className="container__content-testimonial">
      <div className="yellow_band"></div>
      <div className="content__box-testimonial">
        <p>{testimony}</p>
        <p>{fullName}</p>
        <div>
          <div className="yellow_band"></div>
          <p>{role}</p>
          {linkedinUrl !== "" && (
            <a href={linkedinUrl} target="blank">
              <FaLinkedinIn />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Bullets = ({ currentIndex }: { currentIndex: number }) => {
  return (
    <div className={`container__bullets `}>
      {temoignage?.map((item, index) => {
        return (
          <div
            className={`bullets ${
              index === currentIndex
                ? "background__yellow"
                : "background__white"
            }`}
          ></div>
        );
      })}{" "}
    </div>
  );
};
