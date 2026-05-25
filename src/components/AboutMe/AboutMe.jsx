import React from "react";
import AboutImage from "../../assets/about_image2.png";
import "./AboutMe.css";
import CV from "../../assets/Resume.docx";
import useScrollLeftAnimation from "../../hooks/useScrollLeftAnimation";
import useScrollRightAnimation from "../../hooks/useScrollRightAnimation";

const AboutMe = () => {
  const { leftRef, showLeft } = useScrollLeftAnimation();
  const { rightRef, showRight } = useScrollRightAnimation();

  return (
    <section id="about" className="about-section">
      <div className="text-center height mt-20">
        <span
          className="text-6xl font-medium bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent overlay-text middle"
          datatype="About Me"
        >
          About Me
        </span>
      </div>

      <div
        id="about"
className="lg:flex md:flex-row gap-8 wrapper p-block-9 border-btn items-center"
      >
        {/* Left Image Section */}
        <div
          ref={leftRef}
          className={`lg:w-[35%] w-full flex justify-center animate-left ${
            showLeft ? "left-show" : "left-hidden"
          }`}
        >
          <img
            src={AboutImage}
            alt="About"
            className="imagehover w-[380px] md:w-[350px] lg:w-[350px] h-auto object-cover mx-auto"
          />
        </div>

        {/* Right Content Section */}
        <div
          ref={rightRef}
          className={`lg:w-[65%] w-full animate-right ${
            showRight ? "right-show" : "right-hidden"
          }`}
        >
          <h2>
            Who is <span className="green-text m-5">Prince Singh</span>
          </h2>

          <p className="para w-full max-w-none text-base sm:text-lg md:text-xl leading-relaxed text-justify">
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

          <div className="flex lg:flex gap-2 my-12 px-1">
            <div className="pr-3">
              <h6 className="text-3xl lg:text-4xl font-medium text-[var(--accent-clr)] text-center">
                10+
              </h6>
              <p>
                Projects <br className="block sm:hidden" /> Completed
              </p>
            </div>

            <div className="px-3">
              <h6 className="text-3xl lg:text-4xl font-medium text-[var(--accent-clr)] text-center">
                5+
              </h6>
              <p>
                Industry <br className="block sm:hidden" /> Covered
              </p>
            </div>

            <div className="px-3">
              <h6 className="text-3xl lg:text-4xl font-medium text-[var(--accent-clr)] text-center">
                0.2+
              </h6>
              <p>
                Years of <br className="block sm:hidden" /> Experience
              </p>
            </div>
          </div>

          <a href={CV} download="MyCV" className="btn mt-2">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;