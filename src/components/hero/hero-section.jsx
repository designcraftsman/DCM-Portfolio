import React, { useEffect } from 'react';
import NavbarDark from '../../common/NavbarDark';
import { IoChevronForwardSharp } from "react-icons/io5";

const HeroSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    });

    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <header className='bg-dark'>
      <section className='section-light__hero py-5'>
        <div className='container d-flex   justify-content-between align-items-center '>
          <div className='col-5'>
            <h1 className='display-5  mb-3'>
              <span className='reveal-text d-block'>Web Design Rutland</span>
              <span className='reveal-text d-block'>from a boutique</span>
              <span className='reveal-text d-block'>agency</span>
            </h1>
            <p className='fs-5 reveal-text mb-3' >
              We are a website design agency based in Rutland, East Midlands, serving clients across the UK. We specialise in creating bespoke websites for small businesses and individuals.
            </p>
            <div className='reveal-text button-delay'>
            <button className="btn contact-us-btn">
              <span className="btn-text">Contact Us</span> 
              <span className="btn-icon"><IoChevronForwardSharp /></span>
            </button>
            </div>
          </div>
          <div className='col-6 '>
            <img 
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              className='img-fluid rounded-5 reveal-text' 
              alt="" 
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;