import React from 'react';
import './Syllabus.css';

const SyllabusCard = ({ title, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="syllabus-card">
      <div className="card-content">
        <i className="fas fa-file-pdf pdf-icon"></i>
        <h2>{title}</h2>
        <p>Click to view syllabus</p>
      </div>
    </a>
  );
};

export default SyllabusCard;
