import React from "react";

const projects = [
  {
    name: "StrategemChess",
    description: "App for chess game analysis.",
    tech: "Express.js (HTML, CSS, JS)",
    link: "https://strategem-chess.vercel.app/",
  },
  {
    name: "BlogBlag",
    description: "App for blog writing and posting.",
    tech: "React.js, Express.js, Tailwind CSS",
    link: "#",
  },
  {
    name: "Perfectus Elit",
    description: "Website for project report of a robot.",
    tech: "HTML, CSS, Vanilla JS",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section py-16 text-white relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-[1000px] h-[1000px] bg-[#38bdf8] blur-[180px] rounded-full absolute -top-1/2 left-1/2 transform -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-[#38bdf8] mb-12 drop-shadow-lg">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-xl bg-black bg-opacity-10 shadow-[0px_4px_30px_rgba(56,189,248,0.2)] 
              backdrop-blur-md transition-transform transform hover:-translate-y-3 hover:scale-105 duration-300"
            >
              {/* Neon border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>

              <h3 className="text-2xl font-bold mb-2 group-hover:text-[#38bdf8] transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <p className="text-gray-500 text-sm">{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-5 py-2 border border-[#38bdf8] text-[#38bdf8] rounded-lg hover:bg-[#38bdf8] 
                hover:text-black transition-all duration-300 shadow-md hover:shadow-[#38bdf8]/50"
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/MsCoder50/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-[#38bdf8] font-semibold underline hover:text-white transition-colors duration-300"
          >
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
