import React from 'react';
import ProjectCard from './ProjectCard';

const PortfolioList = () =>{
    return(
        <section className='bg-light'>
            <div className='section-dark section-dark-1'>
                <div className='container my-5 py-5 '>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </section>
    )
}
export default PortfolioList;