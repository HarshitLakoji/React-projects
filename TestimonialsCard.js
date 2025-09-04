import React, { useState } from 'react';
import './Testimonials.css';

const TestimonialsCard = ({ isource, ititle, vsource, title }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleCardClick = () => {
    setIsVideoPlaying(true);
  };

  const handleClose = (e) => {
    e.stopPropagation(); // Prevent triggering handleCardClick
    setIsVideoPlaying(false);
  };

  return (
    <div className="card" onClick={!isVideoPlaying ? handleCardClick : undefined}>
      {!isVideoPlaying ? (
        <div className="image-overlay">
          <img src={isource} alt="testimonial" />
          <div className="overlay-text">{ititle}</div>
        </div>
      ) : (
        <div className="video-wrapper">
          <button className="close-button" onClick={handleClose}>&times;</button>
          <iframe
            src={vsource}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default TestimonialsCard;
