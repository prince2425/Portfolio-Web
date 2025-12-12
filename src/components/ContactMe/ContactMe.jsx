import React from "react";
import { FaFacebookF, FaPinTerestp,FaInstagram, FaLinkedinIn } from 'react-icon/fa'
import { FaXTwitter } from 'react-icon/fa6'
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section>
      <div className="wrapper p-block-9">
        <div className="text-center">
          <span className="sub-text overlay-text middle" datatype="Contact Me">
            Contact Me
          </span>
          <h2>
            Let's Talk for{" "}
            <span className="green-text">
              Your <br /> Next Project
            </span>
          </h2>
        </div>

        <div className="flex gap-5 mt-5">
          <form action="">
            <div className="flex gap-2">
              <div className="input-container">
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" id="name"  required autoComplete="off " placeholder="Titu singh" className="input-field"/>
              </div>
              <div className="input-container">
                <label htmlFor="">Email:</label>
                <input type="text" name="email" id='email'  required autoComplete="off " placeholder="titu@gmail.comh" className="input-field"/>
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <div className="input-container">
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone"  required autoComplete="off " placeholder="Enter Phone Number" className="input-field"/>
              </div>
              <div className="input-container">
                <label htmlFor="">I'm interested in </label>
                <select name="interest" id="interest" defaultValue='Select' className="input-field select">
                  <option disable value="Select">Select</option>
                  <option value="Canada">Website Design</option>
                  <option value="UAE">UI/UX Design</option>
                  <option value="Spain">App Design</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <div className="input-container">
                <label htmlFor="range">Budget Range(USD)*</label>
                <select name="range" id="range" defaultValue='Select' className="input-field select">
                  <option disable value="Select">Select</option>
                  <option value="Canada">$100-$500</option>
                  <option value="UAE">$500-$1000</option>
                  <option value="Spain">$10000+</option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="country">Country</label>
                <select name="country" id="country" defaultValue='Select' className="input-field select">
                  <option disable value="Select">Select</option>
                  <option value="Canada">Canada</option>
                  <option value="UAE">UAE</option>
                  <option value="Spain">Spain</option>
                </select>
              </div>
            </div>
            <div className="mt-1">
              <label htmlFor="message">Your Message</label> <br />
              <textarea name="message" id="message" placeholder="Enter here....." required className="input-field" rows={9}></textarea>
            </div>
            <div className="mt-1">
              <a href="#" className="btn">Send Message</a>
            </div>
          </form>

          <div className=" info">
            <div className="detail gap-4">
              <div>
                <h6>Address</h6>
                <p>
                  2332 Royal Ln .Mesa, <br />
                  new jernay 32451
                </p>
              </div>
              <div>
                <h6>Contact</h6>
                <p>
                  Phone:0123-456-789<br />
                  Email: example@gmail.com
                </p>
              </div>
              <div>
                <h6>Time</h6>
                <p>
                  Monday- Friday : 10:00 - 08:00 <br />
                  Saturday-Sunday: 10:00 - 06:00
                </p>
              </div>
            </div>

            <div className="bg-header rounded-b">
              <h5>Stay Connected</h5>

              <div className="flex gap-1 mt-2">
                <a href="#" className="icon-container black-inverse">
                  <FaFacebookF />
                </a>
                <a href="#" className="icon-container black-inverse">
                  <FaXTwitter />
                </a>
                <a href="#" className="icon-container black-inverse">
                  <FaPinTerestp />
                </a>
                <a href="#" className="icon-container black-inverse">
                  <FaInstagram />
                </a>
                <a href="#" className="icon-container black-inverse">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
