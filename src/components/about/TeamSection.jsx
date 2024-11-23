import React from 'react';

const TeamSection = ()=>{
    return(
        <section className='bg-dark'>
            <div className='section-light section-light-1'>
                <div className='container my-5 py-5'>
                    <h2 className='display-4 reveal-element'>
                        Meet Our Team
                    </h2>
                    <div className='d-flex justify-content-between my-5 reveal-element'>
                        <div className='col-3 team-card'>
                            <img src="https://images.pexels.com/photos/29393022/pexels-photo-29393022/free-photo-of-chien-robot-dans-un-decor-interieur-avec-des-chaises-rouges.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='team-card__image' alt="" />
                           <div className='p-3 text-center'>
                            <h3 className='fw-light fs-6'>
                                    Emily Clark
                                </h3>
                                <p className='fw-bold fs-6'>
                                Designer
                                </p>
                            </div>
                        </div>
                        <div className='col-3 team-card'>
                            <img src="https://images.pexels.com/photos/29393022/pexels-photo-29393022/free-photo-of-chien-robot-dans-un-decor-interieur-avec-des-chaises-rouges.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='team-card__image' alt="" />
                           <div className='p-3 text-center'>
                            <h3 className='fw-light fs-6'>
                                    Emily Clark
                                </h3>
                                <p className='fw-bold fs-6'>
                                Designer
                                </p>
                            </div>
                        </div>
                        <div className='col-3 team-card'>
                            <img src="https://images.pexels.com/photos/29393022/pexels-photo-29393022/free-photo-of-chien-robot-dans-un-decor-interieur-avec-des-chaises-rouges.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='team-card__image' alt="" />
                           <div className='p-3 text-center'>
                            <h3 className='fw-light fs-6'>
                                    Emily Clark
                                </h3>
                                <p className='fw-bold fs-6'>
                                Designer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;