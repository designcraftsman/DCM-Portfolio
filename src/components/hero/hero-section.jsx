import React from 'react';
import NavbarDark from '../../common/NavbarDark';
import { IoChevronForwardSharp } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className='bg-dark'>
        <section className='section-light__hero py-5' >
            <NavbarDark />
            <div className='d-flex py-5 justify-content-between align-items-center'>
                <div className='col-5 m-auto'>
                    <h1 className='display-3 '>
                    Web Design Rutland 
                    from a boutique 
                    agency
                    </h1>
                    <p className='fw-light  fs-5'>
                    We are a website design agency based in Rutland, East Midlands, serving clients across the UK. We specialise in creating bespoke websites for small businesses and individuals.
                    </p>
                    <button className='btn btn-transparent border-dark  border-2'>
                        Contact Us  <span className=''><IoChevronForwardSharp/></span>
                    </button>
                </div>
                <div className='col-5 m-auto'>
                    <img src="https://images.pexels.com/photos/18267108/pexels-photo-18267108/free-photo-of-bois-nature-foret-arbres.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid rounded-5' alt="" />
                </div>
            </div>
        </section>
    </div>
  );
};

export default HeroSection;