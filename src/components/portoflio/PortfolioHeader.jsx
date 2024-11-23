import React from 'react';

const HeaderLight = () => {
    return (
        <section className='bg-dark'>
            <div className='portfolio-header py-5 '>
                <div className='container my-5 py-5 '>
                    <img src="https://images.pexels.com/photos/29333962/pexels-photo-29333962/free-photo-of-la-rue-animee-de-shibuya-a-la-lumiere-du-jour-a-tokyo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='col-12  portfolio-header__image reveal-element' alt="" />
                    <h1 className='display-1 my-5 reveal-element'>
                    Architecture Agency
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default HeaderLight;
