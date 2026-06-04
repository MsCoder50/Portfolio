"use client"; // Ensures it's only rendered on the client
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-black bg-opacity-80 backdrop-blur-lg text-white px-6 py-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mohammad Saad</h1>

        <ul className="hidden md:flex space-x-6">
          <li><Link href="#home" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="#projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link href="#skills" className="hover:text-gray-400">Skills</Link></li>
          <li><Link href="#contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col mt-4 bg-black p-4 space-y-3">
          <li><Link href="#home" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
