import React from 'react';

const HeaderLight = ({ title }) => {
    return (
        <header className='bg-dark'>
            <div className='header-light'>
                <div className='h-100 position-relative'>
                    <h1 className='display-1 col-6 header-text reveal-element'>
                        {title}
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default HeaderLight;
