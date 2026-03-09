"use client"

import { useState } from "react"
import Link from "next/link"
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"
import { signOut, useSession } from "next-auth/react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const { cart } = useContext(CartContext)
  const { data: session } = useSession()

const cartCount = cart.reduce((sum,item)=> sum + item.quantity,0)

  return (

    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">

      <div className="flex justify-between items-center">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-2">

          <img
            src="/logo.png"
            alt="Kantiqa Logo"
            className="w-14 h-14 object-contain"
          />

          <span className="text-2xl font-bold text-green-700">
            Kantiqa
          </span>

        </Link>


        {/* Desktop Menu */}

        <div className="hidden md:flex gap-6 items-center">

          <Link href="/" className="text-gray-800 hover:text-green-700 font-medium">
            Home
          </Link>

          <Link href="/products" className="text-gray-800 hover:text-green-700 font-medium">
            Products
          </Link>

          <Link href="/about" className="text-gray-800 hover:text-green-700 font-medium">
            About
          </Link>

          <Link href="/contact" className="text-gray-800 hover:text-green-700 font-medium">
            Contact
          </Link>

          <a
            href="https://www.instagram.com/kantiqa.official"
            target="_blank"
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
          >
            Instagram
          </a>

          <Link href="/cart" className="text-gray-800 hover:text-green-700">
Cart ({cartCount})
</Link>

{session ? (

<>
<Link href="/my-orders" className="text-gray-800 hover:text-green-700">
My Orders
</Link>

<button
onClick={() => signOut()}
className="text-gray-800 hover:text-green-700"
>
Logout
</button>
</>

) : (

<>
<Link href="/login" className="text-gray-800 hover:text-green-700">
Login
</Link>

<Link href="/signup" className="text-gray-800 hover:text-green-700">
Signup
</Link>
</>

)}

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

          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <a
            href="https://www.instagram.com/kantiqa.official"
            target="_blank"
            className="bg-green-700 text-white px-4 py-2 rounded-lg w-fit"
          >
            Instagram
          </a>

          <Link href="/cart" > Cart ({cartCount})</Link>
          {session ? (

<>
<Link href="/my-orders">My Orders</Link>

<button onClick={() => signOut()}>
Logout
</button>
</>

) : (

<>
<Link href="/login">Login</Link>
<Link href="/signup">Signup</Link>
</>

)}

        </div>

      )}

    </nav>

  )
}