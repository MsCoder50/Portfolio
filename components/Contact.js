"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus("Message Sent Successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#121212] text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#38bdf8]">Get in Touch</h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <a href="mailto:mscoder50@gmail.com" className="flex items-center space-x-3 text-lg text-gray-300 hover:text-[#38bdf8] transition">
          <FaEnvelope className="text-3xl text-[#38bdf8]" />
          <span>mscoder50@gmail.com</span>
        </a>
        <a href="https://github.com/MsCoder50" target="_blank" className="flex items-center space-x-3 text-lg text-gray-300 hover:text-[#38bdf8] transition">
          <FaGithub className="text-3xl text-[#38bdf8]" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/mohammad-saad-bb9006294/" target="_blank" className="flex items-center space-x-3 text-lg text-gray-300 hover:text-[#38bdf8] transition">
          <FaLinkedin className="text-3xl text-[#38bdf8]" />
          <span>LinkedIn</span>
        </a>
      </div>

      <div className="mt-12 max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-white text-center mb-6">Send a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8] outline-none" required />
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8] outline-none" required />
            <textarea name="message" placeholder="Your Message" rows="5" value={form.message} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-[#38bdf8] focus:ring-2 focus:ring-[#38bdf8] outline-none" required></textarea>
            <button type="submit" className="w-full bg-[#38bdf8] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#2c98c9] transition">Send Message</button>
          </div>
        </form>
        {status && <p className="text-center mt-4 text-[#38bdf8]">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
