import React from "react";

const educationContent = [
  {
    year: "May 2015",
    degree: "Bachelor of Arts in History",
    institute: "Pontifical Urban University",
    details: `Vatican City, Rome.`,
  },
  {
    year: "2022",
    degree: "Agile Development Practices",
    institute: "LinkedIn Issued",
    // details: `Vatican City, Rome.`,
  },
  {
    year: "2022",
    degree: "Product Management Fundamentals",
    institute: "Udemy Issued",
    // details: `Vatican City, Rome.`,
  },
  {
    year: "May 2022",
    degree: "Product Management",
    institute: "SideHustle Issued",
    // details: `Vatican City, Rome.`,
  },
  {
    year: "Oct 2022",
    degree: "Product Management",
    institute: "Entry Level Certified",
    // details: `Vatican City, Rome.`,
  },
  {
    year: "2022",
    degree: "Product Management",
    institute: "Alt School",
    // details: `Vatican City, Rome.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
