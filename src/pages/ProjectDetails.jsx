import React from 'react';
import NavbarDark from '../common/NavbarDark';
import PortfolioHeader from '../components/portoflio/PortfolioHeader';
import AboutSection from '../components/about/AboutSection';

const ProjectDetails = () => {
  return (
    <React.Fragment>
        <PortfolioHeader />
        <div className='content'>
            <section className='bg-light'>
                <div className='section-dark section-dark-1'>
                    <div className='container my-5 py-5'>
                        <div className='row my-5'>
                            <div className='col-lg-6 col-12 my-3'>
                                <h3 className='fs-1'>
                                Build, streamline and evolve together with solution
                                </h3>
                            </div>
                            <div className='col-lg-6 col-12 my-3'>
                                <p className='fs-5'>
                                Always ready to push the boundaries, especially when it comes to our own platform, Our analytical eye to create a site that was visually engaging and also optimised for maximum performance.
                                </p>
                            </div>
                            <div className='col-lg-6 col-12 my-3'>
                                <img src="https://images.pexels.com/photos/29310851/pexels-photo-29310851/free-photo-of-portrait-urbain-d-un-jeune-couple-elegant-en-exterieur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid rounded' alt="" />
                            </div>
                            <div className='col-lg-6 col-12 my-3'>
                                <img src="https://images.pexels.com/photos/19394802/pexels-photo-19394802/free-photo-of-homme-lunettes-de-soleil-veste-chapeau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid' alt="" />
                            </div>
                        </div>
                        <h3 className='fs-1'>
                        Build, streamline and evolve together with solution
                        </h3>
                        <p className='fs-5'>
                        Always ready to push the boundaries, especially when it comes to our own platform, Our analytical eye to create a site that was visually engaging and also optimised for maximum performance. It also perfectly reflects the journey to help it tell a story to increase its understanding and drive action. To create a site that was visually engaging for maximum performance.
                        </p>
                    </div>
                </div>
            </section>
            <AboutSection />
        </div>
    </React.Fragment>
    
  );
};

export default ProjectDetails;