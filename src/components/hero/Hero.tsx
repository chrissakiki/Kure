import React from "react";
import "./hero.scss";
import Banner from "../../assets/images/bg1.webp";
import Form from "../form/Form";

const Hero = () => {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <div
      className="hero-wrapper"
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url(${Banner})`,
      }}
    >
      <div className="container">
        <div className="content" data-aos="zoom-in">
          <h1>Wellness, delivered</h1>
          <p>
            Kure connects you with our certified massage professionals who come
            directly to your home, apartment, and office space.
          </p>
          <button className="btn-hero" onClick={() => setShowForm(true)}>
            Book Now
          </button>
        </div>
      </div>
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  );
};

export default Hero;
