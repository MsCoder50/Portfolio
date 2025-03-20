"use client";
import { motion } from "framer-motion";
import { FaMedal, FaCode, FaRobot, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const experiences = [
  {
    title: "World Robotics Olympiad",
    description: "Participated thrice and won a Silver Medal at the National Level.",
    icon: <FaMedal />,
  },
  {
    title: "Delhi Hackathon (IIT Delhi)",
    description: "Participated in the prestigious Delhi Hackathon organized by IIT Delhi.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Freelance eCommerce Project",
    description: "Developed an eCommerce platform as my debut freelancing project (now closed).",
    icon: <FaCode />,
  },
  {
    title: "Delhi Robotics League",
    description: "Participated in the Delhi Robotics League, organized by IIT Delhi & the Delhi Government.",
    icon: <FaRobot />,
  },
  {
    title: "ATL Marathon Competition",
    description: "Took part in the ATL Marathon competition.",
    icon: <FaBriefcase />,
  },
  {
    title: "Developer at Pre-Revenue Startup",
    description: "Currently working as a developer in a pre-revenue startup.",
    icon: <MdWork />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-[#121212] text-white">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12 text-[#38bdf8]"
      >
        Experience & Achievements
      </motion.h2>

      {/* Total Experience Highlight */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-center mb-10 text-gray-300"
      >
        Over <span className="text-[#38bdf8] font-semibold">6 years</span> of learning and working experience in development.
      </motion.p>

      {/* Experience Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4"
          >
            <div className="text-4xl text-[#38bdf8]">{exp.icon}</div>
            <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
