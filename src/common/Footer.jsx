import React from 'react';
import { IoChevronForwardSharp } from "react-icons/io5";
import Socials from '../assets/icons/footer/1.svg';
import Contact from '../assets/icons/footer/2.svg';
import { CiFacebook , CiInstagram , CiLinkedin , CiTwitter} from "react-icons/ci";


const Footer =() => {
  return (
    <footer className="bg-dark text-white  pt-5">
      <div className="container my-0 py-0">
        <div className='row '>
          <div className='col-lg-6 col-10 border-end border-1  mx-auto'>
            <img src={Contact} className='service-icon' alt="" />
            <h3 className='display-6'>Ready to Get Started?</h3>
            <p className='fs-6'>If our work resonates with you, let’s chat! We’re now scheduling projects for November and beyond.</p>
            <button className="btn contact-us-btn-light">
              <span className="btn-text">Contact Us</span> 
              <span className="btn-icon"><IoChevronForwardSharp /></span>
            </button>
          </div>
          <div className='col-lg-6 col-10 py-5  mx-auto ps-lg-5'>
            <img src={Socials} className='service-icon' alt="" />
            <h3 className='display-6'>Stay Connected with Us!</h3>
            <p className='fs-6'>Follow us on social media to see our latest projects, get inspired, and stay updated on what’s happening behind the scenes!</p>
            <ul className='list-unstyled d-flex gap-3 '>
              <li>
                <a href="facebook.com" className='text-decoration-none text-white fs-1'>
                  <CiFacebook />
                </a>
              </li>
              <li>
                <a href="facebook.com" className='text-decoration-none text-white fs-1'>
                  <CiInstagram />
                </a>
              </li>
              <li>
                <a href="facebook.com" className='text-decoration-none text-white fs-1'>
                  <CiLinkedin />
                </a>
              </li>
              <li>
                <a href="facebook.com" className='text-decoration-none text-white fs-1'>
                  <CiTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='m-0 ' />
      <p className='text-center m-0 py-3'>&copy; 2023 Your Company Name. All rights reserved.</p>
      
    </footer>
  );
}

export default Footer;