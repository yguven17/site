import { FaLinkedin } from "react-icons/fa";

// Hero Image (add your image to the /images directory with the same name)
import HeroDark from "./images/hero-dark.jpg";
// If you change the import name above then you need to change the export name below
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
  One string per paragraph.
*/
export const moreInfo = [
  "Backend developer and systems engineer with 3+ years of full-time experience and 4+ years across backend, systems, and industrial software engineering. I design and operate the services enterprises run their operations on — REST APIs, distributed backend systems, and data pipelines — and I own them in production, not only in development.",
  "My work runs the whole path from endpoint to infrastructure: relational databases, Redis and Kafka, scheduled pipelines, containerised deployments, and CI across AWS, GCP, Hetzner, and on-premise servers. I am comfortable in more than one stack, most often Python and Django, also Java and Spring Boot, and I pick the tool the problem asks for.",
  "A good part of that work sits where software meets physical operations: connecting backend systems to optimization and machine-learning models, and to OPC, PLC, and SCADA environments. Those integrations carry tens of thousands of transactions a day and have to keep running when something upstream does not.",
];

/* Skills
 **************************************************************
  Grouped the same way as the CV so the site and the CV stay in sync.
*/
export const skillGroups = [
  {
    id: "backend",
    label: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST API design",
      "Java",
      "Spring Boot",
    ],
  },
  {
    id: "data",
    label: "Data & Messaging",
    items: [
      "PostgreSQL",
      "MySQL",
      "Microsoft SQL Server",
      "Redis",
      "Kafka",
      "Airflow",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: [
      "Docker",
      "AWS (EC2, S3, Route 53)",
      "GCP (Compute Engine, Cloud Storage)",
      "Hetzner",
      "Linux / Ubuntu",
      "Jenkins",
      "Git / GitHub",
    ],
  },
  {
    id: "platforms",
    label: "Platforms & Integration",
    items: [
      "Distributed backend services",
      "Third-party APIs",
      "MinIO",
      "Keycloak",
      "OPC",
      "PLC",
      "SCADA",
    ],
  },
];

// Resume link - served from the /public folder so it ships with the site
export const resume = `${process.env.PUBLIC_URL}/Yakup_Enes_Guven_CV.pdf`;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  "Row-Match-Rest-API",
  "ngnix-docker-test-project",
  "Mini-File-System",
];

/* Projects that do not live on GitHub. These are shown before the repos pulled
   from the API. Omit `html_url` to hide the card's link. */
export const extraProjects = [
  {
    id: "duzelt-beni",
    name: "Düzelt Beni",
    description:
      "Django / Django REST Framework application for Turkish natural language processing, exposing text-correction endpoints over a REST API.",
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xvonwlgj";
