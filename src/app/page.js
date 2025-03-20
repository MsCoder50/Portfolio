'use client';

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      <Head>
        <title>Mohammad Saad | Portfolio</title>
        <meta name="description" content="Professional portfolio of Mohammad Saad, showcasing projects, skills, and experience in web development and robotics." />
      </Head>
      
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

    </div>
  );
}
