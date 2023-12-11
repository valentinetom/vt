import Image1 from "../../../public/assets/img/portfolio/project-1.jpg";
import Image2 from "../../../public/assets/img/portfolio/project-2.jpg";
import Image3 from "../../../public/assets/img/portfolio/project-3.jpg";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";
import Image5 from "../../../public/assets/img/portfolio/project-5.jpg";
import Image6 from "../../../public/assets/img/portfolio/project-6.jpg";
import Image7 from "../../../public/assets/img/portfolio/project-7.jpg";
import Image8 from "../../../public/assets/img/portfolio/project-8.jpg";
import Image9 from "../../../public/assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Kommerce",
    image: Image1,
    tag: ["mobile"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Online Store",
        client: "Kommerce",
        language:
          "User Research / Story, Product Ideation / Sprints, Stakeholder Management, Product Framework, Dev Team Management",
        preview: "www.kommerce.com",
        link: "https://play.google.com/store/apps/details?id=com.kommerce",
      },
    ],
  },
  {
    id: 2,
    type: "Nexascale",
    image: Image2,
    tag: ["web"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Asset sharing platform",
        client: "Nexascale",
        language:
          "User Research / Story, Product Ideation / Sprints, Stakeholder Management, Product Framework, Dev Team Management",
        preview: "www.nexascale.com",
        link: "https://nexascale-asset.web.app/",
      },
    ],
  },
  {
    id: 3,
    type: "Automagic",
    image: Image3,
    tag: ["website"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Automagic",
        language:
          "User Research / Story, Product Ideation / Sprints, Stakeholder Management, Product Framework, Dev Team Management",
        preview: "www.atmgc.xyz",
        link: "www.atmgc.xyz",
      },
    ],
  },
  {
    id: 4,
    type: "Tennis Love",
    image: Image4,
    tag: ["web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Tennis Love",
        client: "Tennis Love",
        language:
          "User Research / Story, Product Ideation / Sprints, Stakeholder Management, Product Framework, Dev Team Management",
        preview: "https://tennislove.app",
        link: "https://tennislove.app",
      },
    ],
  },
  {
    id: 5,
    type: "saas project",
    image: Image5,
    tag: ["logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "Themeforest",
        language: "HTML, CSS, ReactJS",
        preview: "www.envato.com",
        link: "https://themeforest.net/item/deski-saas-software-react-template/33799794",
      },
    ],
  },
  {
    id: 6,
    type: "mockup project",
    image: Image6,
    tag: ["logo", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: "HTML, CSS, Javascript",
        preview: "www.pexels.com",
        link: "https://www.pexels.com",
      },
    ],
  },
  {
    id: 7,
    type: "facebook project",
    image: Image7,
    tag: ["logo"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Facebook",
        language: "HTML, CSS, Javascript",
        preview: "www.facebook.com",
        link: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    id: 8,
    type: "dribble project",
    image: Image8,
    tag: ["graphic design"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Dribbble",
        language: "HTML, CSS, Javascript",
        preview: "www.dribbble.com",
        link: "https://dribbble.com/ib-themes",
      },
    ],
  },
  {
    id: 9,
    type: "behence project",
    image: Image9,
    tag: ["graphic design", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Behance",
        language: "HTML, CSS, Javascript",
        preview: "www.behance.com",
        link: "https://www.behance.net/ib-themes",
      },
    ],
  },
];

export default PortfolioData;
