import React, { useState, useEffect } from "react";

const NavbarLight = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      <nav className={`navbar fixed-top navbar-light ${isScrolled && !menuOpen ? "navbar-light-scrolled" : "navbar-top"}`}>
        <div className="container my-1 py-0">
          <div className="d-flex justify-content-between align-items-center w-100 reveal-element">
            <a className={`navbar-brand fs-1 ${menuOpen ? "text-white" : ""}`} href="/">
              <span className="logo">
                Motion Craft
              </span>
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="btn" aria-label="Toggle Menu">
              <div className={`hamburger-init light ${menuOpen ? "active" : ""}`}>
                <span className="bar top-bar"></span>
                <span className="bar bottom-bar"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div className={`menu-wrapper ${menuOpen ? "visible" : ""}`}></div>
      <div className={`navbar-menu-dark ${menuOpen ? "open" : "closed"}`}>
        <nav className="container my-5 py-5">
          <ul className="list-unstyled d-flex flex-column justify-content-center align-items-center">
            {[
              { name: "Home", path: "/" },
              { name: "Work", path: "/portfolio" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
              { name: "About", path: "/about" },
            ].map((link) => (
              <li className="my-4" key={link.name}>
                <a 
                  href={link.path} 
                  className={`menu-link display-5 text-decoration-none p-3 fw-semibold ${
                    hoveredLink && hoveredLink !== link.name ? 'blur' : ''
                  }`}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavbarLight;
