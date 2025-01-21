import React from 'react';
import quotes from '../assets/icons/testimonials/quotes.svg';

const Testimonials = () => {
  return (
    <div className='bg-dark'>
        <section className='section-light section-light-2 ' >
            <div className='container '>
                <div className='row align-items-center justify-content-between reveal-element'>
                <h2 className='display-2 col-lg-6 col-9'>
                What Our Clients Say About Us
                </h2>
                <div className='col-3'>
                    <img src={quotes} className='w-100' alt="" />
                </div>               
                </div> 
            </div>
            <div className='testimonial-slider h-100'>
                <div className='slider-track gap-5'>
                    <div className='testimonial-card'>
                        <div className='card-content'>
                            <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='user-image mb-3' alt="" />
                            <h5 className='author-name'>
                                John Doe                
                            </h5>
                            <p className='author-position'>
                                CEO, Company Name
                            </p>
                            <p className='testimonial-text'>
                                "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that deligh”
                            </p>
                        </div>
                    </div>
                    <div className='testimonial-card'>
                        <div className='card-content'>
                            <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='user-image mb-3' alt="" />
                            <h5 className='author-name'>
                                John Doe                
                            </h5>
                            <p className='author-position'>
                                CEO, Company Name
                            </p>
                            <p className='testimonial-text'>
                                "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that deligh”
                            </p>
                        </div>
                    </div>
                    <div className='testimonial-card'>
                        <div className='card-content'>
                            <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='user-image mb-3' alt="" />
                            <h5 className='author-name'>
                                John Doe                
                            </h5>
                            <p className='author-position'>
                                CEO, Company Name
                            </p>
                            <p className='testimonial-text'>
                                "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that deligh”
                            </p>
                        </div>
                    </div>
                    <div className='testimonial-card'>
                        <div className='card-content'>
                            <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='user-image mb-3' alt="" />
                            <h5 className='author-name'>
                                John Doe                
                            </h5>
                            <p className='author-position'>
                                CEO, Company Name
                            </p>
                            <p className='testimonial-text'>
                                "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that deligh”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </section>
    </div>
    );
};
export default Testimonials;