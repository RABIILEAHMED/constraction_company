import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

// ✅ Projects Data (multiple images per project)
const projects = [
  {
    id: 1,
    title: "Villa Casri ah",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154206-7e055f60a6a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154314-019c94d3a77c?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Villa 2 dabaq ah oo leh 5 qol jiif ah, jikada casriga ah, iyo garoon baabuur.",
    price: "$120,000",
    location: "Hargeisa",
  },
  {
    id: 2,
    title: "Guri Dabaq ah",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eacb9b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Guri dabaq ah oo 3 qol ah, fadhiga weyn, musqul casri ah, iyo koronto joogto ah.",
    price: "$75,000",
    location: "Burco",
  },
  {
    id: 3,
    title: "Apartment Jigjiga",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2f47e6c8a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607688235-56a3c3b09db2?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Apartment 2 qol ah oo la dayactiray, ku yaalla bartamaha magaalada. Ilaaladiisu waa 24/7.",
    price: "$50,000",
    location: "Jigjiga",
  },
];

const ProjectsCarousel = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
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
                  src={project.images[0]} // ✅ Show first image only on card
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
                  <p className="text-primary font-bold">
                    Qiime: {project.price}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Goobta: {project.location}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal with Gallery */}
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
              className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full relative shadow-xl"
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

              {/* ✅ Swiper for multiple images */}
              <Swiper
                modules={[Navigation]}
                navigation
                loop
                spaceBetween={10}
                slidesPerView={1}
                className="mb-4 rounded-lg overflow-hidden"
              >
                {selectedProject.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${selectedProject.title} - ${idx + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

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
  );
};

export default ProjectsCarousel;
