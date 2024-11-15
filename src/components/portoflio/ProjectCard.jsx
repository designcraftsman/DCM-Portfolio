import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const ProjectCard = () =>{
    return(
        <div className="col-12 my-5 project-card">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="project-card__image " />
            <div className="d-flex justify-content-between align-content-center mt-3">
                <h4 className="fs-4 fw-light">
                    Architecture Agency
                </h4>
                <a href="/" className="btn btn-transparent text-white border">
                    Learn More <IoChevronForwardSharp />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;