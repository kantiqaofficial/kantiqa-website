"use client"

import { useContext } from "react"
import { CartContext } from "@/context/CartContext"

export default function AddToCartButton({ product }) {

  const { addToCart } = useContext(CartContext)

  const handleAdd = () => {
    addToCart(product)
    alert("Product added to cart")
  }

  return (
    <button
      onClick={handleAdd}
      className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
    >
      Add to Cart
    </button>
  )
}