import React from 'react';

const ContactHeader = () =>{
    return(
        <header className='bg-dark'>
            <div className='contact-header contact-image py-5'>
               <div className='contact-header__content py-5 my-5 text-white'>
                <h1 className='display-2 reveal-element'>
                    Contact Us
                </h1>
                <p className='fs-4 col-lg-6 col-10  reveal-element'>
                We prioritize close collaboration with our clients, ensuring that our web design solutions align perfectly with their needs and goals.
                </p>
               </div>
            </div>
        </header>
    );
}

export default ContactHeader;