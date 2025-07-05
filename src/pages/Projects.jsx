import React from 'react'

const projectsList = [
  {
    title: 'Mashruuca Guri Casri ah',
    description: 'Dhismaha guri casri ah oo leh naqshad heer sare ah.',
  },
  {
    title: 'Wadada Weyn ee Magaalada',
    description: 'Dhismaha waddo weyn oo isku xirta magaalooyinka.',
  },
  {
    title: 'Xarunta Ganacsiga',
    description: 'Dhisida xarun ganacsi oo cusub oo casri ah.',
  },
]

const Projects = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Mashruucyadeena</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {projectsList.map(({ title, description }) => (
          <div key={title} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
