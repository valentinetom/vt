import React from "react";

const skillsContent = [
  {
    skillClass: "p75",
    skillPercent: "75",
    skillName: "Quality management & Coordination",
  },
  {
    skillClass: "p89",
    skillPercent: "89",
    skillName: "Strategic planning & Thinking",
  },
  {
    skillClass: "p70",
    skillPercent: "70",
    skillName: "Communication and Writing skills",
  },
  {
    skillClass: "p86",
    skillPercent: "86",
    skillName: "Market research & Analysis",
  },
  {
    skillClass: "p95",
    skillPercent: "95",
    skillName: "User Feedback collection",
  },
  { skillClass: "p90", skillPercent: "90", skillName: "Time Management" },
  {
    skillClass: "p75",
    skillPercent: "75",
    skillName: "Product strategy & Development",
  },
  {
    skillClass: "p85",
    skillPercent: "85",
    skillName: "Problem solving & Implementation",
  },
  {
    skillClass: "p88",
    skillPercent: "88",
    skillName: "Teamwork & Collaboration",
  },
  {
    skillClass: "p95",
    skillPercent: "95",
    skillName: "Product lifecycle management",
  },
  {
    skillClass: "p85",
    skillPercent: "85",
    skillName: "User Experience & A/B testing",
  },
  {
    skillClass: "p90",
    skillPercent: "90",
    skillName:
      "Computer Literacy (Microsoft office, G-suite, Slack, ClickUp, Figma, Jira, Github, etc.)",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
