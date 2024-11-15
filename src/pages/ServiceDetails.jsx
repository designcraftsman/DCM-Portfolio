import React from 'react';
import NavbarDark from '../common/NavbarDark';
import HeaderLight from '../common/HeaderLight';
import ContactSection from '../components/contact/ContactSection';


const ServiceDetails = () => {
    return (
        <React.Fragment>
            <NavbarDark />
            <HeaderLight title="Strategy & Research" />
            <section className='bg-light'>
                <div className='section-dark'>
                    <div className='container my-5 py-5'>
                        <h2 className='display-4'>
                            Our Process
                        </h2>
                        <p className='fs-5'>
                        We’re looking for a Junior – Mid-level Designer to join our team. You’ll support the execution of graphic and digital design projects, working closely with the internal team of creatives, project managers, the Creative Director and development team to blend user needs and business goals into seamless, effective design experiences. You will need to demonstrate a fundamental understanding of design principles, an openness to learn and take direction, along with a strong aesthetic design intuition.
                        Internal team of creatives, project managers, the Creative Director and development team to blend user needs and business goals into seamless, effective design experiences. You will need to demonstrate a fundamental understanding of design principles
                        </p>
                        <div className='row my-5 align-items-center'>
                            <div className='col-5'>
                                <div className='d-flex justify-content-between gap-5 align-items-start my-3'>
                                    <span className='border p-3 rounded-circle display-4'>
                                        1
                                    </span>
                                    <div>
                                        <h4 className='fw-bold fs-4'>
                                        Planning and Sketching
                                        </h4>
                                        <p className='fs-6'>
                                        Modern and unique design practically point of view, it risks not meeting the huge expectations
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between gap-5 align-items-start my-3'>
                                    <span className='border p-3 rounded-circle display-4'>
                                        2
                                    </span>
                                    <div>
                                        <h4 className='fw-bold fs-4'>
                                        Team working
                                        </h4>
                                        <p className='fs-6'>
                                        Modern and unique design practically point of view, it risks not meeting the huge expectations
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between gap-5 align-items-start my-3'>
                                    <span className='border p-3 rounded-circle display-4'>
                                        3
                                    </span>
                                    <div>
                                        <h4 className='fw-bold fs-4'>
                                        Flowchart and wireframe
                                        </h4>
                                        <p className='fs-6'>
                                        Modern and unique design practically point of view, it risks not meeting the huge expectations
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between gap-5 align-items-start my-3'>
                                    <span className='border p-3 rounded-circle display-4'>
                                        4
                                    </span>
                                    <div>
                                        <h4 className='fw-bold fs-4'>
                                        User experience Testing
                                        </h4>
                                        <p className='fs-6'>
                                        Modern and unique design practically point of view, it risks not meeting the huge expectations
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='col-5 mx-auto'>
                                <img src="https://images.pexels.com/photos/28948420/pexels-photo-28948420/free-photo-of-cathedrale-gothique-reflet-dans-une-flaque-d-eau-sur-un-pave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded my-3" alt="" />
                                <img src="https://images.pexels.com/photos/18099344/pexels-photo-18099344/free-photo-of-noir-et-blanc-building-batiment-immeuble.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid rounded my-3' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection />
        </React.Fragment>
    );
}

export default ServiceDetails;