import React from 'react';
import NavbarDark from '../common/NavbarDark';
import HeaderLight from '../common/HeaderLight';
import ServicesSection from '../components/services/ServicesSection';
import FAQsSection from '../components/faqs/FAQs';

const Services =() =>{
    return (
        <React.Fragment>
            <HeaderLight title="Services Tailored to You."/>
            <div className='content'>
                <ServicesSection/>
                <FAQsSection/>
            </div>
        </React.Fragment>
    );
}

export default Services;