import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import {
  XMarkIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const circleVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const stats = [
    {
      number: 100,
      label: "Mashruucyo Guuleystay",
      icon: (
        <BuildingOffice2Icon className="w-12 h-12 text-primary mx-auto mb-2" />
      ),
    },
    {
      number: 20,
      label: "Injineero Khibrad Leh",
      icon: (
        <WrenchScrewdriverIcon className="w-12 h-12 text-primary mx-auto mb-2" />
      ),
    },
    {
      number: 10,
      label: "Sano Oo Waayo-aragnimo Ah",
      icon: (
        <ClipboardDocumentCheckIcon className="w-12 h-12 text-primary mx-auto mb-2" />
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white tracking-wide"
        >
          Ku Saabsan Shirkadda
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-gray-700 dark:text-gray-300 mb-12 leading-relaxed space-y-6"
        >
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">Hordhac</h3>
            <p>
              Doodi Construction waa shirkad casri ah oo dhismaha ku takhasustay,
              laguna aasaasay si looga jawaabo baahida sii kordhaysa ee dhismaha iyo
              horumarinta kaabayaal dhaqaale. Ujeedkeennu waa in aan bixino adeegyo
              dhisme oo tayo sare leh, isla markaana taageera horumarka bulshada iyo
              dhaqaalaha.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-2">Hadafkeena</h3>
            <p>
              Hadafkayagu waa inaan bixino adeegyo dhisme oo casri ah, si aan u
              taageerno horumarka bulshada iyo dhaqaalaha, annagoo ilaalinayna
              hufnaanta, kalsoonida, iyo mas’uuliyadda bulshada. Waxaan ka go’an
              tahay inaan abuurno mashaaric qiimo ku kordhiya tayada nolosha bulshada,
              isla markaana dhiirrigeliya xiriir waara oo ku dhisan kalsooni iyo adeeg
              wanaagsan.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-2">Aragtideena</h3>
            <p>
              Aragtideenu waa inaan noqono shirkad dhisme oo caalami ah oo hormuud ka
              noqota dhiirrigelinta horumar waara iyo bulshada. Waxaan hiigsanaynaa
              inaan dhisno kaabayaal tayo sare leh oo la jaanqaadaya baahiyaha
              bulshada, isla markaana dhiirrigeliya hal-abuur cusub, hufnaan, iyo
              masuuliyad.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Maxaa Inaga Soocaya Kuwa Kale?
            </h3>
            <p>
              Shirkadda Doodi waxa ay bixisaa dhisme tayo sare leh oo ku tiirsan
              hufnaan, daacadnimo, iyo shaqo xirfad leh. Waxaan xooga saarnaa
              wadiiqooyin casri ah oo hubiya badbaado, joogteyn, iyo waaraansho,
              taasoo na siineysa inaan mar walba qancinno macaamiisheena.
            </p>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg group"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="https://img.youtube.com/vi/y-x2BLPyWGk/hqdefault.jpg"
              alt="Doodi Construction Video"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition">
              <svg
                className="w-16 h-16 text-white group-hover:text-primary transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-3xl w-full aspect-video relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 z-10"
                  onClick={() => setIsOpen(false)}
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
                <iframe
                  src="https://www.youtube.com/embed/y-x2BLPyWGk?autoplay=1"
                  title="Doodi Construction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-10"
          >
            Guulaha Aan Gaarnay
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-4 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition"
              >
                {/* Circle Progress */}
                <svg
                  className="mx-auto mb-2"
                  width="80"
                  height="80"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#f9a826"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    variants={circleVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ rotate: -90, transformOrigin: "50% 50%" }}
                  />
                </svg>

                {stat.icon}
                <h4 className="text-4xl font-bold text-primary mb-2">
                  <CountUp
                    end={stat.number}
                    duration={2}
                    enableScrollSpy
                    scrollSpyDelay={100}
                  />
                  +
                </h4>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 mt-20">
          {[
            {
              icon: <BuildingOffice2Icon className="w-10 h-10 text-primary" />,
              title: "Dhismaha Guryaha",
              desc: "Waxaan dhisnaa guryo tayo sare leh oo casri ah, iyadoo la tixgelinayo deegaanka iyo qaabka nolosha.",
            },
            {
              icon: <WrenchScrewdriverIcon className="w-10 h-10 text-primary" />,
              title: "Qalabaynta & Dayactirka",
              desc: "Qalabaynta dhismayaasha iyo dayactir joogto ah oo hubinaya badbaado iyo waqti dheer.",
            },
            {
              icon: (
                <ClipboardDocumentCheckIcon className="w-10 h-10 text-primary" />
              ),
              title: "Kormeerka Mashruuca",
              desc: "Injineerro khibrad leh oo kormeera mashruuc kasta si loo hubiyo tayada iyo waqtiga dhamaystirka.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
