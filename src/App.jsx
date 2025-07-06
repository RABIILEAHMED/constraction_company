import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import AboutUs from './components/AboutUs.jsx';

function App() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [interactionHandled, setInteractionHandled] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!interactionHandled) {
        setInteractionHandled(true);

        // Delay after interaction (e.g., 5s)
        setTimeout(() => {
          setShowWhatsApp(true);
          setShowToast(true);

          if (audioRef.current) {
            audioRef.current.play().catch((e) => {
              console.warn('Audio failed to play:', e);
            });
          }

          // Hide toast after 5s
          setTimeout(() => setShowToast(false), 5000);
        }, 5000);

        // Remove event listeners after first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      }
    };

    // Add event listeners for interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [interactionHandled]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />

        {/* 🔊 Audio element (hidden) */}
        <audio ref={audioRef} src="/message.wav" preload="auto" />

        {/* ✅ WhatsApp Toast Message */}
        {showToast && (
          <div className="fixed bottom-24 right-6 bg-primary text-white px-5 py-3 rounded-lg shadow-lg animate-bounce z-50 text-sm md:text-base">
            📞 Nala Soo Xidhiidh Hadda!
          </div>
        )}

        {/* ✅ WhatsApp Floating Button */}
        {showWhatsApp && (
          <a
            href="https://wa.me/252634734075"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition transform hover:scale-110"
            title="WhatsApp kala soo xidhiidh"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        )}
      </div>
    </Router>
  );
}

export default App;
