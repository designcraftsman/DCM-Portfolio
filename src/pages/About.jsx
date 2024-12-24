import React from 'react';
import AboutHeader from '../components/about/AboutHeader';
import StorySection from '../components/about/StorySection';
import TeamSection from '../components/about/TeamSection';
import MissionSection from '../components/about/MissionSection';
import Testimonials from '../components/Testimonials';

const About = () =>{
    return(
        <React.Fragment>
            <AboutHeader />
            <section className='content'>
                    <StorySection />
                    <TeamSection />
                    <MissionSection />
                    <Testimonials />
            </section>
       </React.Fragment>
    );
}

export default About;