import React from "react";
import TextContainer from "../Components/TextContainer";
import campusvideo from "../assets/videos/about-optimized.mp4";
import campusimg from "../assets/images/campus.jpg";
import vision from "../assets/images/vision.jpg";
import { useEffect } from "react";

const AboutGietu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      title: `The GIETU community is driven by a shared purpose: to make a better world through Education, Research, Innovation`,
      body: [
        `We are driven by creativity, passion, and a desire to build a
            stronger future. At GIETU, we welcome brilliant minds from every
            background to grow, collaborate, and transform the world. Founded to
            fuel progress and excellence in education, GIET University stands at
            the forefront of India’s technical and academic transformation. Our
            alumni have contributed to startups, global organizations, and
            ground-breaking research. At GIETU, our commitment to global
            engagement and " service to society drives everything we do.`,
      ],
      isvideo: true,
      file: campusvideo,
    },
    {
      title: `GIETU CAMPUS`,
      body: [
        `GIET University is home to many national and international students. The campus boasts of modern marvel infrastructure with every construction equipped with the modern facilities. GIETU is a peaceful paradise, far away from the noise & bustle of an urban area. The GIETU campus is a high-tech oriented territory at par with the world’s leading global educational institutions.`,

        `GIET University is the perfect choice of students in terms of studies and environment. It is strategically the perfect fit for the students who want to pursue world-class education in India. The campus is filled with acres of spectacular greenery and views of the hills around. In addition to excellent academics, GIETU also offers the students an abundant scope of recreational and outdoor activities to undergo overall development.`,
      ],
      isvideo: false,
      file: campusimg,
    },
    {
      title: `VISION`,
      body: [
        `GIET University leaps forward with a remarkable vision to stand at par as a globally recognized University. It strives to offer the highest quality academics backed by profound research and advanced teaching methods for students to emerge as the global leaders and entrepreneurs of tomorrow.`,

        `To be a renowned and Globally Recognized University giving importance to academic excellence with latest technology, Research, Innovation and Entrepreneurial Attitude.`,
      ],
      isvideo:false,
      file: vision
    },
  ];
  return (
    <>
      {data.map((ele, idx) => {
        return (
          <TextContainer
            key={idx}
            title={ele.title}
            body={ele.body}
            file={ele.file}
            isvideo={ele.isvideo}
            alternate={idx % 2}
          />
        );
      })}
    </>
  );
};

export default AboutGietu;
