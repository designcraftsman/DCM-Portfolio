import React from 'react';
import NavbarLight from '../common/NavbarLight';
import ContactHeader from '../components/contact/ContactHeader';
import Map from '../components/contact/Map';
import location from '../assets/icons/contact/location.svg';
import phone from '../assets/icons/contact/phone.svg';
import email from '../assets/icons/contact/mail.svg';


const Contact = () => {
    return (
       <React.Fragment>
            <ContactHeader />
            <section className='content'>
                <section className='bg-light container-rounded'>
                    <div className='section-dark section-dark-1'>
                        <div className='container my-5 py-5'>
                            <div className='row gap-3'>
                                <div className='col-lg-5 col-12'>
                                    <div className='d-flex align-items-center justify-content-start gap-3 my-4'>
                                        <img src={location} className='contact-icon' alt="" />
                                        <p className='fs-5 m-0'>
                                        Mirpur 12, Block C, Dhaka, BD.
                                        </p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-start gap-3 my-4'>
                                        <img src={phone} className='contact-icon' alt="" />
                                        <p className='fs-5 m-0'>
                                        +55 (9900) 666 22
                                        </p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-start gap-3 my-4'>
                                        <img src={email} className='contact-icon' alt="" />
                                        <p className='fs-5 m-0'>
                                        info.mirpur@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-5 col-12 m-auto'>
                                    <form className='row gap-5'>
                                        <div className='col-lg-5 col-12 border-bottom'>
                                            <p className='fs-4 m-0'>Your Name</p>
                                        </div>
                                        <div className='col-lg-5 col-12 border-bottom'>
                                            <p className='fs-4 m-0'>Your Email</p>
                                        </div>
                                        <div className='col-12 border-bottom pb-5'>
                                            <p className='fs-4 m-0'>Your Message</p>
                                        </div>
                                        <button className='btn btn-transparent border rounded  text-white'>
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Map/>
            </section>
       </React.Fragment>
    );
};
export default Contact;