import React, { useEffect } from 'react';
import HeroSection from '../components/hero/hero-section';
import ServicesSection from '../components/services/ServicesSection';
import AboutSection from '../components/about/AboutSection';
import PortfolioSection from '../components/portoflio/PortfolioSection';
import Testimonials from '../components/Testimonials';
import Footer from '../common/Footer';

const Home = () => {
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
    <div id="scroll-animate">
      <div id="scroll-animate-main">
        <div className="wrapper-parallax">
          <HeroSection />
          <section className='content'>
            <ServicesSection />
            <AboutSection />
            <PortfolioSection />
            <Testimonials />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;