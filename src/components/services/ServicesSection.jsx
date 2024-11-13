import React from "react";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import Service1   from "../../assets/icons/services/1.svg";
import Service2   from "../../assets/icons/services/2.svg";

const ServicesSection = () =>{
    return (
        <div className="bg-light">
        <section className="section-dark">
            <div className="container my-5 py-5">
                <h2 className="display-3 col-5">
                    Solutions for Your Vision
                </h2>
                <p className="fs-4 col-7 ">
                    We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered.
                </p>

                <div className="row mt-5 gap-3 justify-content-between">
                    <div className="col-3 text-center">
                        <div className="">
                            <img src={Service1} alt="" className="service-icon " />
                        </div>
                        <h3 className="fs-4">
                            Web Design
                        </h3>
                        <p>
                        We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered
                        </p>
                    </div> 
                    <div className="col-3 text-center">
                        <div className="">
                            <img src={Service2} alt="" className="service-icon " />
                        </div>
                        <h3 className="fs-4">
                            Web Design
                        </h3>
                        <p>
                        We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered
                        </p>
                    </div> 
                    <div className="col-3 text-center">
                        <div className="">
                            <img src={Service1} alt="" className="service-icon " />
                        </div>
                        <h3 className="fs-4">
                            Web Design
                        </h3>
                        <p>
                        We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered
                        </p>
                    </div> 
                    <div className="col-3 text-center">
                        <div className="">
                            <img src={Service1} alt="" className="service-icon " />
                        </div>
                        <h3 className="fs-4">
                            Web Design
                        </h3>
                        <p>
                        We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered
                        </p>
                    </div> 
                    <div className="col-3 text-center">
                        <div className="">
                            <img src={Service1} alt="" className="service-icon " />
                        </div>
                        <h3 className="fs-4">
                            Web Design
                        </h3>
                        <p>
                        We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered
                        </p>
                    </div> 
                    <div className="col-3 text-center">
                        <div className="">
                            <img src={Service1} alt="" className="service-icon " />
                        </div>
                        <h3 className="fs-4">
                            Web Design
                        </h3>
                        <p>
                        We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered
                        </p>
                    </div> 
                </div>
            </div>
        </section>
    </div>
    ); 
}

export default ServicesSection;