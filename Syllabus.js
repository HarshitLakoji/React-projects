// Syllabus.js
import React from 'react';
import './Syllabus.css';
import SyllabusCard from './SyllabusCard';

const UG_SYLLABUS = [
  { title: 'B. TECH SYLLABUS 1ST YEAR (2022-2026)', link: 'https://www.giet.edu/wp-content/uploads/2022/08/2022-26-B.-TECH-SYLLABUS-1ST-YEAR.pdf' },
  { title: 'B. TECH CSE REGULATION 2019 SYLLABUS', link: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-CSE-Regulation-2017-Syllabus.pdf' },
  { title: 'B. TECH CHEM REGULATION 2020 SYLLABUS', link: 'https://www.giet.edu/wp-content/uploads/2019/06/R-20-CHEMICAL.pdf' },
  { title: 'B. TECH CIVIL REGULATION 2019 SYLLABUS', link: 'https://www.giet.edu/wp-content/uploads/2020/02/B.Tech-Civil-Regulation-2019-Syllabus.pdf' },
  { title: 'B. TECH ECE REGULATION 2019-2020 SYLLABUS', link: 'https://www.giet.edu/wp-content/uploads/2020/02/B.Tech-ECE-Regulation-2019-Syllabus.pdf' },
  { title: 'AGRICULTURE SYLLABUS 2017-2018', link: 'https://www.giet.edu/wp-content/uploads/2020/02/Agriculture-syllabus-GIETU.pdf' },
  { title: 'BBA SYLLABUS FOR 2020-21 FINAL', link: 'https://www.giet.edu/wp-content/uploads/2020/09/BBA-Syllabus-for-2020-2021-final.pdf' },
  { title: 'BCA REGULATION 2020 SYLLABUS 2A', link: 'https://www.giet.edu/wp-content/uploads/2020/08/BCA-R20_ANNEXURE-2A.pdf' },
];

const PG_SYLLABUS = [
  { title: 'MBA SYLLABUS (2020-2022)', link: 'https://www.giet.edu/wp-content/uploads/2020/09/MBA-Syllabus-2020-22.pdf' },
  { title: 'M. TECH. CSE REGULATION 2019 SYLLABUS', link: 'https://www.giet.edu/wp-content/uploads/2020/02/M.Tech-CSE-Regulation-2019-Syllabus.pdf' },
  { title: 'M. TECH. CTM 2019 FINAL SYLLABUS', link: 'https://www.giet.edu/wp-content/uploads/2020/08/M.Tech-CTM-2019-FINAL-SYLLABUS.pdf' },
  { title: 'M. TECH. ECE REGULATION 2019 SYLLABUS', link: 'https://www.giet.edu/wp-content/uploads/2020/02/M.-Tech-ECE-2019-Regulation-Syllabus.pdf' },
];

const PHD_SYLLABUS = [
  { title: 'RESEARCH DOMAIN COURSE I AND II _PhD_ECE_2019_2020', link: 'https://www.giet.edu/wp-content/uploads/2020/08/Research-Domain-Course-I-and-II-_PhD_ECE_2019_2020..pdf' },
];

const Syllabus = () => {
  return (
    <div className="syllabus-page">
      <h1 className="syllabus-heading">SYLLABUS</h1>

      <h2 className="syllabus-subheading">UNDERGRADUATE PROGRAMMES (UG)</h2>
      <div className="syllabus-container">
        {UG_SYLLABUS.map((item, index) => (
          <SyllabusCard key={index} title={item.title} link={item.link} />
        ))}
      </div>

      <h2 className="syllabus-subheading">POSTGRADUATE PROGRAMMES (PG)</h2>
      <div className="syllabus-container">
        {PG_SYLLABUS.map((item, index) => (
          <SyllabusCard key={index} title={item.title} link={item.link} />
        ))}
      </div>

      <h2 className="syllabus-subheading">DOCTORAL PROGRAMMES (Ph.D)</h2>
      <div className="syllabus-container center-single">
        {PHD_SYLLABUS.map((item, index) => (
          <SyllabusCard key={index} title={item.title} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
