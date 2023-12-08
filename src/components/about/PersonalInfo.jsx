import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Tom", hasColor: "" },
  { meta: "last name", metaInfo: "Valentine", hasColor: "" },
  // { meta: "Age", metaInfo: "99 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Nigerian", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Uyo, Nigeria", hasColor: "" },
  { meta: "phone", metaInfo: "+2349075131896", hasColor: "" },
  { meta: "Email", metaInfo: "valentinetom2022@gmail.com", hasColor: "" },
  // { meta: "Skype", metaInfo: " steve.milner", hasColor: "" },
  // { meta: "langages", metaInfo: "French, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
