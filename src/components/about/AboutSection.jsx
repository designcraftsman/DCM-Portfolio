import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const AboutSection = () => {
    return (
    <div className="bg-dark  d-flex align-items-center"> {/* Add min-vh-100 and flexbox */}
        <section className="section-light section-light-1 bg-image text-dark w-100 ">
            <div className="container h-100 d-flex flex-column justify-content-center"> {/* Add flexbox */}
                <h2 className="display-6 col-5 reveal-element">
                    Much in Little
                </h2>
                <p className="fs-5 col-7 reveal-element">
                    Rōta has been servicing clients across the UK from Oakham for the past 15 years and have a vast amount of experience works with clients of all shapes and sizes. If you'd like to have a chat with us about how we can help you with your next digital project please get in touch
                </p>
                <div className="reveal-element">
                    <button className="btn contact-us-btn">
                        <span className="btn-text">About Us</span> 
                        <span className="btn-icon"><IoChevronForwardSharp /></span>
                    </button>
                </div>
            </div>
        </section>
    </div>
    )
}

export default AboutSection;