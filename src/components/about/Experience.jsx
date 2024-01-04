import React from "react";

const experienceContent = [
  {
    year: "May, 2023 — Present",
    position: "Product Manager",
    compnayName: "Automagic",
    details: `Conducted  market research to identify user needs and preferences thereby prioritizing features for the MVP for two products; asset management tool and tennis app. \n
    Developed product roadmaps and feature prioritization based on customer feedback and business goals which led to the successful launch of two  MVPs (Tennis Love & Asset) and a website (www.atmgc.xyz) in 90 days. \n
    Collaborated with designers, developers, and QA to ensure timely delivery of high-quality products. \n
    Created well detailed  user stories and acceptance criteria for product features which helped the development team in understanding the features. \n
    Conducted user testing and gathering feedback to inform product improvements. \n
    Analyzed product performance metrics and making data-driven decisions for future iterations.
    `,
  },
  {
    year: "April, 2023 — December, 2023",
    position: "Product Manager",
    compnayName: "Nexascale",
    details: `Evaluated strategies based on product objectives, market research, and other user-related factors. \n
    Leading the development of a new B2C product; a travel app. \n
    Identified gaps through competitive analysis across the areas of design and engineering that have boosted the projected launch date. \n
    Proposed solutions to resolve potential customer pain points and completed tasks timely. \n
    Collaborated with team members in the development of product strategies, marketing campaigns, and roadmaps. \n
    Initiated user interviews with potential consumers using surveys, observation, and interactions which resulted in the implementation of innovative features to better serve users’ needs.
    `,
  },
  {
    year: "March. 2023 — Present",
    position: "Product Manager",
    compnayName: "Kommerce",
    details: `Conducted a comprehensive evaluation of product objectives, market research, and user-related factors to formulate effective strategies. \n
    Negotiated with key stakeholders and potential investors to secure support for the upcoming venture. \n
    Assumed leadership of the development of a new B2B and B2C product, a cutting-edge livestream marketplace that facilitates seamless exchange of goods between buyers and sellers. \n
    Conducted a meticulous competitive analysis in design and engineering to identify gaps and opportunities that have expedited the projected launch date. \n
    Devised ingenious solutions to address potential customer pain points and meticulously executed tasks within the desired timeline. \n
    Collaborated closely with team members in the formulation of product strategies, marketing campaigns, and roadmaps that align with the company's vision. \n
    Conducted extensive user interviews with potential consumers using surveys, observation, and interactions to gain insights that have informed the integration of innovative features that cater to users' needs.
    `,
  },
  {
    year: "Feb 2022 — Sept 2022",
    position: "Product Manager",
    compnayName: "Metarri",
    details: `Analyzed product objectives, market research, and user-related factors to assess strategies. \n
    Spearheaded the creation of a new product for both B2B and B2C markets, which provides seamless access to the metaverse for users and web3 developers. \n
    Presented solutions to address customer pain points and completed tasks promptly. \n
    Worked closely with team members to develop product strategies, marketing campaigns, and roadmaps. \n
    Conducted user interviews with potential consumers through surveys, observation, and interactions, leading to the integration of innovative features that better meet users' needs.
    `,
  },
  {
    year: "Jan 2020 — Present",
    position: "Operations Manager",
    compnayName: "Chrism Oil Nig. LTD",
    details: `Negotiate with potential clients, partners, and stakeholders to discuss company needs and goals. \n
    Monitor and track work progress and utilize results to make quality staff adjustments. \n
    Document findings, prepare reports, and develop new processes to enhance operations. \n
    Initiated monthly operations analysis to measure performance and reduce possible mistakes. \n
    Ensure management and employees understand all business objectives and track every work progress. \n
    Accomplished company goals by leading from a single branch office to three functional branches and an increased profit margin by over 40% with a higher retention rate.  \n
    Oversee the recruitment, training, and coordination of all employee’s responsibilities. \n
    Maintain a healthy work environment by establishing and enforcing standards according to operational needs and legal compliance. \n
    Forecast requirements, prepare the annual budget, schedule expenditure, and analyze variance. \n
    Manage all branch operations to implement changes and review the approval of all responsibilities.
    `,
  },
  {
    year: "Jan. 2016 —June. 2020",
    position: "Account Relationship Manager",
    compnayName: "Keystone Bank LTD",
    details: `Discussed financial options with clients, and kept them informed about transactions. \n
    Determined customers’ financial service needs and prepared proposals accordingly. \n
    Contacted perspective to present information and explain available services. \n
    Offering advice or sales on particular services. \n
    Managed customer relationships through regular calls and strategic check-ups and inventories. \n
    Marketing and bringing new customers to the bank. \n
    Proper documentation of account records. \n
    Actively involved in negotiations and using technologies and other proposals to sustain customer alliances. \n
    Advised customers on services that are best suited to them. \n
    Negotiated prices and contracts for commodity sales and purchases & kept accurate reports and records of transactions.
    `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">
            {val.details.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
