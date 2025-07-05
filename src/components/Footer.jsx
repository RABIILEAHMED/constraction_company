import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Doodi Construction. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
