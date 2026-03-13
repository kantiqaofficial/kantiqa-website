"use client"

import { useState } from "react"

export default function AddProduct(){

const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [description,setDescription] = useState("")
const [weight,setWeight] = useState("")
const [image,setImage] = useState(null)

const addProduct = async ()=>{

  const formData = new FormData()
  formData.append("file",image)

  const upload = await fetch("/api/upload",{
    method:"POST",
    body:formData
  })

  const uploadData = await upload.json()

  const imageUrl = uploadData.url

  await fetch("/api/products",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,
      price,
      description,
      weight,
      image:imageUrl
    })
  })

  alert("Product added")

}

return(

<main className="max-w-xl mx-auto py-20">

<h1 className="text-3xl font-bold mb-6">
Add Product
</h1>

<input
placeholder="Product Name"
className="border p-3 w-full mb-4"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Price"
className="border p-3 w-full mb-4"
onChange={(e)=>setPrice(e.target.value)}
/>

<input
placeholder="Weight"
className="border p-3 w-full mb-4"
onChange={(e)=>setWeight(e.target.value)}
/>

<textarea
placeholder="Description"
className="border p-3 w-full mb-4"
onChange={(e)=>setDescription(e.target.value)}
/>

<input
type="file"
className="mb-6"
onChange={(e)=>setImage(e.target.files[0])}
/>

<button
onClick={addProduct}
className="bg-green-700 text-white px-6 py-3 rounded"
>
Add Product
</button>

</main>

)

}