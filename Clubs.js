import React, { useEffect } from "react";
import cyber from "../assets/images/cyber.jpg";
import ds from "../assets/images/ds.jpg";
import nss from "../assets/images/nss.jpg";
import ncc from "../assets/images/ncc.jpg";
import web from "../assets/images/web.jpg";
import gdsc from "../assets/images/gdsc.jpg";
import GalleryCard from "../Components/GalleryCard";

const Clubs = () => {
  const data = {
    title: "Clubs and Socities",
    Desc: (
      <>
        <p>
          Fostering Innovation, Leadership & Community Spirit At GIET
          University, we are committed to nurturing well-rounded individuals by
          encouraging learning that goes beyond textbooks. Our dynamic campus
          life is enriched by a diverse range of student-led clubs and
          societies, offering platforms for students to explore, innovate, and
          lead in their areas of interest.
        </p>
        <p>
          Whether you're diving into the world of technology through our{" "}
          <span className="highlight">Cybersecurity</span>,{" "}
          <span className="highlight">Data Science</span>,{" "}
          <span className="highlight">AI & ML</span>,{" "}
          <span className="highlight">Web Development</span>,{" "}
          <span className="highlight">IoT</span>, and{" "}
          <span className="highlight">Robotics</span>, or contributing to
          nation-building and social service through{" "}
          <span className="highlight">NSS (National Service Scheme)</span> and{" "}
          <span className="highlight">NCC (National Cadet Corps)</span> —
          there's a place for every passion and purpose.
        </p>
      </>
    ),
    images: [
      { src: cyber, desc: "Cyber Security Club" },
      { src: ds, desc: "Data Science Club" },
      { src: nss, desc: "NSS" },
      { src: web, desc: "Web Development Club" },
      { src: gdsc, desc: "Google Dev Student Club" },
      { src: ncc, desc: "NCC" },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <GalleryCard data={data} />;
};

export default Clubs;
