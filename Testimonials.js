import React from "react";
import "./Testimonials.css";
import TestimonialsCard from "./TestimonialsCard";

const data = [
  {
    isource: "https://www.giet.edu/wp-content/uploads/2022/04/Star-Performer-Madhusmita-Sahoo.jpg",
    ititle: "Star performer who cracked 3 MNCs",
    vsource: "https://www.youtube.com/embed/QpuMPtizTjI?autoplay=1",
    title: "Star performer who cracked 3 MNCs",
  },
  {
    isource: "https://www.giet.edu/wp-content/uploads/2021/02/rakesh-kumar-swain.jpg",
    ititle: "RAKESH KUMAR SWAIN | SBI LIFE",
    vsource: "https://www.youtube.com/embed/n2MRwfeKfho",
    title: "GIET UNIVERSITY | CAMPUS PLACEMENT | STUDENT TESTIMONIALS | SBI LIFE",
  },
  {
    isource: "http://giet.edu/wp-content/uploads/2021/02/chirodip-lodh-choudhury.jpg",
    ititle: "CHIRODIP LODH CHOUDHURY | HEXAWARE, TCS, CTS & INVENIO BS",
    vsource: "https://www.youtube.com/embed/9uzebznulLQ",
    title: "GIET UNIVERSITY | CAMPUS PLACEMENT | STUDENT TESTIMONIALS | TCS",
  },
  {
    isource: "https://www.giet.edu/wp-content/uploads/2020/04/LANCESOFT.jpg",
    ititle: "CAMPUS WINNER | LANCESOFT",
    vsource: "https://www.youtube.com/embed/i06a015GTTY",
    title: "GIET UNIVERSITY | CAMPUS PLACEMENT | LANCESOFT WINNER",
  },
  {
    isource: "https://www.giet.edu/wp-content/uploads/2021/02/sangeeta-patel.jpg",
    ititle: "SANGEETA PATEL | COGNIZANT",
    vsource: "https://www.youtube.com/embed/miNft3mWcpQ",
    title: "GIET UNIVERSITY | COGNIZANT | STUDENT TESTIMONIALS",
  },
  {
    isource: "https://www.giet.edu/wp-content/uploads/2021/02/ankitesh-dash.jpg",
    ititle: "ANKITESH DASH | SBI LIFE",
    vsource: "https://www.youtube.com/embed/JqbUMNhArkk",
    title: "GIET UNIVERSITY | SBI LIFE | STUDENT TESTIMONIALS",
  },
  {
    isource: "https://www.giet.edu/wp-content/uploads/2020/04/Ms.-Prachi-Bharti.jpg",
    ititle: "Ms. Prachi Bharti | MILLIMAN INDIA",
    vsource: "https://www.youtube.com/embed/rPKE0tTAhlk",
    title: "GIET GUNUPUR II CAMPUS PLACEMENT II MILLIMAN INDIA II STUDENTS TESTIMONIAL",
  },
  {
    isource: "https://www.giet.edu/wp-content/uploads/2020/04/Campus-winners-Mindtree.jpg",
    ititle: "CAMPUS WINNERS | Mindtree",
    vsource: "https://www.youtube.com/embed/nDJNLxC3sEk",
    title: "GIET UNIVERSITY GUNUPUR I CAMPUS PLACEMENT 2019 I MINDTREE I WINNERS",
  },
  {
    isource: "https://www.giet.edu/wp-content/uploads/2020/04/Campus-winners-MILLIMAN.jpg",
    ititle: "CAMPUS WINNERS | MILLIMAN",
    vsource: "https://www.youtube.com/embed/WoqjR5kODd4",
    title: "GIET UNIVERSITY GUNUPUR I INTERNATIONAL INFRASTRUCTURE I CAMPUS PLACEMENT 2019 I MILLIMAN I WINNERS",
  },
  {
    isource: "https://www.giet.edu/wp-content/uploads/2020/04/Ms.-Devika-Mukherjee.jpg",
    ititle: "Ms. Devika Mukherjee | ASPOL MEDIA",
    vsource: "https://www.youtube.com/embed/zvk3xJUD2q0",
    title: "GIET GUNUPUR II CAMPUS PLACEMENT II ASPOL MEDIA II STUDENTS TESTIMONIAL",
  },
  {
    isource: "https://www.giet.edu/wp-content/uploads/2020/04/CAMPUS-PLACEMENT-2019-vTECH-SOLUTION.jpg",
    ititle: "Ms. Soumya Padhi | vTech Solution",
    vsource: "https://www.youtube.com/embed/SN7U7Ua4VAs",
    title: "GIET UNIVERSITY I CAMPUS PLACEMENT 2019 I vTECH SOLUTION I CAMPUS WINNER",
  },
  {
    isource: "https://www.giet.edu/wp-content/uploads/2020/04/CAMPUS-WINNER-2020-PIAGGIO.jpg",
    ititle: "Mr. Vishal Sharma | PIAGGIO",
    vsource: "https://www.youtube.com/embed/zvk3xJUD2q0",
    title: "GIET GUNUPUR II CAMPUS PLACEMENT II ASPOL MEDIA II STUDENTS TESTIMONIAL",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <h1 className="main-title">Student Testimonials</h1>
      <div className="grid-container">
        {data.map((item, index) => (
          <TestimonialsCard
            key={index}
            isource={item.isource}
            ititle={item.ititle}
            vsource={item.vsource}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
