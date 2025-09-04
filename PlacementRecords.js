import React, { useState, useEffect } from "react";
import record2024 from "../assets/records/2024.js";
import record2023 from "../assets/records/2023.js";
import "./PlacementRecords.css";
const placementData = {
  2024: record2024,
  2023: record2023,
};

const PlacementRecords = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="placement-dashboard">
      <h1 className="dashboard-title">Placement Records Dashboard</h1>
      <div className="year-buttons">
        {Object.keys(placementData).map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`year-button ${selectedYear === year ? "selected" : ""}`}
          >
            {year}
          </button>
        ))}
      </div>
      <table className="placement-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Branch</th>
            <th>Company</th>
            <th>Package</th>
          </tr>
        </thead>
        <tbody>
          {placementData[selectedYear].map((student, index) => (
            <tr key={index} className="table-row">
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.company}</td>
              <td>{student.package}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlacementRecords;
