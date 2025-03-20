"use client"; // This forces Next.js to render it only on the client
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-white text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold"
      >
        Hi, I'm Mohammad Saad
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl mt-4"
      >
        Web Developer | MERN Stack | Python | Robotics
      </motion.p>

      <div className="mt-6 flex space-x-4">
        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-blue-600 rounded-lg text-lg font-medium"
        >
          Hire Me
        </motion.a>
        <motion.a 
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 border-2 border-white rounded-lg text-lg font-medium"
        >
          View Projects
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
