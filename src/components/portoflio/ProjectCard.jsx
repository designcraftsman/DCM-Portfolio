import React, { useEffect, useRef, useState } from "react";

const ProjectCard = ({ title, image, link, isBlurred, onMouseEnter, onMouseLeave }) => {
  const imageRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glowBackground, setGlowBackground] = useState('');
  
  function rotateToMouse(e) {
    const bounds = imageRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x**2 + center.y**2);
    
    setTransform(`
      scale3d(1.05, 1.05, 1)
      rotate3d(
        ${center.y / 400},
        ${-center.x / 400},
        0,
        ${Math.log(distance)* 4}deg
      )
    `);
    
    setGlowBackground(`
      radial-gradient(
        circle at
        ${center.x * 4 + bounds.width/2}px
        ${center.y * 4 + bounds.height/2}px,
        #ffffff55,
        #0000000f
      )
    `);
  }

  useEffect(() => {
    const image = imageRef.current;
    
    const handleMouseEnter = () => {
      document.addEventListener('mousemove', rotateToMouse);
    };
    
    const handleMouseLeave = () => {
      document.removeEventListener('mousemove', rotateToMouse);
      setTransform('');
      setGlowBackground('');
    };

    if (image) {
      image.addEventListener('mouseenter', handleMouseEnter);
      image.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (image) {
        image.removeEventListener('mouseenter', handleMouseEnter);
        image.removeEventListener('mouseleave', handleMouseLeave);
      }
      document.removeEventListener('mousemove', rotateToMouse);
    };
  }, []);

  return (
    <div 
      className={`project-card ${isBlurred ? 'blur' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href="project-details" className="my-5 project-card reveal-element text-decoration-none">
        <div 
          ref={imageRef}
          className="project-card__image-container"
          style={{ transform }}
        >
          <img 
            src={image} 
            alt={title} 
            className="project-card__image"
          />
          <div className="glow" style={{ backgroundImage: glowBackground }}></div>
        </div>

        <div className="d-flex justify-content-between align-items-center text-white mt-3">
          <p className="fs-6 fw-light my-1">Design</p>
          <p className="fs-6 my-1">2022</p>
        </div>
        <div>
          <h3 className="fw-medium d-inline fs-6">{title}</h3>
          <span className="seperator"></span>
          <p className="d-inline fw-light fs-6">
            Raising the foundations nurturing the brand and letting the website bloom
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;