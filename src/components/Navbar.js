"use client"

import { useState } from "react"

export default function Navbar() {

const [menuOpen, setMenuOpen] = useState(false)

return (

<nav className="bg-white shadow-md px-6 py-4">

<div className="flex justify-between items-center">

<h1 className="text-2xl font-bold text-green-700">
Kantiqa
</h1>

{/* Desktop Menu */}

<div className="hidden md:flex gap-6">

<a href="/" className="text-gray-800 hover:text-green-700">Home</a>
<a href="/products" className="text-gray-800 hover:text-green-700">Products</a>
<a href="#" className="text-gray-800 hover:text-green-700">About</a>
<a href="#" className="text-gray-800 hover:text-green-700">Contact</a>

</div>

{/* Mobile Button */}

<button
className="md:hidden text-2xl"
onClick={() => setMenuOpen(!menuOpen)}
>

☰

</button>

</div>

{/* Mobile Menu */}

{menuOpen && (

<div className="flex flex-col mt-4 gap-4 md:hidden">

<a href="/" className="text-gray-800 hover:text-green-700">Home</a>
<a href="/products" className="text-gray-800 hover:text-green-700">Products</a>
<a href="#" className="text-gray-800 hover:text-green-700">About</a>
<a href="#" className="text-gray-800 hover:text-green-700">Contact</a>

</div>

)}

</nav>

)

}