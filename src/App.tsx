import React from 'react';

import './App.scss';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Milestone from './components/milestone/Milestone';
import Navbar from './components/navbar/Navbar';
import Packages from './components/packages/Packages';
import Reviews from './components/reviews/Reviews';
import Services from './components/services/Services';
import Works from './components/works/Works';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Whatsapp from './components/Whatsapp';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (command: string, config: object) => void;
  }
}

window.dataLayer = window.dataLayer || [];

function gtag(command: string, config: object) {
  window.dataLayer.push({
    event: 'gtag',
    command,
    config,
  });
}

gtag('js', new Date());
gtag('config', {
  'AW-10967168531': {
    page_path: window.location.pathname,
  },
});

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
