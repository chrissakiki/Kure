import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "./packages.scss";
import * as Scroll from "react-scroll";
var Element = Scroll.Element;
const Packages = () => {
  const packagesObj = [
    {
      name: 60,
      price: 45,
      details: [
        "One massage therapist",
        "One massage table",
        "Premium essential oils",
        "Relaxing music",
        "Candles",
        "Your choice of massage",
      ],
      theme: false,
    },
    {
      name: 90,
      price: 60,
      details: [
        "One massage therapist",
        "One massage table",
        "Premium essential oils",
        "Relaxing music",
        "Candles",
        "Your choice of massage",
      ],
      theme: true,
    },
    {
      name: "Couple",
      price: 80,
      details: [
        "Two massage therapist",
        "Two massage table",
        "Premium essential oils",
        "Relaxing music",
        "Candles",
        "Your choice of massage",
      ],
      theme: false,
    },
  ];
  return (
    <Element name="packages">
      <div className="packages-wrapper">
        <div className="container">
          <h1 data-aos="fade-up">Our Packages</h1>

          <div className="packages-container">
            {packagesObj.map((pack, i) => (
              <div
                data-aos="fade-up"
                className={pack.theme ? "package primary" : "package"}
                key={i}
              >
                <h3>{pack.name} minutes</h3>
                <h2>{pack.price} USD</h2>
                <ul>
                  {pack.details.map((list) => (
                    <li key={list}>
                      <AiOutlineCheck /> {list}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Packages;
