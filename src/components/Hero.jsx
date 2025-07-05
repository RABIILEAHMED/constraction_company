import React, { useState, useEffect,useRef, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { FaHammer, FaRoad, FaBuilding,FaArrowDown, FaBars } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion";
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';



import { Navigation, Autoplay } from "swiper/modules";
import * as THREE from "three";

const services = [
  {
    icon: <FaHammer size={40} className="text-primary" />,
    title: 'Guryo Dhisme',
    desc: 'Waxaan dhisnaa guryo casri ah oo tayo sare leh.'
  },
  {
    icon: <FaRoad size={40} className="text-primary" />,
    title: 'Wadooyin & Jidad',
    desc: 'Ku takhasusay dhismaha waddooyin iyo buundooyin.'
  },
  {
    icon: <FaBuilding size={40} className="text-primary" />,
    title: 'Mashruucyo Ganacsi',
    desc: 'Xarumo ganacsi, isbitaallo iyo xarumo waxbarasho.'
  },
]

// 3D Box component with image texture
function ImageBox({ image }) {
  const texture = useLoader(THREE.TextureLoader, image);
  return (
    <mesh rotation={[0.2, Math.PI / 4, 0]}>
      <boxGeometry args={[3, 2, 0.2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

const projects = [
  {
    id: 1,
    title: "Villa Casri ah",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
    description: "Villa 2 dabaq ah oo leh 5 qol jiif ah, jikada casriga ah, iyo garoon baabuur.",
    price: "$120,000",
    location: "Hargeisa"
  },
  {
    id: 2,
    title: "Guri Dabaq ah",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    description: "Guri dabaq ah oo 3 qol ah, fadhiga weyn, musqul casri ah, iyo koronto joogto ah.",
    price: "$75,000",
    location: "Burco"
  },
  {
    id: 3,
    title: "Apartment Jigjiga",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
    description: "Apartment 2 qol ah oo la dayactiray, ku yaalla bartamaha magaalada. Ilaaladiisu waa 24/7.",
    price: "$50,000",
    location: "Jigjiga"
  }
]


const HeroPage = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const [selectedProject, setSelectedProject] = useState(null);

  const particlesInit = async (main) => { await loadFull(main) }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="font-sans transition-all duration-300 dark:bg-gray-900 dark:text-white">
      {/* HERO SECTION */}
      <section className="relative h-[100vh] flex items-center justify-center text-white text-center px-6 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1170&q=80')` }}>
        <Particles id="tsparticles" init={particlesInit} options={{ fullScreen: { enable: false }, background: { color: { value: "transparent" } }, fpsLimit: 60, particles: { number: { value: 60 }, shape: { type: "circle" }, color: { value: "#ffffff" }, opacity: { value: 0.2 }, size: { value: { min: 1, max: 2 } }, move: { direction: "bottom", enable: true, outModes: { default: "out" }, speed: 2 } } }} className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />
        <div className="relative z-20 max-w-3xl">
          <motion.h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Dhis Mustaqbalkaaga</span><br />
            <span className="underline decoration-wavy decoration-4 decoration-primary animate-pulse text-white drop-shadow-[0_3px_8px_rgba(255,255,255,0.5)]">Kalsooni & Tayo ku dhisan</span>
          </motion.h1>
        </div>
        <motion.div className="absolute bottom-6 z-20 text-white text-2xl" initial={{ y: 0 }} animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <FaArrowDown />
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 bg-light dark:bg-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>Adeegyada Ugu Muhiimsan</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <motion.div key={idx} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center hover:shadow-lg transition cursor-pointer" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.2 }}>
                <div className="mb-4 flex justify-center">{srv.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS AUTO-CAROUSEL */}
 <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          Guryaha La Dhisay
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-105"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {project.description.substring(0, 60)}...
                  </p>
                  <p className="text-primary font-bold">Qiime: {project.price}</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Goobta: {project.location}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-lg w-full relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-2xl text-gray-600 dark:text-gray-200"
                title="Close"
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {selectedProject.description}
              </p>
              <p className="text-primary font-bold mb-1">
                Qiime: {selectedProject.price}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Goobta: {selectedProject.location}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </div>
  )
}

export default HeroPage
