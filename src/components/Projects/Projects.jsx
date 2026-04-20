import React from "react";
import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.jpg";
import Project4 from "../../assets/project4.jpg";
import Project5 from "../../assets/project5.png";
import "./Projects.css";
import { FaArrowRight } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Smart Grocery App for Seamless Shopping Experience",
    description:
      "A dynamic grocery platform with product listings, wishlist, cart functionality, and order summary—focused on delivering.",
    image: Project1,
    liveLink: "https://grocery-app-sage-theta.vercel.app/",
    tech: [
      { id: 1, list: "React JS" },
      { id: 2, list: "Tailwind CSS" },
      // { id: 3, list: "Chart" },
    ],
  },
  {
    id: 2,
    title: "Snake Game with Real-Time Controls and Scoring",
    description:
      "A fun and interactive game where players control a growing snake, collect food, and avoid collisions while aiming for the highest score.",
    image: Project2,
    liveLink: "https://clever-snake-5e7746.netlify.app/",

    tech: [
      { id: 1, list: "React JS" },
      { id: 2, list: "Tailwind CSS" },
      // { id: 3, list: "Figma" },
    ],
  },
  {
    id: 3,
    title: "E-Commerce Platform for Modern Online Shopping",
    description:
      "A dynamic online shopping platform that allows users to explore products, add items to cart or wishlist.",
    image: Project3,
    liveLink: "https://e-commerce-qvjh.vercel.app/",

    tech: [
      { id: 1, list: "React JS" },
      { id: 2, list: "Tailwind CSS" },
      // { id: 3, list: "Adobe" },
    ],
  },
  {
    id: 4,
    title: "To-Do App for Efficient Task Management",
    description:
      "An interactive task management application that enables users to create, update, and delete tasks efficiently.",
    image: Project4,
    liveLink: "https://todo-kappa-lime.vercel.app/",

    tech: [
      { id: 1, list: "React JS" },
      { id: 2, list: "Tailwind CSS" },
      // { id: 3, list: "Adobe" },
    ],
  },
  {
    id: 5,
    title: "QR Code Generator for Quick Data Sharing",
    description:
      "Developed a QR Code Generator application that allows users to convert text, URLs, and other data into scannable QR codes instantly.",
    image: Project5,
    liveLink: "https://weather-app-lir7.vercel.app/",

    tech: [
      { id: 1, list: "React JS" },
      { id: 2, list: "Tailwind CSS" },
      // { id: 3, list: "Adobe" },
    ],
  },
];

const Projects = () => {
  const renderProjectsData = projectsData.map((project) => {
    return (
      <div id="project" className="card flex gap-5 project" key={project.id}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          <ul className="flex gap-1">
            {project.tech.map((technology) => (
              <li key={technology.id} className="list">
                {technology.list}
              </li>
            ))}
          </ul>

          <h3 className="mt-2">{project.title}</h3>

          <p className="para">{project.description}</p>

          {/* <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container border-inverse rotate"
          >
            <FaArrowRight />
          </a> */}

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
  });

  return (
    <section>
      <div className="wrapper p-block-9 border-btn ">
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

          <a href="#" className="btn self-end">
            View All Projects
          </a>
        </div>

        <div className="flex column gap-5 mt-2">{renderProjectsData}</div>
      </div>
    </section>
  );
};

export default Projects;

// import React from 'react'
// import Project1 from '../../assets/project1.jpg'
// import Project2 from '../../assets/project2.jpg'
// import Project3 from '../../assets/project3.jpg'
// import './Projects.CSS'
// import {FaArrowRight} from 'react-icons/fa';

// const Projects = () => {

//     const renderProjectsData = projectsData.map(project => {
//         return(
//             <div className="card flex gap-5 project" key={project.Id}>
//                 <div className="project-image">
//                     {/* <img src={project-image} alt="" /> */}
//                 </div>

//                 <div className="project-content">
//                     <ul className='flex gap-1'>
//                         {project.tech.map(technology =>{
//                             return(
//                                 <li key={technology.id} className='list'>{technology.list}</li>
//                             )
//                         })}
//                     </ul>
//                     <h3 className='mt-2'>{project.title}</h3>
//                     <p className='para'>{project.description}</p>
//                     <a href="#" className='icon-container border-inverse rotate'>
//                         <FaArrowRight />
//                     </a>
//                 </div>
//             </div>
//         )
//     })

//   return (
//     <section>
//         <div className="wrapper p-block-9">
//             <div className="wrapper p-block-9 border-btn">
//         <div className="flex between gap-4">
//           <div>
//             <span className="sub-text overlay-text" datatype="My portfolio">
//               My Portfolio
//             </span>
//             <h2>
//               Let's Have a look <br /> at<span className="green-text">My Portfolio</span>
//             </h2>
//           </div>

//           <a href="#" className="btn self-end">
//             View All Projects
//           </a>
//         </div>
//         <div className='flex column gap-2 mt-5'>
//             {renderProjectsData}
//         </div>
//         </div>

// </div>
//     </section>
//   )
// }

// export default Projects

// const projectsData = [
//     {
//         Id: 1,
//         title: 'Smart Financial Dashboard for Digital Management',
//         description:'dmsl;jasgamng, a  fgnddfkg fg g gfjg fgg a fnafnajfja faf as fas fasjd fsaj fals hfah',
//         image:Project1,
//         tech:[
//             {
//                 id:1,
//                 list: 'React js'
//             },
//             {
//                 id:2,
//                 list: 'MUI CSS'
//             },
//             {
//                 id:3,
//                 list: 'Chart js'
//             },
//         ]
//     },
//      {
//         Id: 2,
//         title: 'Modern VPN App Interface for Secure Connectivity',
//         description:'dmsl;jasgamng, a  fgnddfkg fg g gfjg fgg a fnafnajfja faf as fas fasjd fsaj fals hfah',
//         image:Project2,
//         tech:[
//             {
//                 id:1,
//                 list: 'Flutter'
//             },
//             {
//                 id:2,
//                 list: 'Dart'
//             },
//             {
//                 id:3,
//                 list: 'Figma'
//             },
//         ]
//     },
//      {
//         Id: 3,
//         title: 'rf;gkfgga;ldffkd  d fad jfad fa f f f df  fdlk adlk',
//         description:'dmsl;jasgamng, a  fgnddfkg fg g gfjg fgg a fnafnajfja faf as fas fasjd fsaj fals hfah',
//         image:Project3,
//         tech:[
//             {
//                 id:1,
//                 list: 'Flutter'
//             },
//             {
//                 id:2,
//                 list: 'Dart'
//             },
//             {
//                 id:3,
//                 list: 'Adobe XD'
//             },
//         ]
//     },
// ]
