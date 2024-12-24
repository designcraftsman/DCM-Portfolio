import React from "react";
import HeaderLight from "../common/HeaderLight";
import PortfolioList from "../components/portoflio/PortfolioList";
import ContactSection from "../components/contact/ContactSection";

const Portofolio = ()=>{
    return(
        <React.Fragment>
            <HeaderLight title="Featured Projects"/>
            <section className="content">
                <PortfolioList/>
                <ContactSection/>
            </section>
        </React.Fragment>
    );
}

export default Portofolio;