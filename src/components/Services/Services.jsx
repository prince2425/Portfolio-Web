import React from "react";
import "./Services.css";
import { FaLaptopCode, FaPenRuler } from "react-icons/fa6";
import { FaPenNib, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const renderServicesData = ServicesData.map((service) => {
    return (
      <div className="card" key={service.id}>
        <span className="service-icon">{service.icon}</span>
        <h4>{service.title}</h4>
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
      <div className="wrapper p-block-9 border-btn">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="Services">
              My Specialization
            </span>
            <h2>
              <span className="green-text">Services</span> Services I Provide
            </h2>
          </div>

          <a href="#" className="btn self-end">
            View All Services
          </a>
        </div>

        <div className="flex gap-2 mt-5">{renderServicesData}</div>
      </div>
    </section>
  );
};

export default Services;

const ServicesData = [
  {
    id: 1,
    title: "UI/U Design",
    description:
      "ngagement, ensure seamless experiences, and align perfectly with your brand goals across web and mobilec plateforms.",
    icon: <FaPenRuler  className="arrow green-text"/>,
  },
  {
    id: 2,
    title: "Application Design",
    description:
      "ngagement, ensure seamless experiences, and align perfectly with your brand goals across web and mobilec plateforms.",
    icon: <FaPenNib />,
  },
  {
    id: 3,
    title: "Website Design",
    description:
      "ngagement, ensure seamless experiences, and align perfectly with your brand goals across web and mobilec plateforms.",
    icon: <FaLaptopCode />,
  },
];
