import React, { useState } from "react";
import Service1 from "../../assets/icons/services/1.svg";
import Service2 from "../../assets/icons/services/2.svg";
import Service3 from "../../assets/icons/services/3.svg";
import Service4 from "../../assets/icons/services/4.svg";
import Service5 from "../../assets/icons/services/5.svg";
import Service6 from "../../assets/icons/services/6.svg";

const servicesData = [
  {
    id: 1,
    icon: Service1,
    title: "Web Design",
    description: "We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered"
  },
  {
    id: 2,
    icon: Service2,
    title: "Web Development",
    description: "We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered"
  },
  {
    id: 3,
    icon: Service3,
    title: "SEO Optimization",
    description: "We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered"
  },
  {
    id: 4,
    icon: Service4,
    title: "Digital Marketing",
    description: "We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered"
  },
  {
    id: 5,
    icon: Service5,
    title: "Content Strategy",
    description: "We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered"
  },
  {
    id: 6,
    icon: Service6,
    title: "Brand Design",
    description: "We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered"
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="bg-light container-rounded">
      <section className="section-dark section-dark-1 ">
        <div className="container ">
          <h2 className="display-6  col-5 reveal-element">
            Solutions for Your Vision
          </h2>
          <p className="fs-4 col-7 reveal-element">
            We offer a range of high-quality services to help you get your business online. From web design to SEO, we have you covered.
          </p>

          <div className="row mt-5 gap-3 justify-content-between">
            {servicesData.map((service) => (
              <a 
                href="/service-details" 
                key={service.id} 
                className={`col-3 text-decoration-none service-card ${
                  hoveredService && hoveredService !== service.id ? 'blur' : ''
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="service-content">
                  <div className="reveal-element m-0 p-0">
                    <img src={service.icon} alt={service.title} className="service-icon" />
                  </div>
                  <h3 className="fs-4 reveal-element">
                    {service.title}
                  </h3>
                  <p className="reveal-element">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesSection;