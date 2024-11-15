import React from "react";
import NavbarDark from "../common/NavbarDark";
import HeaderLight from "../common/HeaderLight";
import PortfolioList from "../components/portoflio/PortfolioList";
import ContactSection from "../components/contact/ContactSection";

const Portofolio = ()=>{
    return(
        <React.Fragment>
            <NavbarDark/>
            <HeaderLight title="Featured Projects"/>
            <PortfolioList/>
            <ContactSection/>
        </React.Fragment>
    );
}

export default Portofolio;