// src/pages/ServicesDetail.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

// Modern Lightbox library (Vite/React friendly)
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpeg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";

const projects = [
  { id: 1, img: project1, title: "Villa Casri ah" },
  { id: 2, img: project2, title: "Apartment Dhisme" },
  { id: 3, img: project3, title: "Naqshad Guri Qoys" },
  { id: 4, img: project4, title: "Xafiis Casri ah" },
  { id: 5, img: project5, title: "Naqshad Villa" },
];

export default function ServicesDetail() {
  const [openIndex, setOpenIndex] = useState(-1);

  const images = projects.map((p) => ({ src: p.img, title: p.title }));

  return (
    <section className="px-6 py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Adeegyadii Hore & Naqshadaha
          <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full animate-pulse" />
        </motion.h1>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Halkan ka daawo qaar ka mid ah guryaha iyo dhismayaasha aan hore u dhisnay oo muujinaya
          khibradeena dhismaha casriga ah.
        </motion.p>
      </div>

      {/* Gallery */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpenIndex(index)}
          >
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="p-4"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modern Lightbox */}
      {openIndex >= 0 && (
        <Lightbox
          open={openIndex >= 0}
          index={openIndex}
          close={() => setOpenIndex(-1)}
          slides={images}
          render={{ slide: ({ slide }) => <img src={slide.src} alt={slide.title} /> }}
        />
      )}
    </section>
  )
}
