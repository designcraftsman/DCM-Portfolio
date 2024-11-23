import React from 'react';

const Map = () => {
    return (
        <section className='bg-dark'>
            <div className='section-light section-light-1'>
                <div className='container my-5 py-5'>
                    <div className='col-12'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.2055191433624!2d-7.616501824504901!3d33.57401277334081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d37b52f4a71f%3A0xcb0ccfe02074227a!2sVersus%20Arena%20Gaming%20Center!5e0!3m2!1sen!2sma!4v1731657335589!5m2!1sen!2sma"
                            className='w-100 rounded reveal-element'
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Map;
