import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({
  service,
  index,
}) => {
  const cardRef = useRef(null);
  const [show, setShow] =
    useState(false);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setShow(
            entry.isIntersecting
          );
        },
        {
          threshold: 0.25,
        }
      );

    if (cardRef.current) {
      observer.observe(
        cardRef.current
      );
    }

    return () =>
      observer.disconnect();
  }, []);

  const handleMouseMove = (
    e
  ) => {
    const card =
      e.currentTarget;

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;
    const y =
      e.clientY - rect.top;

    const centerX =
      rect.width / 2;
    const centerY =
      rect.height / 2;

    const rotateX =
      ((y - centerY) /
        centerY) *
      -10;

    const rotateY =
      ((x - centerX) /
        centerX) *
      10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = (
    e
  ) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      className={`card ${
        show
          ? "left-show"
          : "left-hidden"
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      <div
        className="card3d"
        onMouseMove={
          handleMouseMove
        }
        onMouseLeave={
          handleMouseLeave
        }
      >
        <span className="service-icon">
          {service.icon}
        </span>

        <h4>
          {service.title}
        </h4>

        <p>
          {service.description}
        </p>

        <a
          href="#"
          className="link"
        >
          Learn More
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;