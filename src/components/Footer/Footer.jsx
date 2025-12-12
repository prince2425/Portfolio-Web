import React from "react";
import {
  FaFacebookF,
  FaPinTerestp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icon/fa";
import { FaXTwitter } from "react-icon/fa6";
import {FaPaperPlane} from "react-icons/fa"
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
            <a href="#" className="logo">
              <span>P</span>Singh.
            </a>
            <p className="mt-2">
              I'am an experience web designer with 6+ years in the field ,
              Collaborating with various company.
            </p>

            <div className="flex gap-1 mt-2">
              <a href="#" className="icon-container green-inverse">
                <FaFacebookF />
              </a>
              <a href="#" className="icon-container green-inverse">
                <FaXTwitter />
              </a>
              <a href="#" className="icon-container green-inverse">
                <FaPinTerestp />
              </a>
              <a href="#" className="icon-container green-inverse">
                <FaInstagram />
              </a>
              <a href="#" className="icon-container green-inverse">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <ul className="footer-wrapper">
            <li>
                <h6>Navigation</h6>
            </li>
            <li className='mt-2'>
                <a href="#" className="link">Home</a>
            </li>
            <li className='mt-2'><a href="#" className='link'>Services</a></li>
            <li className='mt-2'><a href="#" className='link'>About Me</a></li>
            <li className='mt-2'><a href="#" className='link'>Projects</a></li>
            <li className='mt-2'><a href="#" className='link'>Testimonials</a></li>
            <li className='mt-2'><a href="#" className='link'>Contact Me</a></li>
            
          </ul>
          <ul className="footer-wrapper">
            <li className=''>
                <h6>Contact</h6>
            </li>
            <li className='mt-2'>
                <a href="#" className="link">0123-456-789</a>
            </li>
            <li className='mt-2'><a href="#" className='link'>www.exam className='mt-2'ple.com</a></li>
            <li className='mt-2'><a href="#" className='link'>titu@gmail.com</a></li>
            <li className='mt-2'><a href="#" className='link'>1523 Royal jj mnjjh</a></li>

            
          </ul>

          <div className="footer-wrapper ">
            <h6>Get the latest Information</h6>
            <div className="footer-input mt-2 flex strach">
              <input type="email" autoComplete="off" placeholder="email here" className="email-field" />
              <button className="input-btn">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="wrapper flex between">
          <p>Copyright &copy; Ahmed. All Rights Reserved</p>
          <p>User Terms & Condition | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
