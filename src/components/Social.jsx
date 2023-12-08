import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-instagram",
    link: "https://instagram.com/_valentinetom?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr",
  },
  { iconName: "fa fa-twitter", link: "https://x.com/_valentinetom?s=21" },
  // {
  //   iconName: "fa fa-youtube",
  //   link: "https://www.youtube.com/",
  // },
  // { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
