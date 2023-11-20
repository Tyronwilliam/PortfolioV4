import { Fade } from "react-awesome-reveal";

const Content = () => {
  return (
    <div className="container__content">
      <Fade cascade duration={300} triggerOnce={true}>
        <div className="main_div">
          <div className="yellow_band"></div>
          <p>
            Enthousiaste du monde du développement web,{" "}
            <strong>
              je suis un autodidacte passionné qui a parcouru un chemin riche en
              découvertes et en apprentissages.
            </strong>
          </p>
        </div>
        <div className="main_div">
          <div className="yellow_band"></div>
          <p>
            <strong>Mon aventure</strong> a débuté par l'acquisition des bases,
            et s'est ensuite enrichie par une formation approfondie à la
            3WAcademy, où j'ai maîtrisé des technologies telles que React,
            JavaScript, Node.js, et bien d'autres.
          </p>
        </div>
        <div className="main_div">
          <div className="yellow_band"></div>
          <div>
            <p>
              <strong>Fort</strong> de cette solide base, j'ai choisi de
              poursuivre mon parcours en tant qu'autodidacte,{" "}
              <strong>explorant</strong> sans cesse de nouvelles avenues et
              repoussant les limites de mes connaissances.
            </p>
            <p>
              <strong>Cette soif</strong> d'apprentissage m'a valu une
              expérience professionnelle enrichissante au sein d'une start-up
              dynamique, ainsi que <strong>plusieurs contrats fructueux</strong>{" "}
              en tant que freelance.
            </p>
          </div>
        </div>
        <div className="main_div">
          <div className="yellow_band"></div>
          <p>
            Au fil de ces <strong>expériences variées</strong>, j'ai pleinement
            saisi l'importance cruciale d'une <strong>interface soignée</strong>{" "}
            et d'un code impeccable. Je m'efforce constamment de créer des sites
            web qui allient <strong>esthétisme et fonctionnalité</strong>,
            offrant ainsi une <strong>expérience utilisateur optimale</strong>.
          </p>
        </div>
        <div className="main_div">
          <div className="yellow_band"></div>
          <div>
            <p>
              En tant que <strong>professionnel du développement web</strong>,
              je m'engage à <strong>accompagner mes clients</strong> de A à Z
              dans le processus de création de leur site.
            </p>
            <p>
              Mon approche va au-delà du simple code : je comprends les{" "}
              <strong>aspirations</strong> et les <strong>besoins</strong>{" "}
              spécifiques de mes clients, m'assurant que chaque projet reflète
              leur vision unique.
            </p>
          </div>
        </div>
        <div className="main_div">
          <div className="yellow_band"></div>
          <p>
            Mon objectif est de transformer des idées en{" "}
            <strong>réalité digitale</strong>, en créant des sites web qui
            allient performance, élégance et{" "}
            <strong>facilité d'utilisation</strong>.
          </p>
        </div>
        <div className="main_div">
          <div className="yellow_band"></div>
          <p>
            Si vous recherchez un partenaire dévoué pour{" "}
            <strong>concrétiser</strong> votre projet web, je suis là pour vous{" "}
            <strong>accompagner</strong> tout au long de cette passionnante
            aventure.
          </p>
        </div>
      </Fade>{" "}
    </div>
  );
};

export default Content;
