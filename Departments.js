import React from 'react';
import './Departments.css';
import DepartmentsCard from './DepartmentsCard';

const data = [
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/cse-dep-banner.jpg", branch: "Computer Science and Engineering" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/cse-dep-banner.jpg", branch: "Computer Science and Engineering (AI & ML)" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/cse-dep-banner.jpg", branch: "Computer Science and Engineering (Data Science)" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/cse-dep-banner.jpg", branch: "Computer Science and Engineering (IOT)" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/cse-dep-banner.jpg", branch: "Computer Science and Technology" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/agri.jpg", branch: "Agricultural Engineering" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/IMG-20250201-WA0029.jpg", branch: "Mechanical Engineering" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/depart-college.jpg", branch: "Biotechnology" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/civil.jpg", branch: "Civil Engineering" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/dept-main-banner-05.jpg", branch: "Electrical Engineering" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/dept-main-banner-04.jpg", branch: "Electrical and Electronics Engineering" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/ece-1.jpg", branch: "Electronics and Communication Engineering" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/depart-college.jpg", branch: "Master of Sciences" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/mca-course-banner.jpg", branch: "Master of Computer Application" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/11/bsh.jpg", branch: "Humanities and Social Sciences" },
  { source: "https://www.giet.edu/wp-content/uploads/2020/02/bsh2-copy.jpg", branch: "Basic Science and Humanities" },
  { source: "https://www.giet.edu/wp-content/uploads/2019/07/mba-dep.jpg", branch: "Management Studies" }
];

const Departments = () => {
  return (
    <div className="departments-page">
      <div className="heading">
        <h1>DEPARTMENTS</h1>
      </div>
      <div className="departments-container">
        {data.map((item, index) => (
          <DepartmentsCard key={index} source={item.source} branch={item.branch} />
        ))}
      </div>
    </div>
  );
};

export default Departments;
