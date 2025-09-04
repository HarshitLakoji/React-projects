// Nav.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import logo from "../assets/images/logo1.png";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h2 className="heading">
        Gandhi Institute of Engineering and Technology University, Gunupur
        <Link className="link" to="/applicationform">
          Apply
        </Link>
      </h2>
      <div className={`nav ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-logo">
          <img
            src={logo}
            alt="GIET University Logo"
            className="logo"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          />
        </div>
        <div className="nav-toggle">
          <Link className="link" to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
          <Link
            to="/aboutgietu"
            className="link"
            onClick={() => window.scrollTo(0, 0)}
          >
            About GIETU
          </Link>
          <div className="item">
            <Link
              to="/"
              className="link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Academics
            </Link>
            <div className="dropdown">
              <Link to="/programs" onClick={()=>window.scrollTo(0,0)}>
                Programs (UG, PG, PhD)
              </Link>
              <Link to="/departments">Departments</Link>
              <Link to="/syllabus">Curriculum & Syllabus</Link>
            </div>
          </div>

          <div className="item">
            <Link to="/" className="link">
              Placements
            </Link>
            <div className="dropdown">
              <Link
                to="/placementrecords"
                onClick={() => window.scrollTo(0, 0)}
              >
                Placement records
              </Link>
              <Link to="/recruiters" onClick={() => window.scrollTo(0, 0)}>
                Recruiters
              </Link>
              <Link to="/testimonials">Student Testimonials</Link>
            </div>
          </div>

          <div className="item">
            <Link className="link">Student Life</Link>
            <div className="dropdown">
              <Link to="/clubs" onClick={() => window.scrollTo(0, 0)}>
                Clubs & Socities
              </Link>
              <Link
                to="/hostelandfacilities"
                onClick={() => window.scrollTo(0, 0)}
              >
                Hostel & Facilities
              </Link>
              <Link to="/campusevents" onClick={() => window.scrollTo(0, 0)}>
                Campus Events
              </Link>
            </div>
          </div>

          <a className="link" href="#footer">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
