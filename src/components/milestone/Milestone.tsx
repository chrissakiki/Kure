import React from "react";
import "./milestone.scss";
import Banner from "../../assets/images/milestone.webp";
const Milestone = () => {
  return (
    <div
      className="milestone-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url(${Banner})`,
      }}
    >
      <div className="container">
        <div className="item">
          <h3 data-aos="zoom-in"> 10K+</h3>
          <div className="divider" data-aos="fade-in"></div>
          <p>Massages Booked</p>
        </div>
        <div className="item">
          <h3 data-aos="zoom-in"> 8K+</h3>
          <div className="divider" data-aos="fade-in"></div>
          <p>Happy Clients</p>
        </div>
        <div className="item">
          <h3 data-aos="zoom-in"> 100+</h3>
          <div className="divider" data-aos="fade-in"></div>
          <p>Locations Covered</p>
        </div>
        <div className="item">
          <h3 data-aos="zoom-in">8</h3>
          <div className="divider" data-aos="fade-in"></div>
          <p>Team Members</p>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
