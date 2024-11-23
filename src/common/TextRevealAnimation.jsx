// TextRevealAnimation.jsx
import React, { useEffect } from 'react';

const TextRevealAnimation = ({ children }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Get all elements with reveal-text class
    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="reveal-element">
      {children}
    </div>
  );
};

export default TextRevealAnimation;