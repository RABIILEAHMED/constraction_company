import React from 'react'

const servicesList = [
  {
    title: 'Dhismaha Guryaha',
    description: 'Waxaan bixinaa adeegyo dhisme guryo tayo sare leh oo ku habboon baahiyahaaga.',
  },
  {
    title: 'Wadooyinka & Jidadka',
    description: 'Mashruucyo dhisme wadooyin adag iyo waara.',
  },
  {
    title: 'Mashruucyada Ganacsiga',
    description: 'Dhisida xarumaha ganacsiga ee casriga ah.',
  },
]

const Services = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Adeegyada Aan Bixino</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {servicesList.map(({ title, description }) => (
          <div key={title} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
