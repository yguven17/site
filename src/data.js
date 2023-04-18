// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaJava,
  FaPython,
  FaLinux,
  FaGitAlt,
  FaGithubSquare,
  
  FaUbuntu,
  FaLinkedin
} from "react-icons/fa";
import { DiDjango,  DiTerminal, DiRasberryPi, DiMysql } from "react-icons/di";
import { SiArduino } from "react-icons/si";
import { Icon } from '@iconify/react';

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import me from "./images/photo.jpeg";
import education from "./images/koc.jpg";
import company from "./images/koc.jpg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "yguven17";

// Blog link icon (imported above)
export const Blog = <FaLinkedin />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "As a fourth-year computer & electrical and electronic engineering student, I possess a strong foundation in programming languages, algorithms, computer networks, software engineering, and database management. With practical experience gained from internships and personal projects, I excel at applying theoretical concepts to real-world problems. Highly motivated with excellent problem-solving and communication skills, I am eager to apply my knowledge to a career in computer engineering. ";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaJava className="display-4" />,
    name: "Java",
  },
  {
    id: 2,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 3,
    skill: <DiDjango className="display-4" />,
    name: "Django",
  },
  {
    id: 4,
    skill: <FaLinux className="display-4" />,
    name: "Linux",
  },
  {
    id: 5,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 6,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 7,
    skill: <FaUbuntu className="display-4" />,
    name: "Ubuntu",
  },
  {
    id: 8,
    skill: <DiTerminal className="display-4" />,
    name: "Terminal",
  },
  {
    id: 9,
    skill: <DiMysql className="display-4" />,
    name: "MySQL",
  },
  {
    id: 10,
    skill: <DiRasberryPi className="display-4" />,
    name: "RasberryPi",
  },
  {
    id: 11,
    skill: <SiArduino className="display-4" />,
    name: "Arduino",
  },
  {
    id: 12,
    skill: <Icon icon="file-icons:matlab" className="display-4" />,
    name: "Matlab",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1Goqiu9CZT3hfyT9tuQLgjfd8zcU6og_o/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
    image1: me,
    image2: education,
    image3: company,

  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xvonwlgj";
