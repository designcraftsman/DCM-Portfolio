import React from 'react';
import { IoChevronForwardSharp } from "react-icons/io5";
import Socials from '../assets/icons/footer/1.svg';
import Contact from '../assets/icons/footer/2.svg';

const Footer =() => {
  return (
    <footer className="bg-dark text-white ">
      <div className="container">
        <div className='row'>
          <div className='col-md-6 border-end py-5 mx-auto'>
            <img src={Contact} className='service-icon' alt="" />
            <h3 className='display-5'>Ready to Get Started?</h3>
            <p className='fs-5'>If our work resonates with you, let’s chat! We’re now scheduling projects for November and beyond.</p>
            <button href="/" className='btn btn-trasparent text-white border-white'>Contact Us <IoChevronForwardSharp/></button>
          </div>
          <div className='col-md-6  py-5  mx-auto ps-5'>
            <img src={Socials} className='service-icon' alt="" />
            <h3 className='display-5'>Stay Connected with Us!</h3>
            <p className='fs-5'>Follow us on social media to see our latest projects, get inspired, and stay updated on what’s happening behind the scenes!</p>
            <button href="/" className='btn btn-trasparent text-white border-white'>Contact Us <IoChevronForwardSharp/></button>
          </div>
        </div>
      </div>
      <hr className='m-0 ' />
      <p className='text-center m-0 py-3'>&copy; 2023 Your Company Name. All rights reserved.</p>
      
    </footer>
  );
}

export default Footer;