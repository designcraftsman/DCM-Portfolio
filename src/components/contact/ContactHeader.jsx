import React from 'react';

const ContactHeader = () =>{
    return(
        <section className='bg-dark'>
            <div className='contact-header contact-image py-5'>
               <div className='contact-header__content py-5 my-5 text-white'>
                <h1 className='display-2'>
                    Contact Us
                </h1>
                <p className='fs-4 col-6'>
                We prioritize close collaboration with our clients, ensuring that our web design solutions align perfectly with their needs and goals.
                </p>
               </div>
            </div>
        </section>
    );
}

export default ContactHeader;