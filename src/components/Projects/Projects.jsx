import React, { useRef, useEffect, useState } from "react";
import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.jpeg";
import Project3 from "../../assets/project3.png";
import Project4 from "../../assets/project4.jpg";
import Project5 from "../../assets/project5.png";
import Project6 from "../../assets/project6.jpg";
import Project7 from "../../assets/project7.png";
import Project8 from "../../assets/project8.jpeg";
import Project9 from "../../assets/project9.jpeg";

import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Smart Grocery App for Seamless Shopping Experience",
    description:
      "A dynamic grocery platform with product listings, wishlist, cart functionality, and order summary.",
    image: Project1,
    liveLink: "https://grocery-app-sage-theta.vercel.app/",
    tech: ["React JS", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "MERN Food Delivery Application",
    description:
      "Full-stack food delivery application with user authentication, restaurant browsing, cart, online payments, and order management.",
    image: Project2,
    liveLink: "https://your-food-delivery-app.vercel.app/",
    tech: ["MongoDB", "Express JS", "React JS", "Node JS"],
  },
  {
    id: 3,
    title: "E-commerce Platform MERN",
    description: "A full-stack E-commerce application built using MERN stack.",
    image: Project3,
    liveLink: "",
    tech: ["React JS", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "To-Do App for Efficient Task Management",
    description: "Task management app to create, update, and delete tasks.",
    image: Project4,
    liveLink: "https://todo-kappa-lime.vercel.app/",
    tech: ["React JS", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "QR Code Generator for Quick Data Sharing",
    description: "Generate QR codes instantly for text and URLs.",
    image: Project5,
    liveLink: "https://weather-app-lir7.vercel.app/",
    tech: ["React JS", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "E-Commerce Platform for Modern Online Shopping",
    description: "Modern online shopping experience with cart & wishlist.",
    image: Project6,
    liveLink: "https://e-commerce-qvjh.vercel.app/",
    tech: ["React JS", "Tailwind CSS"],
  },

  {
    id: 7,
    title: "Snake Game with Real-Time Controls and Scoring",
    description:
      "A fun and interactive snake game with controls and score tracking.",
    image: Project7,
    liveLink: "https://clever-snake-5e7746.netlify.app/",
    tech: ["React JS", "Tailwind CSS"],
  },
  {
  id: 8,
  title: "Responsive Tic Tac Toe Game",
  description:
    "A modern Tic Tac Toe game with turn-based gameplay, winning line animation, responsive UI, and game reset functionality.",
  image: Project8,
  liveLink: "https://tic-tac-two-nu.vercel.app/",
  tech: ["React JS", "CSS3"],
},
{
  id: 9,
  title: "Weather  App with Live API Integration",
  description:
    "A responsive weather application that provides real-time temperature, humidity, wind speed, weather conditions, and city-based forecasts using live API data.",
  image: Project9,
  liveLink: "https://weather-app-gamma-three-59.vercel.app/",
  tech: ["React JS", "Tailwind CSS", "Axios", "OpenWeather API"],
},
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      className={`card flex gap-5 project 
      ${show ? "show-card" : "hide-card"} 
      ${index % 2 === 0 ? "left-card" : "right-card"}`}
    >
      <div
        className="project-image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <ul className="flex gap-1">
          {project.tech.map((item, i) => (
            <li key={i} className="list">
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mt-2">{project.title}</h3>
        <p className="para">{project.description}</p>

        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-2 inline-block"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section>
      <div className="wrapper p-block-9 border-btn">
        <div className="flex between gap-4   flex-col items-center justify-center text-center">
          <div>
            <span
              className=" text-6xl font-medium bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
              datatype="My Portfolio"
            >
              My Projects
            </span>

            <h2 className="font-medium leading-tight sm:leading-normal">
              Let's Have a look <br className="sm:hidden" />
              at <span className="green-text">My Projecs</span>
            </h2>
          </div>

          {/* <a href="#"  className="btn self-end">
            View All Projects
          </a> */}
        </div>

        <div className="flex column gap-5 mt-2">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
