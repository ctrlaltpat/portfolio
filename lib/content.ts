export const intro = [
  "Hi!👋🏾 I'm Patrick, a passionate Full Stack Developer based in London with a deep love for creating beautiful and functional web experiences.",
  "My journey in tech started with an interest in creating a multiplayer game in Unity. Over time, I've honed my skills in web development, and worked on a range of projects, from simple landing pages to complex web applications.",
  "When I'm not coding, you can find me rollerskating through London's streets, gaming, or experimenting with new technologies. I'm always excited to collaborate on interesting projects and learn new things.",
  "This is my portfolio to showcase my projects and a little about my life.",
];

export const experience = [
  {
    title: "Developer",
    company: "Sky",
    tenure: "Oct 2022 - Nov 2024",
    description:
      "Maintained thousands of templates using Typescipt, MJML and CSS",
    work: [
      "Reduced visual regression testing time by 50%, reducing the time to production deployment",
      "Managed and improved CI/CD Pipelines using Concourse and various scripts, enhancing developer experience",
      "Increased test coverage by 20-30%, leading to fewer bugs and more confidence in releases",
    ],
  },
  {
    title: "Software Engineer",
    company: "Cisco",
    tenure: "Feb 2019 - Sep 2022",
    description:
      "Developed and maintained multiple client projects using various technologies including React, Redux, TypeScript, and AngularJS.",
    work: [
      "Collaborated with cross-functional teams to deliver high-quality software, enhancing customer and vendor experiences",
      "Integrated various third-party APIs and services, improving data availability and maintaining security",
      "Co-facilitated interviews for successful new hires - Software Engineer, Product Owner",
    ],
  },
  {
    title: "Web Developer",
    company: "Absowebly",
    tenure: "May 2017 - Sep 2018",
    description:
      "Built and maintained multiple accessible, responsive websites using PHP, HTML, CSS, and JavaScript.",
    work: [
      "Produced the intial UI for a brand launch, resulting in initial sales of over £80,000",
      "Successfully built 10+ pixel-perfect websites from bespoke in-house designs",
      "Improved the accessibility score of websites by 20%, complying with National Disability Authority guidelines",
    ],
  },
];

type SkillCategory = "frontend" | "backend" | "cicd" | "tools";

type Skill = {
  name: string;
  commercialExp: boolean;
};

export const skills: Record<SkillCategory, Skill[]> = {
  frontend: [
    { name: "Responsive Web Development", commercialExp: true },
    { name: "HTML", commercialExp: true },
    { name: "CSS", commercialExp: true },
    { name: "JavaScript", commercialExp: true },
    { name: "TypeScript", commercialExp: true },
    { name: "React", commercialExp: true },
    { name: "Redux", commercialExp: true },
    { name: "Sass", commercialExp: true },
    { name: "Next.js", commercialExp: false },
    { name: "TailwindCSS", commercialExp: false },
    { name: "Redux Saga", commercialExp: true },
    { name: "MJML", commercialExp: true },
    { name: "StoryBook", commercialExp: true },
    { name: "ChakraUI", commercialExp: false },
    { name: "React Native", commercialExp: false },
    { name: "AngularJS", commercialExp: true },
    { name: "Robohydra", commercialExp: true },
    { name: "Vue.js", commercialExp: false },
  ],
  backend: [
    { name: "Ruby", commercialExp: false },
    { name: "Ruby on Rails", commercialExp: false },
    { name: "PHP", commercialExp: true },
    { name: "Laravel", commercialExp: false },
    { name: "Multichain", commercialExp: true },
    { name: "Python", commercialExp: false },
    { name: "Wordpress(Headless)", commercialExp: true },
    { name: "Node.js", commercialExp: true },
    { name: "MySQL", commercialExp: false },
    { name: "PostgreSQL", commercialExp: false },
    { name: "Go", commercialExp: false },
    { name: "Express", commercialExp: false },
    { name: "MongoDB", commercialExp: false },
    { name: "Scala", commercialExp: false },
  ],
  cicd: [
    { name: "Jenkins", commercialExp: true },
    { name: "Concourse", commercialExp: true },
  ],
  tools: [
    { name: "Git", commercialExp: true },
    { name: "Github", commercialExp: true },
    { name: "VSCode", commercialExp: true },
    { name: "Jest", commercialExp: true },
    { name: "Cypress", commercialExp: true },
    { name: "Agile", commercialExp: true },
    { name: "Docker", commercialExp: false },
    { name: "Postman", commercialExp: true },
    { name: "React-Testing-Library", commercialExp: true },
    { name: "Enzyme", commercialExp: true },
    { name: "Google Analytics", commercialExp: true },
    { name: "BitBucket", commercialExp: true },
    { name: "NPM", commercialExp: true },
    { name: "Bash", commercialExp: true },
    { name: "Apache Spark", commercialExp: true },
    { name: "Unity3D", commercialExp: false },
  ],
};

export const socials = {
  codepen: "https://codepen.io/ctrlaltpat",
  github: "https://github.com/ctrlaltpat",
  linkedin: "https://www.linkedin.com/in/patrickcpilgrim/",
};
