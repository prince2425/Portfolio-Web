







import React from "react";
import "./Services.css";
import { FaLaptopCode } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
const ServicesData = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Creating fast, responsive, and user-friendly websites.Fully  responsive using HTML, CSS, JavaScript,  and  frameworks  like React.js  Next JS  to  deliver user experiences across all devices.",
    icon: <FaGlobe className="green-text" />,
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "Designing and developing scalable, high-performance software applications to meet business or user-specific requirements with a focus on reliability and maintainability.",
    icon: <FaCode />,
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "Delivering complete web solutions by combining powerful backend logic with interactive frontend interfaces using the MERN stack (MongoDB, Express, React, Node).",
    icon: <FaLaptopCode />,
  },
];


const Services = () => {
  const renderServicesData = ServicesData.map((service) => {
    return (
      <div className="card" key={service.id}>
        <span className="service-icon">{service.icon}</span>
        <h4 className="font-medium">{service.title}</h4>
        <p>{service.description}</p>

        <a href="#" className="link">
          Learn More &nbsp;
          <FaArrowRight />
        </a>
      </div>
    );
  });

  return (
    <section>
      <div id="service" className="wrapper p-block-9 border-btn">
         <div className="flex between gap-4 flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center text-center">
            <span className=" text-6xl font-medium bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent overflow-hidden" datatype="Services">
              My Specialization
            </span>


            <h2 className="font-medium">
              <span className="green-text ">Services</span> I Provide
            </h2>
          </div>

          {/* <a href="#" className="btn">
            View All Services
          </a> */}
        </div> 

  

        <div className="flex flex-col md:flex-row gap-3 mt-2">{renderServicesData}</div>
      </div>
    </section>
  );
};

export default Services;



























// import React from "react";
// import "./Services.css";
// import { FaLaptopCode, FaPenRuler } from "react-icons/fa6";
// import { FaPenNib, FaArrowRight } from "react-icons/fa";

// const Services = () => {
//   const renderServicesData = ServicesData.map((service) => {
//     return (
//       <div className="card" key={service.id}>
//         <span className="service-icon">{service.icon}</span>
//         <h4>{service.title}</h4>
//         <p>{service.description}</p>
//         <a href="#" className="link">
//           Learn More &nbsp;
//           <FaArrowRight />
//         </a>
//       </div>
//     );
//   });

//   return (
//     <section>
//       <div className="wrapper p-block-9 border-btn">
//         <div className="flex between gap-4">
//           <div>
//             <span className="sub-text overlay-text" datatype="Services">
//               My Specialization
//             </span>
//             <h2>
//               <span className="green-text">Services</span> Services I Provide
//             </h2>
//           </div>

//           <a href="#" className="btn self-end">
//             View All Services
//           </a>
//         </div>

//         <div className="flex gap-2 mt-5">{renderServicesData}</div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// const ServicesData = [
//   {
//     id: 1,
//     title: "UI/U Design",
//     description:
//       "ngagement, ensure seamless experiences, and align perfectly with your brand goals across web and mobilec plateforms.",
//     icon: <FaPenRuler  className="arrow green-text"/>,
//   },
//   {
//     id: 2,
//     title: "Application Design",
//     description:
//       "ngagement, ensure seamless experiences, and align perfectly with your brand goals across web and mobilec plateforms.",
//     icon: <FaPenNib />,
//   },
//   {
//     id: 3,
//     title: "Website Design",
//     description:
//       "ngagement, ensure seamless experiences, and align perfectly with your brand goals across web and mobilec plateforms.",
//     icon: <FaLaptopCode />,
//   },
// ];



