import React from "react";
import { IoChevronDown } from "react-icons/io5";

const FAQs = () =>{
    return (
        <div className="bg-dark">
            <section className="section-light">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-5">
                        <h2 className="display-4">
                            FAQ's
                        </h2>
                        <p className="fs-5">
                        Here, you'll find answers to common questions about our web design services in Rutland. Whether you're launching a new site or improving an existing one, this section will help guide you. If you don't see your question, feel free to reach out to us directly.
                        </p>
                    </div>
                    <div className="col-5 mx-auto">
                        <div className="d-flex justify-content-between border-bottom border-dark my-3">
                            <p className="fs-5">How much does a website cost?</p>
                            <span>
                                <IoChevronDown/>
                            </span>
                        </div>
                        <div className="d-flex justify-content-between border-bottom border-dark my-3">
                            <p className="fs-5">How long will my website take?</p>
                            <span>
                                <IoChevronDown/>
                            </span>
                        </div>
                        <div className="d-flex justify-content-between border-bottom border-dark my-3">
                            <p className="fs-5">Can you do web development only?</p>
                            <span>
                                <IoChevronDown/>
                            </span>
                        </div>
                        <div className="d-flex justify-content-between border-bottom border-dark my-3">
                            <p className="fs-5">How much does a website cost?</p>
                            <span>
                                <IoChevronDown/>
                            </span>
                        </div>
                        <div className="d-flex justify-content-between border-bottom border-dark my-3">
                            <p className="fs-5">How much does a website cost?</p>
                            <span>
                                <IoChevronDown/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default FAQs;