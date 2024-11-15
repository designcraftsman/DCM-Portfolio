import React from 'react';
import NavbarDark from '../common/NavbarDark';
import HeaderLight from '../common/HeaderLight';
import ServicesSection from '../components/services/ServicesSection';
import FAQsSection from '../components/faqs/FAQs';

const Services =() =>{
    return (
        <React.Fragment>
            <NavbarDark/>
            <HeaderLight title="Services Tailored to You."/>
            <ServicesSection/>
            <FAQsSection/>
        </React.Fragment>
    );
}

export default Services;