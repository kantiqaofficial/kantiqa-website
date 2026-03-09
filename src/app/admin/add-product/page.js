"use client"

import { useState } from "react"

export default function AddProduct() {

  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [weight,setWeight] = useState("")
  const [description,setDescription] = useState("")
  const [image,setImage] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    const res = await fetch("/api/products",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,
        price,
        weight,
        description,
        image
      })
    })

    const data = await res.json()

    alert("Product Added Successfully")
  }

  return(

    <main className="max-w-xl mx-auto py-20">

      <h1 className="text-3xl font-bold mb-6">
        Add Product
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
        placeholder="Product Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="border p-3"
        />

        <input
        placeholder="Price"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        className="border p-3"
        />

        <input
        placeholder="Weight"
        value={weight}
        onChange={(e)=>setWeight(e.target.value)}
        className="border p-3"
        />

        <input
        placeholder="Image URL"
        value={image}
        onChange={(e)=>setImage(e.target.value)}
        className="border p-3"
        />

        <textarea
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        className="border p-3"
        />

        <button
        className="bg-green-700 text-white p-3 rounded"
        >
          Add Product
        </button>

      </form>

    </main>

  )
}