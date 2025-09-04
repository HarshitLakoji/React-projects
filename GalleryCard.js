import React from "react";
import "./GalleryCard.css";

const GalleryCard = (props) => {
  return (
    <div className="page-container">
      <div className={`gallery-container ${props.alt ? "alt" : ""}`}>
        <h2 className="gallery-title">{props.data.title}</h2>
        <p className="gallery-description">{props.data.Desc}</p>
        <div className="gallery-images">
          {Array.isArray(props.data.images) ? (
            props.data.images.map((element, idx) => (
              <div className="img-wrapper" key={idx}>
                <img src={element.src} alt={`${idx + 1}`} className="img" />
                <div className="img-hover-desc">{element.desc}</div>
              </div>
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
