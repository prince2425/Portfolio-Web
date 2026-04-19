// import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./ContactMe.css";

import emailjs from "emailjs-com";
import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    // range: "",
    // country: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendData = (e) => {
    e.preventDefault();

    emailjs
      .send("service_m0ctnbf", "template_q3889jq", formData, "M_hrkxo6cUlSMbflx")
      .then(
        () => {
          alert("✅ Message sent successfully!");

           // ✅ FORM RESET
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
        });
        },
        () => {
          alert("❌ Failed to send message");
        },
      );
  };

  return (
    <section>
      <div id="contactme" className="wrapper p-block-9">
        <div className="text-center height">
          <span
            className="text-6xl font-medium bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent overlay-text  middle"
            datatype="Contact Me"
          >
            Contact Me
          </span>
          <h2 className="font-medium">
            Let's Talk for <span className="green-text">Your Next Project</span>
          </h2>
        </div>

        <div className="flex gap-5 mt-8">
          <form onSubmit={sendData}>
            <div className="block md:flex gap-2">
              <div className="input-container ">
                <label htmlFor="">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="off"
                  placeholder="enter Your name"
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="enter your Email"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="block md:flex gap-2 mt-1">
              <div className="input-container">
                <label htmlFor="phone"> Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  autoComplete="off"
                  placeholder="enter Phone Number"
                  className="input-field"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="">I'm interested in </label>
                <select
                  name="interest"
                  id="interest"
                  className="input-field select"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Select
                  </option>
                  <option value="Website Design">Website Design</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="App Design">App Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div>
            {/* <div className="block md:flex gap-2 mt-1">
              <div className="input-container">
                <label htmlFor="range">Budget Range(USD)*</label>
                <select
                  name="range"
                  id="range"
                  className="input-field select"
               
                    required

                >
                  <option disabled value="">Select</option>
                  <option value="$100-$500">$100-$500</option>
                  <option value="$500-$1000">$500-$1000</option>
                  <option value="$1000+">$1000+</option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  id="country"
                  className="input-field select"
                  
                    required

                >
                  <option disabled value="">
                    Select
                  </option>
                  <option value="India">India</option>
                  <option value="UAE">UAE</option>
                  <option value="Canada">Canada</option>
                  <option value="Spain">Spain</option>
                </select>
              </div> 
            </div>*/}
            </div>
            <div className="mt-1">
              <label htmlFor="message">Your Message</label> <br />
              <textarea
                name="message"
                id="message"
                placeholder="Enter here....."
                required
                className="input-field"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="pt-3">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>

          <div className=" info cart">
            <div className="detail gap-4">
              <div>
                <h6 className="green-text">Address</h6>
                <p>
                  Noida, Uttar Pradesh <br />
                </p>
              </div>
              <div>
                <h6 className="green-text">Contact</h6>
                <p>
                  Phone:{" "}
                  <a href="tel:8303508816" className="text-blue-500">
                    8303508816
                  </a>
                  <br />
                  Email:{" "}
                  <a href="mailto:shiprince@gmail.com">
                    shiprincesingh@gmail.com
                  </a>
                </p>
              </div>
              {/* <div>
                <h6 className="green-text">Time</h6>
                <p>
                  Monday- Friday : 10:00 - 08:00 <br />
                  Saturday-Sunday: 10:00 - 06:00
                </p>
              </div> */}
            </div>

            <div className="bg-header rounded-b ">
              <h5 className="green-text pt-3">Stay Connected</h5>

              <div className="flex gap-1.75 md:gap-1 pt-1.5">
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
                  href="https://wa.me/918303508816"
                  target="_blank"
                  className="icon-container black-inverse"
                >
                  <FaWhatsapp />
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