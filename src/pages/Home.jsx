import React from 'react';
import HeroSection from '../components/hero/hero-section';
import ServicesSection from '../components/services/ServicesSection';
import AboutSection from '../components/about/AboutSection';
import PortfolioSection from '../components/portoflio/PortfolioSection';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <Testimonials />
    </React.Fragment>
  );
}

export default Home;