// src/components/ConstructionSteps.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Home, Wallet, Hammer } from "lucide-react";
import bgHouse from "../assets/house-bg1.jpg"; // ✅ Sawirka 3D house

const steps = [
  {
    id: 1,
    title: "Lacag Bixinta 1aad",
    description:
      "Qofku wuxuu bixiyaa qaybta hore ee lacagta si mashruuca loo bilaabo.",
    icon: <Wallet className="w-8 h-8 text-indigo-500" />,
  },
  {
    id: 2,
    title: "Bilowga Dhismaha",
    description:
      "Shaqada dhismaha waa la bilaabayaa iyadoo qorshaha iyo naqshaddu diyaar yihiin.",
    icon: <Hammer className="w-8 h-8 text-pink-500" />,
  },
  {
    id: 3,
    title: "Lacag Bixinta 2aad",
    description:
      "Marka shaqadu gaarto heer dhexe, waxaa la bixiyaa lacagta labaad.",
    icon: <Wallet className="w-8 h-8 text-green-500" />,
  },
  {
    id: 4,
    title: "Dhamaystirka & La Wareegidda Guriga",
    description:
      "Mashruuca waa la dhamaystiraa, lacagta ugu dambaysa waa la bixiyaa, gurigana si rasmi ah ayaa loo wareejiyaa.",
    icon: <Home className="w-8 h-8 text-purple-500" />,
  },
];

const extraServices = [
  "Dayactir iyo hagaajin 1 sano gudahood wixii cillad ah ee guriga ka yimaada.",
  "La-talin naqshad iyo design bilaash ah kahor inta aan la dhisin.",
  "Kormeer joogto ah inta dhismuhu socdo.",
  "Fududeyn adeegyo dheeraad ah sida koronto iyo biyaha.",
];

const ConstructionSteps = () => {
  return (
    <section
      className="relative py-20 px-6 bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${bgHouse})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          className="relative text-3xl md:text-5xl font-extrabold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tallaabooyinka Dhismaha Guriga
          <span className="absolute left-1/2 -bottom-3 w-32 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full transform -translate-x-1/2 shadow-md animate-pulse" />
        </motion.h2>

        {/* Vertical Timeline */}
        <div className="relative border-l-4 border-gradient-to-b from-indigo-400 via-pink-400 to-purple-500 border-opacity-70 ml-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              className="mb-12 ml-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Circle Icon */}
              <div className="absolute -left-7 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg ring-4 ring-pink-400/40">
                {step.icon}
              </div>

              {/* Step Content */}
              <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Services */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-indigo-300">
            Adeegyo Dheeraad ah
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {extraServices.map((service, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                <span className="text-gray-900 dark:text-gray-200 text-sm">
                  {service}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSteps;
