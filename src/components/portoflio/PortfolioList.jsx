import React from 'react';
import ProjectCard from './ProjectCard';

const portfolioData = [
  {
    id: 1,
    title: "Architecture Agency",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    link: "/project/architecture-agency"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    image: "https://images.pexels.com/photos/29310851/pexels-photo-29310851/free-photo-of-portrait-urbain-d-un-jeune-couple-elegant-en-exterieur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/project/ecommerce"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    image: "https://images.pexels.com/photos/20388175/pexels-photo-20388175/free-photo-of-oiseau-rue-building-batiment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/project/banking-app"
  },
  {
    id: 4,
    title: "Travel Booking System",
    image: "https://images.pexels.com/photos/16880290/pexels-photo-16880290/free-photo-of-route-rue-building-batiment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/project/travel-booking"
  }
];

const PortfolioList = () => {
  return (
    <section className='bg-light container-rounded'>
      <div className='section-dark section-dark-1'>
        <div className='container my-5 py-5'>
          {portfolioData.map((project) => (
            <div className='col-12 my-5'>
                <ProjectCard 
                key={project.id}
                title={project.title}
                image={project.image}
                link={project.link}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;