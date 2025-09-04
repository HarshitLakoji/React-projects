import React from "react";
import './Departments.css'
const DepartmentsCard = ({ source, branch }) => {
  return (
    <div className="departments-container">
      <div className="department-card">
        <img src={source} alt="Department" className="department-image" />
        <div className="overlay-text">{branch}</div>
      </div>
    </div>
  );
};

export default DepartmentsCard;
