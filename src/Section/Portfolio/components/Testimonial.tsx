import PRO from "../../../assets/pro.png";

const Testimonial = () => {
  return (
    <section className="section light__background">
      <div className="left_right-box">
        <div>
          <h2>Témoignages</h2>
          <div>
            <div className="yellow_band"></div>
            <div className="content__box-testimonial">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim
              </p>
              <p>John Doe</p>
              <div>
                <div className="yellow_band"></div>
                <p>Consultant RGPD</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container_cartoon">
          <img src={PRO} alt="Cartoon character" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
