import React from 'react';
import quotes from '../assets/icons/testimonials/quotes.svg';

const Testimonials = () => {
  return (
    <div className='bg-dark'>
        <section className='section-light' >
            <div className='container'>
                <div className='row align-items-center justify-content-between'>
                <h2 className='display-2 col-6'>
                What Our Clients Say About Us
                </h2>
                <div className='col-3'>
                    <img src={quotes} className='w-100' alt="" />
                </div>               
                </div> 
            </div>
            <div className='d-flex gap-3'>
                <div className='col-4 border rounded border-dark'>
                  <div className='d-flex flex-column align-items-start justify-content-center p-3'>
                    <div className='d-flex gap-3 align-items-center'>
                        <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='user-image' alt="" />
                        <div>
                            <h5 className='fs-6 fw-light m-0'>
                                 John Doe                
                            </h5>
                            <p className='fs-6 fw-semibold m-0'>
                                CEO, Company Name
                            </p>
                        </div>
                    </div>
                    
                    <p className='fs-6 my-3'>
                    "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that deligh”
                    </p>
                  </div>
                </div>
                <div className='col-4 border rounded border-dark'>
                  <div className='d-flex flex-column align-items-start justify-content-center p-3'>
                    <div className='d-flex gap-3 align-items-center'>
                        <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='user-image' alt="" />
                        <div>
                            <h5 className='fs-6 fw-light m-0'>
                                 John Doe                
                            </h5>
                            <p className='fs-6 fw-semibold m-0'>
                                CEO, Company Name
                            </p>
                        </div>
                    </div>
                    
                    <p className='fs-6 my-3'>
                    "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that deligh”
                    </p>
                  </div>
                </div>
                <div className='col-4 border rounded border-dark'>
                  <div className='d-flex flex-column align-items-start justify-content-center p-3'>
                    <div className='d-flex gap-3 align-items-center'>
                        <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='user-image' alt="" />
                        <div>
                            <h5 className='fs-6 fw-light m-0'>
                                 John Doe                
                            </h5>
                            <p className='fs-6 fw-semibold m-0'>
                                CEO, Company Name
                            </p>
                        </div>
                    </div>
                    
                    <p className='fs-6 my-3'>
                    "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that deligh”
                    </p>
                  </div>
                </div>
                <div className='col-4 border rounded border-dark'>
                  <div className='d-flex flex-column align-items-start justify-content-center p-3'>
                    <div className='d-flex gap-3 align-items-center'>
                        <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='user-image' alt="" />
                        <div>
                            <h5 className='fs-6 fw-light m-0'>
                                 John Doe                
                            </h5>
                            <p className='fs-6 fw-semibold m-0'>
                                CEO, Company Name
                            </p>
                        </div>
                    </div>
                    
                    <p className='fs-6 my-3'>
                    "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that deligh”
                    </p>
                  </div>
                </div>
            </div>
         </section>
    </div>
    );
};
export default Testimonials;