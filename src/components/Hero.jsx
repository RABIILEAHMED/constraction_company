// src/components/HeroPage.jsx
import React, { useState, useEffect } from "react";
import { FaHammer, FaRoad, FaBuilding, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ProjectsCarousel from "./ProjectsCarousel";
import HotelApartments from "./HotelApartments";
import ConstructionSteps from "./ConstructionSteps";
import ServicesDetail from "../pages/ServicesDetail"; // ✅ import detail page

// ✅ Adeegyada shirkadda
const services = [
  {
    icon: <FaHammer size={45} className="text-primary drop-shadow" />,
    title: "Dhismaha Guryaha Casriga ah",
    desc: "Waxaan dhisnaa guryo fiilooyin iyo qalab casri ah lagu dhisay, oo leh naqshado qurux badan iyo tayo sare leh.",
  },
  {
    icon: <FaRoad size={45} className="text-primary drop-shadow" />,
    title: "Waddooyin & Buundooyin",
    desc: "Waxaan ku takhasusay dhismaha wadooyinka waaweyn, buundooyinka casriga ah iyo kaabayaasha dhaqaalaha.",
  },
  {
    icon: <FaBuilding size={45} className="text-primary drop-shadow" />,
    title: "Mashruucyo Ganacsi & Meherado",
    desc: "Waxaan dhisnaa xarumo ganacsi, isbitaallo, jaamacado iyo xarumo waxbarasho oo heer caalami ah.",
  },
];

const HeroPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showServicesDetail, setShowServicesDetail] = useState(false); // ✅ control detail view

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // ✅ Haddii uu furay detail page
  if (showServicesDetail) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowServicesDetail(false)}
          className="absolute top-4 left-4 z-50 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700"
        >
          ⬅
        </button>
        <ServicesDetail />
      </div>
    );
  }

  // ✅ Otherwise HeroPage + services list
  return (
    <div className="font-sans transition-all duration-300 dark:bg-gray-900 dark:text-white">
      {/* HERO SECTION */}
      <section
        className="relative h-[100vh] flex items-center justify-center text-white text-center px-6 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1170&q=80')`,
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 60 },
              shape: { type: "circle" },
              color: { value: "#ffffff" },
              opacity: { value: 0.2 },
              size: { value: { min: 1, max: 2 } },
              move: {
                direction: "bottom",
                enable: true,
                outModes: { default: "out" },
                speed: 2,
              },
            },
          }}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />
        <div className="relative z-20 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
             "Noogu kaalay Amaano
            </span>
            <br />
            <span className="underline decoration-wavy decoration-4 decoration-primary animate-pulse">
              Hal-abuur & Dhisme Wanaagsan"
            </span>
          </motion.h1>
        </div>
        <motion.div
          className="absolute bottom-6 z-20 text-white text-2xl"
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaArrowDown />
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 bg-light dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Adeegyada Shirkadu Bixiso
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden p-8 text-center transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                onClick={() => setShowServicesDetail(true)} // ✅ show details
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="mb-6 flex justify-center">{srv.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition">
                  {srv.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {srv.desc}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Projects Section */}
      <ProjectsCarousel />
      <ConstructionSteps />
      <HotelApartments />
      
    </div>
  );
};

export default HeroPage;
