import PRO from "../../../assets/pro.png";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

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
];
const Testimonial = () => {
  return (
    <section className="section light__background">
      <div className="left_right-box">
        <div>
          <h2>Témoignages</h2>
          {temoignage?.map((item) => (
            <Slide>
              <ContentTestimonial
                fullName={item.fullName}
                testimony={item.testimony}
                role={item.role}
                linkedinUrl={item.linkedinUrl}
              />
            </Slide>
          ))}
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
          {linkedinUrl && (
            <a href={linkedinUrl}>
              <FaLinkedinIn />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
