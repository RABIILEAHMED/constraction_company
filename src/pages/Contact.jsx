import React from 'react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const message = e.target.message.value

    const phone = '252634734075'
    const text = `Asc, magacaygu waa ${name}. ${message}`

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Nala Soo Xiriir</h2>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 bg-gray-50 p-8 rounded-lg shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Magacaaga"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email-kaaga"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <input
            type="text"
            name="subject"
            required
            placeholder="Ujeeddo"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            name="message"
            rows="5"
            required
            placeholder="Fariintaada..."
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="bg-green-600 text-white font-bold py-3 px-6 rounded hover:bg-green-700 transition"
          >
            Dir WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
