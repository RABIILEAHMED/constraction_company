import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

const engineers = [
  {
    img: team1,
    name: "Eng. Axmed Cali",
    title: "Khabiir Dhisme & Qorshe",
    experience: "10 sano",
    degree: "MSc Civil Engineering",
    bio: "Eng. Axmed wuxuu khibrad u leeyahay dhismayaasha waaweyn, buundooyinka iyo qorsheynta magaalooyinka casriga ah.",
    projects: ["Buundooyinka Muqdisho", "Mashruuca Garoonka", "Xarumaha Dowladda"],
    certificates: ["MSc Civil Engineering", "Project Management Pro", "Safety Certified"],
  },
  {
    img: team2,
    name: "Eng. Layla Maxamed",
    title: "Naqshadeeye Sare",
    experience: "7 sano",
    degree: "BSc Architecture",
    bio: "Layla waa naqshadeeye casri ah oo leh aragtiyo cusub iyo karti sare oo dhanka naqshadaha gudaha iyo dibadda.",
    projects: ["Naqshadaha Villa Casri ah", "Dugsiyo cusub", "Xarumaha Haweenka"],
    certificates: ["BSc Architecture", "Interior Design Expert"],
  },
  {
    img: team3,
    name: "Eng. Maxamuud Xasan",
    title: "Kormeeraha Mashruuca",
    experience: "12 sano",
    degree: "PhD Construction Management",
    bio: "Maxamuud wuxuu kormeeray mashruucyo badan oo waaweyn, isagoo si dhow ula socday tayada iyo waqtiga dhamaystirka.",
    projects: ["Mashruuca Jidka Dhexe", "Mashruuca Degaanka Barwaaqo"],
    certificates: ["PhD Construction", "ISO Quality Control", "Engineering Ethics"],
  },
];

const Engprofiles = () => {
  const [selectedEngineer, setSelectedEngineer] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedEngineer(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Animated Heading with Glow + Underline */}
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-center mb-10"
>
  <h3
    className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide 
               bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-500 
               bg-clip-text text-transparent animate-pulse-glow"
  >
    Meet Our Lead Engineers
  </h3>

  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "80px" }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="mx-auto h-[3px] mt-2 rounded bg-primary shadow-md"
  />
</motion.div>


      {/* Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {engineers.map((eng, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedEngineer(eng)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-transparent hover:border-primary cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={eng.img}
                alt={eng.name}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 rounded-t-xl" />
            </div>
            <div className="p-5 text-center relative z-10">
              <h4 className="text-lg font-bold text-gray-800 dark:text-white">{eng.name}</h4>
              <p className="text-sm text-primary font-medium">{eng.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                <span className="font-semibold">Khibrad:</span> {eng.experience}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Heer Aqooneed:</span> {eng.degree}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEngineer && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEngineer(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-xl w-full relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 z-10"
                onClick={() => setSelectedEngineer(null)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={selectedEngineer.img}
                  alt={selectedEngineer.name}
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {selectedEngineer.name}
                </h3>
                <p className="text-primary font-medium">{selectedEngineer.title}</p>

                <Tab.Group>
                  <Tab.List className="flex space-x-4 mt-4 border-b border-gray-300 dark:border-gray-700">
                    {["Profile", "Projects", "Certificates"].map((tab) => (
                      <Tab
                        key={tab}
                        className={({ selected }) =>
                          `py-2 px-4 text-sm font-semibold focus:outline-none ${
                            selected
                              ? "border-b-2 border-primary text-primary"
                              : "text-gray-500 hover:text-primary"
                          }`
                        }
                      >
                        {tab}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                    <Tab.Panel>
                      <p className="leading-relaxed">{selectedEngineer.bio}</p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ul className="list-disc ml-6">
                        {selectedEngineer.projects.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                      <ul className="list-disc ml-6">
                        {selectedEngineer.certificates.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Engprofiles;
