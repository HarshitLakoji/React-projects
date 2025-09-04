import React, { useEffect } from "react";
import "./Recruters.css";
const images = [
  "/images/recruiters/1.jpg",
  "/images/recruiters/2.jpg",
  "/images/recruiters/3.jpg",
  "/images/recruiters/4.jpg",
  "/images/recruiters/5.jpg",
  "/images/recruiters/6.jpg",
  "/images/recruiters/7.jpg",
  "/images/recruiters/8.jpg",
  "/images/recruiters/9.jpg",

  "/images/recruiters/10.jpg",
  "/images/recruiters/11.jpg",
  "/images/recruiters/12.jpg",
  "/images/recruiters/13.jpg",
  "/images/recruiters/14.jpg",

  "/images/recruiters/15.jpg",
  "/images/recruiters/16.jpg",
  "/images/recruiters/17.jpg",

  "/images/recruiters/18.jpg",
  "/images/recruiters/19.jpg",
  "/images/recruiters/20.jpg",

  "/images/recruiters/21.jpg",
  "/images/recruiters/22.jpg",
  "/images/recruiters/23.jpg",
  "/images/recruiters/24.jpg",

  "/images/recruiters/25.jpg",
  "/images/recruiters/26.jpg",

  "/images/recruiters/27.jpg",
  "/images/recruiters/28.jpg",
];

const Recruters = () => {
  const rows = [];
  for (let i = 0; i < images.length; i += 4) {
    rows.push(images.slice(i, i + 4));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Recruiters</h1>
      <table className="recrutor-table">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((src, index) => (
                <td key={index}>
                  <div className="image-container">
                    <img src={src} alt={`recruiter-${rowIndex}-${index}`} />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recruters;
