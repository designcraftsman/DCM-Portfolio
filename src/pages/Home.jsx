import React, { useEffect } from 'react';
import HeroSection from '../components/hero/hero-section';
import ServicesSection from '../components/services/ServicesSection';
import AboutSection from '../components/about/AboutSection';
import PortfolioSection from '../components/portoflio/PortfolioSection';
import Testimonials from '../components/Testimonials';
import Footer from '../common/Footer';

const Home = () => {
  return (
    <React.Fragment>
          <HeroSection />
          <section className='content'>
            <ServicesSection />
            <AboutSection />
            <PortfolioSection />
            <Testimonials />
          </section>
    </React.Fragment>
  );
};

export default Home;