// App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Placements from "./pages/Placements";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import StudentLife from "./pages/StudentLife";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import AboutGietu from "./pages/AboutGietu";
import "./App.css";
import Clubs from "./pages/Clubs";
import CampusEvents from "./pages/CampusEvents";
import HostelFacilities from "./pages/HostelFacilities";
import PlacementRecords from "./pages/PlacementRecords";
import Recruters from "./pages/Recruters";
import ApplicationForm from "./Components/ApplicationForm";
import Programs from "./pages/Programs";
import Departments from "./pages/Departments"
import Syllabus from "./pages/Syllabus";
import Testimonials from "./pages/Testimonials";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="App">
        {isLoading && (
          <div className="gate-loading">
            <div className="gate gate-left" />
            <div className="gate gate-right" />
          </div>
        )}
        <div className={`main-content ${isLoading ? "hidden" : "visible"}`}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutgietu" element={<AboutGietu />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/studentlife" element={<StudentLife />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/campusevents" element={<CampusEvents />} />
            <Route path="/hostelandfacilities" element={<HostelFacilities />} />
            <Route path="/placementrecords" element={<PlacementRecords />} />
            <Route path="/recruiters" element={<Recruters />} />
            <Route path="/applicationform" element={<ApplicationForm />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/testimonials" element={<Testimonials/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
