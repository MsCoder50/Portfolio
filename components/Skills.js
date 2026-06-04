"use client";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaPhp, FaBootstrap, FaDatabase, FaRobot 
} from "react-icons/fa";
import { 
  SiMongodb, SiMariadb, SiExpress, SiNextdotjs, SiC, SiCplusplus, 
  SiTailwindcss 
} from "react-icons/si";

// Skill categories with proficiency levels
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, level: 100 },
      { name: "CSS", icon: <FaCss3Alt />, level: 100 },
      { name: "JavaScript", icon: <FaJs />, level: 70 },
      { name: "React.js", icon: <FaReact />, level: 70 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 40 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 70 },
      { name: "Bootstrap", icon: <FaBootstrap />, level: 70 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 70 },
      { name: "Express.js", icon: <SiExpress />, level: 70 },
      { name: "PHP", icon: <FaPhp />, level: 100 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 70 },
      { name: "MariaDB", icon: <SiMariadb />, level: 70 },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython />, level: 100 },
      { name: "C", icon: <SiC />, level: 70 },
      { name: "C++", icon: <SiCplusplus />, level: 70 },
    ],
  },
  {
    title: "Robotics & AI",
    skills: [
      { name: "Robotics", icon: <FaRobot />, level: 70 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#121212] text-white">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12 text-[#38bdf8]"
      >
        Skills & Expertise
      </motion.h2>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-[#38bdf8] mb-4">
              {category.title}
            </h3>

            {/* Skills List */}
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl text-[#38bdf8]">{skill.icon}</div>
                    <p className="text-lg">{skill.name}</p>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                    <div
                      className="bg-[#38bdf8] h-4 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
