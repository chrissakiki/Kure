import React from "react";

import "./App.scss";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Milestone from "./components/milestone/Milestone";
import Navbar from "./components/navbar/Navbar";
import Packages from "./components/packages/Packages";
import Reviews from "./components/reviews/Reviews";
import Services from "./components/services/Services";
import Works from "./components/works/Works";
import AOS from "aos";
import "aos/dist/aos.css";
import Whatsapp from "./components/Whatsapp";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Works />
      <Milestone />
      <Services />
      <Reviews />
      <Packages />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default App;
