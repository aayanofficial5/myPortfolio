import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/project2.png";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaHome,
  FaLaptop,
  FaCode,
  FaAward,
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiExpress,
} from "react-icons/si";
import { FaJava, FaNodeJs, FaGitAlt, FaLinux } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { IoMdContact } from "react-icons/io";
import { FaTimeline } from "react-icons/fa6";

const portfolioInfo = {
  fullName: "Aayan Patel",
  description:
    "I'm a student at DIT University Dehradun. Currently, I am pursuing an B.Tech in Computer Science. Additionally, I am an experienced Full-Stack Web Developer, I build websites from the ground up.",
  aboutMe:
    "I'm a creative frontend developer who loves building beautiful and user-friendly web experiences. With a solid background in modern web technologies and a passion for clean design, I bring ideas to life in the browser.",
};
const navLinks = [
  {
    name: "home",
    url: "#",
    icon: <FaHome />,
  },
  {
    name: "achievements",
    url: "#achievements",
    icon: <FaAward />,
  },
  {
    name: "skills",
    url: "#skills",
    icon: <FaCode />,
  },
  {
    name: "projects",
    url: "#projects",
    icon: <FaLaptop />,
  },
  {
    name: "timeline",
    url: "#timeline",
    icon: <FaTimeline />,
  },
  {
    name: "contact",
    url: "#contact",
    icon: <IoMdContact />,
  },
];

const projects = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A sleek, modern personal portfolio built with React and Tailwind CSS showcasing skills, resume, and projects.",
    github: "https://github.com/aayanofficial5/myPortfolio",
    demo: "https://yourportfolio.com",
    stack: ["javascript", "react", "tailwindcss", "netlify"],
  },
  {
    title: "StudyHub",
    image: project2,
    description:
      "An educational platform that enhances student-instructor interaction with JWT authentication and dashboards.",
    github: "https://github.com/aayanofficial5/StudyHub",
    demo: "https://yourportfolio.com",
    stack: [
      "javascript",
      "react",
      "expressjs",
      "mongodb",
      "tailwindcss",
      "netlify",
      "html5",
    ],
  },
];

const timeline = [
  {
    type: 'work',
    title: 'Frontend Developer Intern - Celebal Technologies',
    date: 'May 2025 - Present',
    description: 'Developed modern UIs using React, optimized performance, and collaborated on cross-functional teams.',
  },
  {
    type: "education",
    title: "B.Tech in Computer Science - DIT University, Dehradun",
    date: "2022 - Present",
    description:
      "CGPA: 9.0 - Focused on web development, full-stack projects, and problem solving.",
  },
  {
    type: "education",
    title: "12th Grade - Cambridge Convent School",
    date: "2020 - 2021",
    description:
      "Scored 93% in CBSE Board with a strong foundation in Mathematics and Computer Science.",
  },
  {
    type: "education",
    title: "10th Grade - Cambridge Convent School",
    date: "2019 - 2020",
    description:
      "Scored 92% in CBSE Board with academic excellence in Science and Math.",
  },
];

const socials = [
  {
    name: "github",
    url: "https://www.github.com/aayanofficial5/",
    icon: <FaGithub />,
  },
  {
    name: "email",
    mail: "aayanofficial5@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/share/15LWuCNLBX/",
    icon: <FaFacebookF />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/aayanoffical5186/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/aayan5782/",
    icon: <FaInstagram />,
  },
];

const skills = [
  {
    name: "C",
    icon: (
      <img
        src="https://img.icons8.com/?size=100&id=40670&format=png&color=000000"
        className="h-12.5"
      />
    ),
    tag: "skill",
    desc: "C is a general-purpose programming language ideal for system-level programming and embedded development.",
  },
  {
    name: "C++",
    icon: (
      <img
        src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png"
        className="h-12"
      />
    ),
    tag: "skill",
    desc: "C++ is a high-performance programming language used for system/software development and game programming.",
  },
  {
    name: "Java",
    icon: <FaJava />,
    color: "#009999",
    tag: "skill",
    desc: "Java is a versatile, object-oriented programming language widely used for building enterprise-scale applications.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "#F7DF1E",
    tag: "skill",
    desc: "JavaScript is a scripting language used to create and control dynamic website content.",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    color: "#E34F26",
    tag: "skill",
    desc: "HTML5 is the standard markup language for creating web pages and web applications.",
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
    color: "#1572B6",
    tag: "skill",
    desc: "CSS3 is used for describing the presentation of a document written in HTML or XML.",
  },
  {
    name: "React",
    icon: <SiReact />,
    color: "#61DAFB",
    tag: "skill",
    desc: "React is a JavaScript library for building user interfaces, maintained by Facebook.",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "#764ABC",
    tag: "skill",
    desc: "Redux is a predictable state container for JavaScript apps, often used with React.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#339933",
    tag: "skill",
    desc: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "#000000",
    tag: "skill",
    desc: "Express is a minimal and flexible Node.js web application framework.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47A248",
    tag: "skill",
    desc: "MongoDB is a document-oriented NoSQL database used for high volume data storage.",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "#4479A1",
    tag: "skill",
    desc: "MySQL is an open-source relational database management system.",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
    tag: "tool",
    desc: "Git is a distributed version-control system for tracking changes in source code during software development.",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "#181717",
    tag: "tool",
    desc: "GitHub is a provider of Internet hosting for software development and version control using Git.",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    color: "#2496ED",
    tag: "tool",
    desc: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in containers.",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "#FCC624",
    tag: "tool",
    desc: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel.",
  },
  {
    name: "VS Code",
    icon: <DiVisualstudio />,
    color: "#007ACC",
    tag: "tool",
    desc: "Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux, and macOS.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#38B2AC",
    tag: "tool",
    desc: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
  },
];

export {
  portfolioInfo,
  navLinks,
  projects,
  socials,
  skills,
  timeline,
  //  projects
};
