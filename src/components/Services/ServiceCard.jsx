import React from "react";
import { FaArrowRight } from "react-icons/fa";
import useScrollLeftAnimation from "../../hooks/useScrollLeftAnimation";

const ServiceCard = ({ service, index }) => {
  const { leftRef, showLeft } =
    useScrollLeftAnimation();

  return (
    <div
      ref={leftRef}
      className={`card reveal-card animate-left ${
        showLeft
          ? "left-show"
          : "left-hidden"
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      <span className="service-icon">
        {service.icon}
      </span>

      <h4 className="font-medium">
        {service.title}
      </h4>

      <p>{service.description}</p>

      <a href="#" className="link">
        Learn More &nbsp;
        <FaArrowRight />
      </a>
    </div>
  );
};

export default ServiceCard;