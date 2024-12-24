import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavbarLight from "./common/NavbarLight";
import NavbarDark from './common/NavbarDark';
import Footer from "./common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ServiceDetails from "./pages/ServiceDetails";
import ProjectDetails from "./pages/ProjectDetails";
import TextRevealAnimation from "./common/TextRevealAnimation";

// Create NavigationBar component for conditional rendering
const NavigationBar = () => {
  const location = useLocation();
  const lightNavbarPaths = ['/about', '/contact'];
  
  return lightNavbarPaths.includes(location.pathname) ? <NavbarLight /> : <NavbarDark />;
};

function App() {
  useEffect(() => {
    const scrollFooter = (scrollY, heightFooter) => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.style.bottom = scrollY >= heightFooter ? '0px' : `-${heightFooter}px`;
      }
    };

    const initializeParallax = () => {
      const windowHeight = window.innerHeight;
      const footer = document.querySelector('footer');
      const content = document.querySelector('.content');
      const footerHeight = footer?.offsetHeight || 0;
      const heightDocument = windowHeight + (content?.offsetHeight || 0) + footerHeight + 30 ;

      const scrollAnimate = document.getElementById('scroll-animate');
      const scrollAnimateMain = document.getElementById('scroll-animate-main');
      const header = document.querySelector('header');
      const wrapperParallax = document.querySelector('.wrapper-parallax');

      if (scrollAnimate) scrollAnimate.style.height = `${heightDocument}px`;
      if (scrollAnimateMain) scrollAnimateMain.style.height = `${heightDocument}px`;
      if (header) {
        header.style.height = `${windowHeight}px`;
      }
      if (wrapperParallax) {
        wrapperParallax.style.marginTop = `${windowHeight * 1.2}px`;
      }

      scrollFooter(window.scrollY, footerHeight);
    };

    const handleScroll = () => {
      const scroll = window.scrollY;
      const footer = document.querySelector('footer');
      const scrollAnimateMain = document.getElementById('scroll-animate-main');
      const header = document.querySelector('header');
      const heightDocument = document.getElementById('scroll-animate')?.offsetHeight || 0;

      if (scrollAnimateMain) {
        scrollAnimateMain.style.top = `-${scroll}px`;
      }
      
      if (header) {
        header.style.backgroundPositionY = `${50 - (scroll * 100 / heightDocument)}%`;
      }

      scrollFooter(scroll, footer?.offsetHeight || 0);
    };

    // Initialize
    initializeParallax();

    // Event listeners
    window.addEventListener('load', initializeParallax);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', initializeParallax);

    // Cleanup
    return () => {
      window.removeEventListener('load', initializeParallax);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', initializeParallax);
    };
  }, []);

  return (
    <React.Fragment>
      <TextRevealAnimation/>
      <div id="scroll-animate">
        <div id="scroll-animate-main">
            <div className="wrapper-parallax">
              <Router>
                <NavigationBar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/service-details" element={<ServiceDetails />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/project-details" element={<ProjectDetails />} />
                </Routes>
              </Router> 
              <Footer />
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
