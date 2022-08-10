import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./footer.scss";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="icons-container">
          <a href="https://www.instagram.com/kure.lb/" target="_blank">
            <AiOutlineInstagram className="insta" />
          </a>
          <a href="https://www.facebook.com/KURE.LB/" target="_blank">
            <FaFacebook />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=96176577070"
            target="_blank"
          >
            <BsWhatsapp />
          </a>
        </div>

        <div className="menu">
          <Link to="home" className="links">
            Home
          </Link>
          <Link to="works" className="links">
            How It Works
          </Link>
          <Link to="services" className="links" offset={50}>
            Services
          </Link>
          <Link to="reviews" className="links">
            Reviews
          </Link>
          <Link to="packages" className="links" offset={50}>
            Packages
          </Link>
        </div>

        <p>@2022 Kure | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
