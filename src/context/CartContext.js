"use client"

import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")

    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])


  const addToCart = (product) => {

    setCart((prev) => {

      const existing = prev.find(item => item._id === product._id)

      if (existing) {

        return prev.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )

      }

      return [...prev, { ...product, quantity: 1 }]
    })

  }


  const removeFromCart = (id) => {

    setCart((prev) => {

      const existing = prev.find(item => item._id === id)

      if (!existing) return prev

      if (existing.quantity === 1) {
        return prev.filter(item => item._id !== id)
      }

      return prev.map(item =>
        item._id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )

    })

  }


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}