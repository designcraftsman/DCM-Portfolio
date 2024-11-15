import React from 'react';
import AboutHeader from '../components/about/AboutHeader';
import NavbarLight from '../common/NavbarLight';
import StorySection from '../components/about/StorySection';
import TeamSection from '../components/about/TeamSection';
import MissionSection from '../components/about/MissionSection';
import Testimonials from '../components/Testimonials';

const About = () =>{
    return(
       <React.Fragment>
            <NavbarLight />
            <AboutHeader />
            <StorySection />
            <TeamSection />
            <MissionSection />
            <Testimonials />
       </React.Fragment>
    );
}

export default About;