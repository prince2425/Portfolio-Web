import React, { useEffect, useRef, useState } from "react";
import HeroImage from "../../assets/image111.png";
import CV from "../../assets/Resume.pdf";
import "./Hero.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "@fontsource/roboto";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useScrollLeftAnimation from "../../hooks/useScrollLeftAnimation";
import useScrollRightAnimation from "../../hooks/useScrollRightAnimation";

const Hero = () => {
  const { leftRef, showLeft } = useScrollLeftAnimation();
  const { rightRef, showRight } = useScrollRightAnimation();

  

  return (
    <section id="home">
      <div className="hero-section flex wrapper gap-4  hight">
        <div
          ref={leftRef}
          className={`hero-content ${showLeft ? "left-show" : "left-hidden"}`}
        >
          <span className="sub-text ">Hi, I'm</span>

          <h1>
            <span className="green-text font-medium playwrite">
              Prince Singh
            </span>
            <br /> <span className="">Software Developer </span>
          </h1>

          <p className="para ">
            I’m a passionate Software Developer who loves building clean,
            responsive, and user-friendly web interfaces.
          </p>

          <div className="flex gap-1.75 md:gap-1 m-4 w-full pb-4">
            <a
              href="https://www.facebook.com/prince.singh.760369/?_rdr"
              target="_blank"
              className="icon-container black-inverse "
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/Prince_singh731"
              target="_blank"
              className="icon-container black-inverse"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://github.com/prince2425"
              target="_blank"
              className="icon-container black-inverse"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/prince_singh_731_/"
              target="_blank"
              className="icon-container black-inverse"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/prince-singh-7008062a6/"
              target="_blank"
              className="icon-container black-inverse"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/918303508816"
              target="_blank"
              className="icon-container black-inverse"
            >
              <FaWhatsapp />
            </a>
          </div>

          <div className="flex gap-2 hight">
            <AnchorLink className="btn" href="#project">
              View My Works
            </AnchorLink>

            <a href={CV} download="MyCV" className=" btn border-btn ">
              Download CV
            </a>
          </div>
        </div>

        <div
          ref={rightRef}
          className={`hero-image imagehover ${
            showRight ? "right-show" : "right-hidden"
          }`}
        >
          <img src={HeroImage} alt="Hero Image" className=" " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
