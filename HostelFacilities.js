import React, { useEffect } from "react";
import GalleryCard from "../Components/GalleryCard";

const HostelFacilities = () => {
  const data = [
    {
      title: "Hostel Facilities",
      Desc: (
        <>
          <p>
            At GIET University, our hostels are more than just
            accommodation—they are vibrant, student-friendly spaces designed to
            offer comfort, security, and a sense of community. With separate,
            fully-facilitated hostels for boys and girls, we ensure a safe and
            supportive environment that fosters academic focus and personal
            growth.
          </p>
          <p>
            Each hostel is equipped with spacious, well-ventilated rooms, 24/7
            Wi-Fi, round-the-clock security, clean drinking water, power backup,
            and hygienic dining facilities. Our in-house mess serves nutritious
            and diverse meals, keeping student health and taste in mind.
          </p>
        </>
      ),
      images: [
        { src: "images/hostel/1.jpg", desc: "Hostel 1" },
        { src: "images/hostel/2.jpg", desc: "Hostel 2" },
        { src: "images/hostel/3.jpg", desc: "Hostels view" },
        { src: "images/hostel/4.jpg", desc: "Hostel Mess" },
      ],
    },
    {
      title: "Other Facilities",
      Desc: (
        <>
          <p>
            At GIET University, we believe that a truly enriching educational
            journey extends beyond the classroom. Our campus is equipped with
            state-of-the-art facilities to promote the physical well-being,
            health, and overall development of our students.
          </p>

          <p>
            <strong>Gymnasium</strong>
            <br />
            Our modern, well-equipped gym offers a wide range of fitness
            equipment and is open to all students who wish to maintain a healthy
            and active lifestyle. From cardio to strength training, students
            have access to professional-grade machines in a motivating
            environment.
          </p>

          <p>
            <strong>Swimming Pool</strong>
            <br />
            The university boasts a clean, well-maintained swimming pool that
            provides a refreshing way to unwind, stay fit, or even train
            competitively. Supervised by trained staff, it’s a favorite spot for
            both relaxation and recreation.
          </p>

          <p>
            <strong>Medical Facility</strong>
            <br />
            Student health is a top priority. The on-campus medical center is
            staffed with qualified doctors and nursing professionals, offering
            round-the-clock healthcare services. Emergency care, regular
            check-ups, and ambulance facilities are also available to ensure
            immediate response in critical situations.
          </p>

          <p>
            <strong>Mess & Dining Services</strong>
            <br />
            Our hygienic and spacious mess facilities serve a variety of
            nutritious, well-balanced meals to cater to diverse student tastes.
            With a focus on quality, cleanliness, and timely service, the mess
            ensures students get homely, healthy food throughout their stay.
          </p>
        </>
      ),
      images: [
        { src: "images/facilites/1.jpg", desc: "Library" },
        { src: "images/facilites/2.jpg", desc: "Gymnasium" },
        { src: "images/facilites/3.jpg", desc: "Medical" },
        { src: "images/facilites/4.jpg", desc: "Ambulance" },
        { src: "images/facilites/5.jpg", desc: "Swimming Pool" },
        { src: "images/facilites/6.jpg", desc: "Temple" },
      ],
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {data.map((ele, idx) => {
        return <GalleryCard key={idx} data={ele} alt={idx % 2} />;
      })}
    </>
  );
};

export default HostelFacilities;
