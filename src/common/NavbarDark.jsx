import React, { useState, useEffect } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

const NavbarDark = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Add a class when the user scrolls down more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <nav
        className={`navbar fixed-top ${
          isScrolled ? "bg-light opacity-75" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <a className="navbar-brand fs-1" href="/">
              DCM
            </a>
            <button
              onClick={toggleMenu}
              className="btn text-dark fs-1"
              aria-label="Toggle Menu"
            >
              <HiBars3BottomRight />
            </button>
          </div>
        </div>
      </nav>

      <div className={`navbar-menu-light ${menuOpen ? "open" : "closed"}`}>
        <nav className="container my-5 py-5">
          <ul className="list-unstyled d-flex flex-column justify-content-center align-items-center">
            <li className="my-4">
              <a
                href="/"
                className="display-5 text-decoration-none p-3 fw-semibold"
              >
                Home
              </a>
            </li>
            <li className="my-4">
              <a
                href="portfolio"
                className="display-5 text-decoration-none p-3 fw-semibold"
              >
                Work
              </a>
            </li>
            <li className="my-4">
              <a
                href="services"
                className="display-5 text-decoration-none p-3 fw-semibold"
              >
                Services
              </a>
            </li>
            <li className="my-4">
              <a
                href="contact"
                className="display-5 text-decoration-none p-3 fw-semibold"
              >
                Contact
              </a>
            </li>
            <li className="my-4">
              <a
                href="about"
                className="display-5 text-decoration-none p-3 fw-semibold"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavbarDark;
