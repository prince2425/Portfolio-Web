import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="flex between border-btn p-block-2 gap-4">
          <h2>
            Let's <span className="green-text">Connect</span> There
          </h2>
          <a href="#" className="btn self-end">
            Hire Me Now
          </a>
        </div>
        <div className="p-block-7 flex flex-start gap-4">
          <div className="footer-wrapper">
            <a href="#" className="logo flex text-white gap-2">
              <span className=" w-10 h-10  rounded-full bg-[#7afc0f] text-white flex items-center justify-center ">
                P
              </span>
              Singh.
            </a>
            <p className="mt-2">
              I'am an experience web designer with 6+ years in the field ,
              Collaborating with various company.
            </p>

            <div className="flex gap-[1.75rem] md:gap-1 lg:gap-1 m-4 w-full pb-4">
              <a
                href="https://www.facebook.com/prince.singh.760369/?_rdr"
                target="_blank"
                className="icon-container black-inverse"
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
                href="https://wa.me/8303508816"
                target="_blank"
                className="icon-container black-inverse"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <ul className="footer-wrapper text-white">
            <li>
              <h6 className="green-text">Navigation</h6>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                Home
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                Services
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                About Me
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                Projects
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                Testimonials
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                Contact Me
              </a>
            </li>
          </ul>
          <ul className="footer-wrapper text-white ">
            <li className="">
              <h6 className="green-text">Contact</h6>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                8303-508-816
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                www.example.com
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                shiprincesingh@gmail.com
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                1523 Royal jj mnjjh
              </a>
            </li>
          </ul>

          <div className="footer-wrapper ">
            <h6 className="green-text">Get the latest Information</h6>
            <div className="footer-input mt-2 flex items-stretch">
              <input
                type="email"
                autoComplete="off"
                placeholder="email here"
                className="email-field"
              />
              <button className="input-btn">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="wrapper flex between">
          <p>Copyright &copy; Singh. All Rights Reserved</p>
          <p>User Terms & Condition | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
