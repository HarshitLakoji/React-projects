import React from "react";
import "./TextContainer.css";

const TextContainer = (props) => {
  return (
    <div className={`textcontainer ${props.alternate ? "" : "alternate"}`}>
      <div className={`section ${!props.alternate ? "reverse" : ""}`}>
        <div className="text">
          <h1>{props.title}</h1>
          {Array.isArray(props.body) ? (
            props.body.map((element, idx) => <p key={idx}>{element}</p>)
          ) : (
            <p>{props.body}</p>
          )}
        </div>
        <div className={`video-wrapper ${props.isvideo ? "" : "hidden"}`}>
          <video autoPlay muted loop>
            <source src={props.file} type="video/mp4" />
          </video>
        </div>
        <div className={`image-wrapper ${props.isvideo ? "hidden" : ""}`}>
          <img src={props.file} alt="Campus" />
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
