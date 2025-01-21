import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const ContactSection = () =>{
    return(
        <section className="bg-dark">
            <div className="section-light section-light-1">
                <div className="container my-5 py-5">
                    <div className="row gap-3">
                        <div className="col-lg-5 col-12">
                            <h3 className="display-4 reveal-element">
                            Let’s Bring Your Vision to Life
                            </h3>
                            <p className="fs-5 reveal-element">
                            We’re here to help you turn ideas into impactful results. Whether you have questions, need more information about our services, or are ready to start a project, don’t hesitate to get in touch. Reach out, and let’s create something extraordinary together!
                            </p>
                            <div className="reveal-element">
                                <button className="btn contact-us-btn">
                                    <span className="btn-text">Contact Us</span> 
                                    <span className="btn-icon"><IoChevronForwardSharp /></span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 m-auto reveal-element">
                            <img src="https://images.pexels.com/photos/28948420/pexels-photo-28948420/free-photo-of-cathedrale-gothique-reflet-dans-une-flaque-d-eau-sur-un-pave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default ContactSection;