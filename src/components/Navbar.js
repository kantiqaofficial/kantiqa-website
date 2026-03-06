"use client"

import { useState } from "react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">

      <div className="flex justify-between items-center">

        {/* Logo */}

        <a href="/" className="flex items-center gap-2">

          <img
            src="/logo.png"
            alt="Kantiqa Logo"
            className="w-14 h-14 object-contain"
          />

          <span className="text-2xl font-bold text-green-700">
            Kantiqa
          </span>

        </a>


        {/* Desktop Menu */}

        <div className="hidden md:flex gap-6 items-center">

          <a href="/" className="text-gray-800 hover:text-green-700 font-medium">
            Home
          </a>

          <a href="/products" className="text-gray-800 hover:text-green-700 font-medium">
            Products
          </a>

          <a href="#" className="text-gray-800 hover:text-green-700 font-medium">
            About
          </a>

          <a href="#" className="text-gray-800 hover:text-green-700 font-medium">
            Contact
          </a>

          <a
            href="https://www.instagram.com/kantiqa.official"
            target="_blank"
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
          >
            Instagram
          </a>

        </div>


        {/* Mobile Button */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}

      {menuOpen && (

        <div className="flex flex-col mt-4 gap-4 md:hidden">

          <a href="/" className="text-gray-800 hover:text-green-700">
            Home
          </a>

          <a href="/products" className="text-gray-800 hover:text-green-700">
            Products
          </a>

          <a href="#" className="text-gray-800 hover:text-green-700">
            About
          </a>

          <a href="#" className="text-gray-800 hover:text-green-700">
            Contact
          </a>

          <a
            href="https://www.instagram.com/kantiqa.official"
            target="_blank"
            className="bg-green-700 text-white px-4 py-2 rounded-lg w-fit"
          >
            Instagram
          </a>

        </div>

      )}

    </nav>

  )
}