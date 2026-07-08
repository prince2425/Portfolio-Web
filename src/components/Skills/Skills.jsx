import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaWindows,
  FaCode,
  FaMicrosoft,
} from "react-icons/fa";
import useScrollLeftAnimation from "../../hooks/useScrollLeftAnimation";

import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [

  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    line: "bg-orange-500",
    width: "95%",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    line: "bg-blue-500",
    width: "92%",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    line: "bg-yellow-400",
    width: "90%",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    color: "text-cyan-400",
    line: "bg-cyan-400",
    width: "90%",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-black dark:text-white",
    line: "bg-white",
    width: "85%",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    line: "bg-sky-400",
    width: "95%",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
    line: "bg-green-500",
    width: "85%",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-400",
    line: "bg-gray-400",
    width: "82%",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
    line: "bg-green-400",
    width: "88%",
  },
  {
    name: "SQL",
    icon: <SiMysql />,
    color: "text-blue-400",
    line: "bg-blue-400",
    width: "85%",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-blue-400",
    line: "bg-blue-400",
    width: "80%",
  },
  {
    name: "C",
    icon: <FaCode />,
    color: "text-indigo-400",
    line: "bg-indigo-400",
    width: "78%",
  },
  {
    name: "C++",
    icon: <SiCplusplus />,
    color: "text-blue-600",
    line: "bg-blue-600",
    width: "80%",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
    line: "bg-orange-500",
    width: "90%",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-black dark:text-white",
    line: "bg-white",
    width: "90%",
  },
  {
    name: "VS Code",
    icon: <FaCode />,
    color: "text-blue-500",
    line: "bg-blue-500",
    width: "95%",
  },
  {
    name: "MS Office",
    icon: <FaMicrosoft />,
    color: "text-red-500",
    line: "bg-red-500",
    width: "85%",
  },
  {
    name: "Windows",
    icon: <FaWindows />,
    color: "text-sky-500",
    line: "bg-sky-500",
    width: "90%",
  },
];

const Skills = () => {
  const { leftRef, showLeft } = useScrollLeftAnimation();
  return (
    <section
      id="skills"
      className="py-20 px-5 transition-all duration-300"
      style={{
        background: "var(--background-clr)",
        color: "var(--text-primary-clr)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center gap-4"
        >
          <span
            className="text-5xl md:text-6xl font-medium bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          >
            My Tech Stack
          </span>

          <h2 className="font-medium text-2xl md:text-4xl">
            <span className="green-text">Technologies</span> I Master
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotate: 2,
                y: -10,
              }}
              className="
                rounded-2xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                shadow-lg
                cursor-pointer
                backdrop-blur-md
              "
              style={{
                background: "var(--surface-clr)",
                border: "1px solid rgba(128,128,128,0.2)",
              }}
            >
              {/* Animated Icon */}
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                }}
                transition={{ duration: 0.6 }}
                className={`text-5xl mb-5 ${skill.color}`}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <h3 className="text-lg font-medium mb-6 text-center">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div
                className="w-full h-[6px] rounded-full overflow-hidden"
                style={{
                  background: "rgba(128,128,128,0.3)",
                }}
              >
                <motion.div
                  className={`h-full ${skill.line} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.width }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Percentage */}
              {/* <p
                className="mt-3 text-sm font-medium"
                style={{ color: "var(--text-secondary-clr)" }}
              >
                {skill.width}
              </p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;