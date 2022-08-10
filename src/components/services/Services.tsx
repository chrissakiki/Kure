import React from "react";
import "./services.scss";
import deeptissue from "../../assets/images/deeptissue.webp";
import triggerpoint from "../../assets/images/triggerpoint.webp";
import sports from "../../assets/images/sports.webp";
import swedish from "../../assets/images/swedish.webp";
import relaxing from "../../assets/images/relaxing.webp";
import athleticrecovery from "../../assets/images/athleticrecovery.webp";
import flexology from "../../assets/images/flexology.webp";
import anticellulite from "../../assets/images/anticellulite.webp";
import prenatal from "../../assets/images/prenatal.webp";
import * as Scroll from "react-scroll";
var Element = Scroll.Element;
const Services = () => {
  const servicesObj = [
    {
      img: deeptissue,
      title: "Deep Tissue",
      text: "Kneading movements to soothe chronically tense areas.",
    },
    {
      img: triggerpoint,
      title: "Trigger Point",
      text: "Manual techniques to release tight spots causing any discomfort.",
    },
    {
      img: sports,
      title: "Sports",
      text: "Deep techniques designed for sports people to improve recovery and performance.",
    },
    {
      img: swedish,
      title: "Swedish",
      text: "Long flowing strokes & kneading movements for relaxation and tension relief.",
    },
    {
      img: relaxing,
      title: "Relaxing",
      text: "A complete calming approach to promote relaxation and sleep.",
    },
    {
      img: athleticrecovery,
      title: "Athletic Recovery",
      text: "4 types of massages: Assisted stretching, percussion, rolling and deep tissue sports massage.",
    },
    {
      img: flexology,
      title: "Flexology",
      text: "Stretching techniques to improve flexibility and muscle recovery.",
    },
    {
      img: anticellulite,
      title: "Anti Cellulite",
      text: "Manual pressing techniques and bamboo tools to break up cellulite.",
    },
    {
      img: prenatal,
      title: "Prenatal",
      text: "Your choice of massage in a position that suits your baby.",
    },
  ];
  return (
    <Element name="services" id="services">
      <div className="services-wrapper">
        <div className="container">
          <h1 data-aos="fade-up">Our Services</h1>

          <div className="services-container">
            {servicesObj.map((item, i) => (
              <div className="service" key={i} data-aos="fade-up">
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Services;
