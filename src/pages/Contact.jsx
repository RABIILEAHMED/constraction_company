import React from "react";
import { Mail, User, MessageSquare, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const message = e.target.message.value;

    const phone = "252634734075";
    const text = `Asc, magacaygu waa ${name}. ${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight relative inline-block">
          <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
            Nala Soo Xiriir
          </span>
          <span className="block mt-2 w-20 mx-auto border-b-4 border-green-500 rounded-full"></span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Ku soo dir fariintaada si dhakhso ah — waxaan kula soo xiriiri doonaa isla markiiba.
        </p>
      </div>

      {/* Contact Info Boxes */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <Phone className="mx-auto text-green-600 mb-3" size={32} />
          <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
          <p className="text-gray-600 mt-1">+252 63 4734075</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <Mail className="mx-auto text-green-600 mb-3" size={32} />
          <h3 className="font-semibold text-lg text-gray-800">Email</h3>
          <p className="text-gray-600 mt-1">info@royalconstruction.com</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <MapPin className="mx-auto text-green-600 mb-3" size={32} />
          <h3 className="font-semibold text-lg text-gray-800">Address</h3>
          <p className="text-gray-600 mt-1">
            H32F+P9M, Hero Awr Road <br /> Hargeisa, Somaliland
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto space-y-6 mb-12"
      >
        {/* Two Inputs Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              required
              placeholder="Magacaaga"
              className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              required
              placeholder="Email-kaaga"
              className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="relative">
          <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            name="subject"
            required
            placeholder="Ujeeddo"
            className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Fariintaada..."
            className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Dir WhatsApp
        </button>
      </form>

      {/* Google Maps Embed */}
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d815.6047592182623!2d44.0595202!3d9.5620501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16307d00c4c159ad%3A0x64dbfba9b9e9bfa!2sRoyal%20construction%20interior%20%26%20builder!5e0!3m2!1sen!2sso!4v1727522500000!5m2!1sen!2sso"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
