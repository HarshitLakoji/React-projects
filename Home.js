import React from "react";
import banner from "../assets/videos/main-banner-optimized.mp4";
import award from "../assets/images/award.jpg";
import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <video
        width="100%"
        autoPlay
        muted
        loop
        style={{ objectFit: "cover", display: "block" }}
      >
        <source src={banner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="main-container">
        <div className="home-wrapper">
          <div className="hero-section">
            <div className="hero-overlay">
              <h1>BEST UNIVERSITY IN EASTERN INDIA FOR CAMPUS PLACEMENT</h1>
            </div>

            <div className="award-section">
              <h2>Asia Education Summit & Awards 2020</h2>
              <p>
                GIET University believes that quality education should be
                followed by prime placements. Over the decades, the relentless
                effort of GIET University has ingrained a reputation for
                consistent quality placements. It has formed enduring &
                constructive partnerships with the corporate/Industries to
                provide foot-in-the-door opportunity to all the eligible
                students, enabling them to start off their career just right
                after they complete their course curriculum without facing the
                real-world job struggle.
              </p>
              <p>
                As a result, GIET University has been crowned the “Best
                University in Eastern India” for campus placement at the “Asia
                Education Summit – 2020”.
              </p>
              <br />
              <p className="award-note">
                The award has been presented by Shri Pratap Chandra Sarangi,
                Hon’ble Union Minister, MSME, Govt.of India to "Dr. N. V.
                Jagannadha Rao", Registrar, GIET University, Gunupur at Asia
                Education Summit 2020, Vigyan Bhawan, New Delhi.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={award} alt="Award" />
        </div>
      </div>
      <div className="aboutgiet">
        <h1>About GIETU</h1>
        <p>
          GIET, Best University in Eastern India for campus placement. GIET
          University, Gunupur (formerly known as Gandhi Institute of Engineering
          and Technology) was established by “Vidya Bharati Educational Trust,”
          Gunupur, Odisha, India in the year 1997. Since inception, the Trust
          promotes Technical Education in India with a motto of providing
          Quality Education in a highly disciplined and conducive environment
          with International Standards.
        </p>
        <Link to="/aboutgietu">Read More</Link>
      </div>
    </>
  );
};

export default Home;
