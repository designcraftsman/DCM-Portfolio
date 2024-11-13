import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarLight from "./common/NavbarLight";
import NavbarDark from './common/NavbarDark';
import Footer from "./common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";




function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
