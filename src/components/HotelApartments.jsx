// src/components/HotelApartments.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Data for Doodi Apartment
const hotels = [
  {
    id: 1,
    title: "Hotel Apartment Casri ah",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1613977257360-98723a1c32a6?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Hotel Apartment casri ah oo leh qolal raaxo leh, meherado ganacsi gudaha ku yaal, iyo adeegyo dheeraad ah sida gym, barkad dabaasha iyo internet degdeg ah.",
    price: "Laga bilaabo $100 / habeenkii",
    location: "Hargeisa",
    services: ["Gym", "Barkad Dabaasha", "24/7 Amni", "Free Wi-Fi", "Meherado gudaha ah"],
  },
  {
    id: 2,
    title: "Luxury Hotel Apartment",
    images: [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154154-13a361f22f66?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154253-6ec2f65c87db?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585153944-6d2f8ec9c5fb?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Luxury Hotel Apartment leh qolal kala duwan, fadhiyo ballaadhan, iyo adeegyo heer sare ah oo loogu talagalay nasasho iyo ganacsi.",
    price: "Laga bilaabo $150 / habeenkii",
    location: "Burco",
    services: ["Spa & Sauna", "Restaurant", "Conference Halls", "Room Service", "Parking Bilaash ah"],
  },
];

const HotelApartments = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <section id="hotel-apartments" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title with Motion & Underline */}
        <motion.h2
          className="relative text-3xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500"
          initial={{ opacity: 0, y: -30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Doodi Apartment
          {/* Underline */}
          <span className="absolute left-1/2 -bottom-3 w-28 h-1 bg-gradient-to-r from-indigo-500 to-pink-400 rounded-full transform -translate-x-1/2 shadow-[0_8px_24px_rgba(99,102,241,0.18)] animate-pulse" />
        </motion.h2>

        {/* Somali Marketing Description */}
        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Ku soo dhawoow <span className="font-semibold text-indigo-600 dark:text-indigo-300">Doodi Apartment</span> — 
          meesha ay raaxadu iyo adeegga heerka caalami ahi iskugu yimaadaan. Waxaan bixinaa qolal casri ah, adeegyo dhammeystiran iyo jawi aammin ah oo ku habboon safarkaaga shaqo ama nasashada qoyska. Dooro hoyga kugu habboon oo noo soo wac ama naga soo dir fariin si aad u qorshayso booqashadaada.
        </motion.p>

        {/* Cards Swiper */}
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
          {hotels.map((hotel) => (
            <SwiperSlide key={hotel.id}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-700"
                onClick={() => setSelectedHotel(hotel)}
                whileHover={{ y: -5 }}
              >
                <img
                  src={hotel.images[0]}
                  alt={hotel.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {hotel.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {hotel.description.substring(0, 70)}...
                  </p>
                  <div className="flex flex-col gap-1">
                    <span className="text-indigo-600 dark:text-indigo-300 font-bold">{hotel.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      📍 {hotel.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedHotel && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedHotel(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-5 max-w-xl w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.28 }}
            >
              <button
                onClick={() => setSelectedHotel(null)}
                className="absolute top-3 right-4 text-2xl text-gray-600 dark:text-gray-200 hover:text-red-500"
                title="Close"
              >
                &times;
              </button>

              {/* Gallery */}
              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                loop
                className="mb-4 rounded-lg overflow-hidden"
              >
                {selectedHotel.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${selectedHotel.title} - ${idx + 1}`}
                      className="w-full h-56 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-1">
                {selectedHotel.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
                {selectedHotel.description}
              </p>
              <p className="text-indigo-600 dark:text-indigo-300 font-bold mb-1 text-sm">
                {selectedHotel.price}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-3 text-sm">
                📍 {selectedHotel.location}
              </p>

              {/* Services */}
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                Adeegyada La Heli Karo:
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {selectedHotel.services.map((service, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg"
                  >
                    <span className="text-green-500">✔</span> {service}
                  </li>
                ))}
              </ul>

              {/* Booking & Contacts */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href={`https://wa.me/252634734075?text=${encodeURIComponent(
                    `Salaan, waxaan rabaa inaan book gareeyo ${selectedHotel.title}. Fadlan ii xaqiiji macluumaadka.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg text-center text-sm"
                >
                  📲 Book via WhatsApp
                </a>
                <a
                  href="tel:+252634734075"
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg text-center text-sm"
                >
                  📞 Wac
                </a>
                <a
                  href="mailto:info@doodi-apartment.com"
                  className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg text-center text-sm"
                >
                  ✉️ Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HotelApartments;
