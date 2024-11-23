import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForwardSharp } from "react-icons/io5";

const ProjectCard = ({ title, image, link }) => {
  return (
    <Link to="/project-details" className="my-5 project-card reveal-element text-decoration-none">
      <img 
        src={image} 
        alt={title} 
        className="project-card__image"
      />
      <div className="d-flex justify-content-between align-items-center text-white mt-3">
        <h4 className="fs-4 fw-light">
          {title}
        </h4>
        <button className="btn contact-us-btn-light">
          <span className="btn-text">Learn More</span> 
          <span className="btn-icon"><IoChevronForwardSharp /></span>
        </button>
      </div>
    </Link>
  );
};

export default ProjectCard;