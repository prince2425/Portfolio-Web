import React from "react";
import AboutImage from "../../assets/about_image2.png";
import "./AboutMe.css";
import CV from "../../assets/Resume.docx";

const AboutMe = () => {
  return (
    <section>
      <div id="about" className="flex gap-20 wrapper p-block-9 border-btn">
        <div className="flex-1 basis-75">
          <img
            src={AboutImage}
            alt="Abou"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover p-1 md:p-9 lg:p-15"
          />
        </div>

        <div className="flex-1 basis-75">
          <span
            className=" text-6xl font-medium bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent "
            datatype="About Me"
          >
            About Me
          </span>
          {/* sub-text overlay-text */}
          <h2 className="">
            Who is <span className="green-text m-5">Prince Singh</span>
          </h2>

          <p className="para text-3xl ">
            I’m Prince Singh, a passionate and detail-oriented software and web
            developer with a strong foundation in computer science. I specialize
            in building scalable and efficient web applications using
            technologies like React, Node.js, and MongoDB. With hands-on
            experience in full-stack development and a keen interest in machine
            learning, I enjoy solving complex problems and creating seamless
            user experiences. My journey includes practical experience where I
            enhanced my skills in frontend development and data analysis. I
            thrive on learning new technologies quickly and adapting to
            challenging projects. Beyond coding, I am proficient in tools like
            Git, Cloudinary, and Tailwind CSS. I have successfully developed
            diverse projects ranging from hotel booking systems to real-time
            chat applications. Dedicated to continuous growth, I actively
            contribute to the developer community through solving algorithmic
            challenges.
          </p>

          <div className="flex gap-2 my-12 px-1">
            <div className="pr-3">
              <h6 className="text-4xl font-medium text-[var(--accent-clr)] text-center">
                10+
              </h6>
              <p>Projects Completed</p>
            </div>

            <div className="px-3">
              <h6 className="text-4xl font-medium text-[var(--accent-clr)] text-center">
                5+
              </h6>
              <p>Industry Covered</p>
            </div>

            <div className="px-3">
              <h6 className="text-4xl font-medium  text-[var(--accent-clr)] text-center">
                0.2+
              </h6>
              <p>Years of Experience</p>
            </div>
          </div>

          <a href={CV} download="MyCV" className="btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
