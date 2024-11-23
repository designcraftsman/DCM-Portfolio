import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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


function App() {
  return (
    <React.Fragment>
      <TextRevealAnimation/>
      <NavbarDark />
      <Router>
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
    </React.Fragment>
  );
}

export default App;
