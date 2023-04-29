import React, { useEffect } from 'react';
import './Navbar.scss';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-scroll';
import * as Scroll from 'react-scroll';
import { FiMenu, FiPhoneCall } from 'react-icons/fi';
import clsx from 'clsx';
var Element = Scroll.Element;
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 7) {
      return setIsScrolling(true);
    }

    setIsScrolling(false);
  };
  return (
    <Element name="home" className="element">
      <div
        className={isScrolling ? 'scrolling navbar-wrapper' : ' navbar-wrapper'}
      >
        <div className="container">
          <div className="left">
            <Link to="home">
              <img src={Logo} alt="kure logo" />
            </Link>
          </div>
          <div
            className={clsx('right', {
              active: showMenu,
              'link-scrolling': isScrolling,
            })}
          >
            <Link
              activeClass="activeLink"
              to="works"
              spy={true}
              className="links"
              offset={-50}
              onClick={() => setShowMenu(false)}
            >
              How It Works
            </Link>
            <Link
              activeClass="activeLink"
              to="services"
              spy={true}
              className="links"
              offset={-50}
              onClick={() => setShowMenu(false)}
            >
              Services
            </Link>
            <Link
              activeClass="activeLink"
              to="reviews"
              spy={true}
              className="links"
              offset={-50}
              onClick={() => setShowMenu(false)}
            >
              Reviews
            </Link>
            <Link
              activeClass="activeLink"
              to="packages"
              spy={true}
              className="links"
              offset={-50}
              onClick={() => setShowMenu(false)}
            >
              {/* <FiPackage /> */}
              Packages
            </Link>
            <a href="https://wa.me/96176577070" className="btn-primary">
              <FiPhoneCall /> Call us
            </a>
          </div>
          <div
            className="burger-container"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <FiMenu className="burger" />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Navbar;
