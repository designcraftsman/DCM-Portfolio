import React from "react";

const ContactSection = () =>{
    return(
        <section className="bg-dark">
            <div className="section-light section-light-1">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-5">
                            <h3 className="display-4">
                            Let’s Bring Your Vision to Life
                            </h3>
                            <p className="fs-5">
                            We’re here to help you turn ideas into impactful results. Whether you have questions, need more information about our services, or are ready to start a project, don’t hesitate to get in touch. Reach out, and let’s create something extraordinary together!
                            </p>
                            <button className="btn btn-transparent border border-dark rounded">
                                Contact Us
                            </button>
                        </div>
                        <div className="col-5 m-auto">
                            <img src="https://images.pexels.com/photos/28948420/pexels-photo-28948420/free-photo-of-cathedrale-gothique-reflet-dans-une-flaque-d-eau-sur-un-pave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default ContactSection;