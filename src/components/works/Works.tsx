import React from "react";
import "./works.scss";
import { AiFillCheckCircle, AiFillSchedule } from "react-icons/ai";
import { TbMassage } from "react-icons/tb";
import * as Scroll from "react-scroll";
var Element = Scroll.Element;
const Works = () => {
  return (
    <Element name="works">
      <div className="works-wrapper">
        <div className="container">
          <h1>How It Works?</h1>

          <div className="box-container">
            <div className="box">
              <div className="icon">
                <AiFillCheckCircle style={{ color: "#D9B9A2" }} />
              </div>
              <p className="text">
                1. Choose the massage type, and our therapist will come to you
                with a portable massage table and all necessary equipment.
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <AiFillSchedule style={{ color: "#94a181" }} />
              </div>
              <p className="text">
                2. Schedule your massage service through our WhatsApp any day
                from 8 am to 8 pm.
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <TbMassage style={{ color: "#424242" }} />
              </div>
              <p className="text">
                3. Sit back and relax within the comfort and safety of your own
                home or office.
              </p>
            </div>
          </div>

          <hr />

          <h2 data-aos="fade-up">
            Your wellness and health is our top priority!
          </h2>

          <ul className="text-content" data-aos="fade-up">
            <li>
              KURE massage is done by Lebanese specialized therapists holders of
              international degrees with more than 5 years of experience in the
              field.
            </li>
            <li>
              Kindly note that all our therapists follow the Code of Ethics as
              well as other internal policies and guidelines.
            </li>
            <li>
              All hygiene protocols for Covid-19 are applied. Our therapists
              undergo PCR tests weekly. They disinfect the tools and equipment,
              wear double masks and a face shield to ensure full protection
              during the session.
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default Works;
