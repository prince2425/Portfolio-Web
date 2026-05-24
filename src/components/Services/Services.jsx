import React from "react";
import "./Services.css";

import { FaLaptopCode, FaCode } from "react-icons/fa6";
import { FaArrowRight, FaGlobe } from "react-icons/fa";

import useScrollAnimation from "../../hooks/useScrollAnimation";
import ServiceCard from "./ServiceCard";

/* =========================
   SERVICES DATA
========================= */

const ServicesData = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Creating fast, responsive, and user-friendly websites. Fully responsive using frameworks like React.js & Next.js to deliver smooth user experiences across all devices.",
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

/* =========================
   COMPONENT
========================= */

const Services = () => {
  /* =========================
     3D CARD EFFECT
  ========================= */

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  /* =========================
     SCROLL ANIMATION
  ========================= */

  // const { sectionRef, show } = useScrollAnimation();

  /* =========================
     RENDER SERVICES
  ========================= */

  const renderServicesData = ServicesData.map(
    (service, index) => (
      <ServiceCard
        key={service.id}
        service={service}
        index={index}
      />
    )
  );

  return (
    <section>
      <div
        id="service"
        className="wrapper p-block-9 border-btn"
      >
        {/* SECTION HEADER */}

        <div className="flex between gap-4 flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center text-center">
            <span
              className="text-6xl font-medium bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent overlay-text middle"
              datatype="Services"
            >
              My Specialization
            </span>

            <h2 className="font-medium">
              <span className="green-text">
                Services
              </span>{" "}
              I Provide
            </h2>
          </div>

          {/* BUTTON */}

          {/*
          <a href="#" className="btn">
            View All Services
          </a>
          */}
        </div>

        {/* SERVICES CARDS */}

        <div className="flex flex-col md:flex-row gap-3 mt-2">
          {renderServicesData}
        </div>
      </div>
    </section>
  );
};

export default Services;













