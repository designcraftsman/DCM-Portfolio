import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import ProjectCard from "./ProjectCard";

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
    image: "https://images.pexels.com/photos/29310851/pexels-photo-29310851/free-photo-of-portrait-urbain-d-un-jeune-couple-elegant-en-exterieur.jpeg",
    link: "/project/ecommerce"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    image: "https://images.pexels.com/photos/20388175/pexels-photo-20388175/free-photo-of-oiseau-rue-building-batiment.jpeg",
    link: "/project/banking-app"
  },
  {
    id: 4,
    title: "Travel Booking System",
    image: "https://images.pexels.com/photos/16880290/pexels-photo-16880290/free-photo-of-route-rue-building-batiment.jpeg",
    link: "/project/travel-booking"
  }
];

const PortfolioSection = () => {
  return (
    <div className="bg-light">
      <section className="section-dark section-dark-2 ">
        <div className="container">
          <h2 className="display-3 col-6 reveal-element">
            Featured Projects
          </h2>
          <p className="fs-5 col-6 reveal-element">
            As dedicated website designers in Rutland, we ensure that every project is a partnership, fostering open communication and shared vision to create impactful digital experiences.
          </p>
          <div className="row mt-5  d-flex justify-content-between">
            {portfolioData.map((project) => (
            <div className="col-6 my-3 ">
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
    </div>
  );
}

export default PortfolioSection;