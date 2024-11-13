import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const PortfolioSection = () =>{
    return(
        <div className="bg-light">
        <section className="section-dark">
            <div className="container my-5  py-5">
                <h2 className="display-3 col-6">
                    Featured Projects
                </h2>
                <p className="fs-5 col-6">
                As dedicated website designers in Rutland, we ensure that every project is a partnership, fostering open communication and shared vision to create impactful digital experiences.
                </p>
                <div className="row mt-5 ">
                    <div className="col-6  my-3">
                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="img-fluid rounded-5" />
                        <div className="d-flex justify-content-between align-content-center mt-3">
                            <h4 className="fs-4 fw-light">
                                Architecture Agency
                            </h4>
                            <a href="/" className="btn btn-transparent text-white border">
                                Learn More <IoChevronForwardSharp />
                            </a>
                        </div>
                    </div>
                    <div className="col-6 m-auto my-3">
                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="img-fluid rounded-5" />
                        <div className="d-flex justify-content-between align-content-center mt-3">
                            <h4 className="fs-4 fw-light">
                                Architecture Agency
                            </h4>
                            <a href="/" className="btn btn-transparent text-white border">
                                Learn More <IoChevronForwardSharp />
                            </a>
                        </div>
                    </div>
                    <div className="col-6 m-auto my-3">
                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="img-fluid rounded-5" />
                        <div className="d-flex justify-content-between align-content-center mt-3">
                            <h4 className="fs-4 fw-light">
                                Architecture Agency
                            </h4>
                            <a href="/" className="btn btn-transparent text-white border">
                                Learn More <IoChevronForwardSharp />
                            </a>
                        </div>
                    </div>
                    <div className="col-6 m-auto my-3">
                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="img-fluid rounded-5" />
                        <div className="d-flex justify-content-between align-content-center mt-3">
                            <h4 className="fs-4 fw-light">
                                Architecture Agency
                            </h4>
                            <a href="/" className="btn btn-transparent text-white border">
                                Learn More <IoChevronForwardSharp />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default PortfolioSection;