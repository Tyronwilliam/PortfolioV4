import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import CSB from "../../../assets/csb.png";
import COOP from "../../../assets/lacoop.png";
import AGENCE from "../../../assets/AgenceGraziani.png";

interface Item {
  title: string;
  description: string;
  image: string;
  link: string;
}
const carouselItems: Item[] = [
  {
    title: "CSBKlinik",
    description: "Site d'actualités médicales",
    image: CSB,
    link: "https://csb-klinik.lu/",
  },
  {
    title: "La COOP",
    description: "Site vitrine pour un bar coopératif",
    image: COOP,
    link: "https://www.lacoopboissy.fr",
  },
  {
    title: "Agence Graziani",
    description: "Base de données de talents pour le cinéma",
    image: AGENCE,
    link: "https://www.agencegraziani.fr/fr",
  },
];
const Carousel = () => {
  const [current, setCurrent] = React.useState<number | null>(0);
  const [viewCard, setViewCard] = React.useState<number | null>(null);
  const [maxView, setMaxView] = React.useState<number>(3);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  const arrayLength: number = carouselItems.length;
  const handleMouseOver = (index: number) => {
    setViewCard(index);
  };
  const handleMouseOut = () => {
    setViewCard(null);
  };
  const handleNext = () => {
    if (current! + maxView >= arrayLength) {
      setCurrent(0);
    } else {
      const newValue = current! + maxView;
      setCurrent(newValue);
    }
  };
  const handlePrevious = () => {
    if (current! - maxView < 0) {
      const newValue = arrayLength - maxView;
      setCurrent(newValue);
    } else {
      const newValue = current! - maxView;
      setCurrent(newValue);
    }
  }; // Set maxView based on screen size
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setMaxView(1); // Mobile
        setIsMobile(true);
      } else {
        setMaxView(3); // Desktop
        setIsMobile(false);
      }
    };

    handleResize(); // Initial call to set maxView based on the initial screen size

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="container__carousel">
        {carouselItems
          .slice(current!, current! + maxView)
          .map((item, index) => (
            <div
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
              className={`box__carousel ${isMobile ? "mobile_box" : ""}   ${
                viewCard === index ? "light__opacity" : "dark__opacity"
              }`}
            >
              <div className="background__item-carousel ">
                <img src={item.image} alt={item.description} />
              </div>
              <Content viewCard={viewCard} index={index} item={item} />
            </div>
          ))}{" "}
        {(arrayLength > 3 || isMobile) && (
          <CTA handlePrevious={handlePrevious} handleNext={handleNext} />
        )}
      </div>
    </>
  );
};

export default Carousel;

interface ContentProps {
  viewCard: number | null;
  index: number;
  item: Item;
}
const Content = ({ viewCard, index, item }: ContentProps) => {
  return (
    <div
      className={`${
        viewCard === index ? "content__box" : "content__box-no_display"
      }`}
    >
      <p>{item.title}</p>
      <p>{item.description}</p>
      <a href={item.link} target="blank">
        Voir plus
      </a>
    </div>
  );
};
const CTA = ({
  handlePrevious,
  handleNext,
}: {
  handlePrevious: () => void;
  handleNext: () => void;
}) => {
  return (
    <div className="container__button">
      <button onClick={handlePrevious}>
        <FaArrowAltCircleLeft />
      </button>
      <button onClick={handleNext}>
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
};
