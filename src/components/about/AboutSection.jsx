import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const AboutSection = () =>{
    return (
    <div className="bg-dark">
        <section className="section-light section-light-1 bg-image text-dark ">
            <div className="container my-5 py-5">
                <h2 className="display-3 col-5">
                Much in Little
                </h2>
                <p className="fs-4 col-7">
                Rōta has been servicing clients across the UK from Oakham for the past  15 years and have a vast amount of experience works with clients of all  shapes and sizes. If you’d like to have a chat with us about how we can  help you with your next digital project please get in touch
                </p>
                <button className='btn btn-transparent border-dark  border-2'>
                    About Us  <span className=''><IoChevronForwardSharp/></span>
                </button>
            </div>
        </section>

    </div>
    )
}

export default AboutSection;