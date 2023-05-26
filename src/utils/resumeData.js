import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default {
  name: " Nebiyyeh Dagdeviren",
  title: " Full Stack Java Developer",

  email: " nebiyyeh.d@gmail.com",
  address: "Corpus Christi, TX",

  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/nebiyyeh-kamaci-dagdeviren/",
      text: " LinkedIn",
      icon: <LinkedInIcon />,
    },

    GitHub: {
      link: "https://github.com/Nebiyyeh",
      text: " GitHub",
      icon: <GitHubIcon />,
    },
  },

  about:
    "Curiosity and enthusiasm have been my greatest teachers as I turned my creativity, critical thinking, logical reasoning and problem solving talents into software development skills. \n As being eager to learn further technologies I have gained broad knowledge and hands-on experience in; \n     - Spring MVC, Spring Boot and Spring Security with JWT-based authentication \n   - Hibernate, JDBC \n    - Postman API, Swagger API  \n  - PostgreSQL, Oracle SQL and MongoDB \n  - Microservices Architecture, Docker \n - HTML, CSS, SASS, Bootstrap \n - JavaScript, React JS \n - Test Driven Development, Unit Testing \n - Git/GitHub and SDLC       \n I have also been a researcher and a teacher for a while on my life journey which helped me to gain different perspectives as well. \n  My friends and colleagues would describe me as helpful, easygoing, collaborative, wise, kind and witty. \n  I describe myself as a lifelong learner and problem solver.",

  experiences: [
    {
      title: "Back-End Java Developer - Talentech Solutions",
      date: "11/2022 – present",
      description:
        "•Analyzed the requirements and functional specifications to design the back end of a library management system. \n •Developed Restful web services with a Test Driven Development approach. \n •Implemented the application using Spring Boot framework and managed security using Spring Security and JWT-based authentication. \n •Implemented database connectivity using JPA of Spring Data with a PostgreSQL database. \n •Participated in JUnit Testing, debugging and bug fixing. \n •Used GitHub as a version control tool in an Agile environment.",
    },
    {
      title: "Full-Stack Java Developer - Talentech Solutions",
      date: "07/2022 – 11/2022",
      description:
        "•Designed and implemented a car rental web application as a multilayered structure by building Rest APIs. \n •Worked on the entire SDLC in an Agile (SCRUM) environment. \n •Implemented Spring Boot framework and PostgreSQL as database. \n •Involved in development of JWT-based authentication with Spring Security. \n •Implemented a centralized Exception Handling mechanism and logging (Log4j) structure. \n •Utilized JUnit to generate unit test cases. \n •Used Maven to accelerate the development cycle by implementing standard conventions and practices. \n •Involved in UI implementation with React JS, JavaScript and SASS.",
    },
    {
      title: "Biology Teacher - Kharisma Bangsa High School",
      date: "07/2014 – 06/2015",
      description: "",
    },
    {
      title:
        "Graduate Research And Teaching Assistant, Molecular Biology - Fatih University",
      date: "08/2007 – 06/2009",
      description: "",
    },
  ],

  educations: [
    {
      title: "Oracle Certified Associate - ORACLE",
      date: "03/2023",
      description: "",
    },
    {
      title: "Full-Stack Java Developer - TechPro Education",
      date: "05/2022 – 10/2022",
      description:
        "28-week intensive hands-on curriculum focusing on web application development.",
    },
    {
      title: "CS50x: CS50’s Introduction to Computer Science - HarvardX",
      date: "02/2022 – 04/2022",
      description:
        "Harvard University’s introduction to the intellectual enterprises of computer science and the art of programming.",
    },
    {
      title: "MS in Cellular and Molecular Biology - Fatih University",
      date: "08/2007 – 06/2009",
      description: "",
    },
    {
      title: "BS in Molecular Biology and Genetics - METU/ODTU",
      date: "08/2001 – 06/2007",
      description: "",
    },
  ],

  skills: [
    {
      title: "Back-end",
      description: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Hibernate",
        "JDBC",
        "Rest APIs",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      title: "Front-end",
      description: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "Bootstrap",
        "SASS",
      ],
    },
    {
      title: "Other Tools",
      description: [
        "Git/GitHub",
        "JUnit/Mockito",
        "Maven",
        "Jira",
        "Docker",
        "SDLC",
      ],
    },
    {
      title: "Languages",
      description: [
        "Turkish-Native",
        "English-Advanced",
        "Indonesian-Intemediate",
        "German-Beginner",
      ],
    },
  ],
  
  portfolio: [
    {
      tag: "React",
      image: "",
      title: "HTML to react",
      description: "First react work to convert a web page from regular HTML to React single page application",
      links: [
        {link: "", icon: <GitHubIcon/> },
        {link: "", icon: <GitHubIcon/> }
      ]
    },
    {
      tag: "SpringBoot",
      image: "",
      title: "Library app",
      description: "Backend application of Library management system",
      links: [
        {link: "", icon: <GitHubIcon/> },
        {link: "", icon: <GitHubIcon/> }
      ]
    }
  ]


};
