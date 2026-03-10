"use client"

import { useState } from "react"

export default function AddProduct(){

const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [image,setImage] = useState("")
const [description,setDescription] = useState("")

const addProduct = async () => {

await fetch("/api/products",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
price,
image,
description
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
placeholder="Image URL"
className="border p-3 w-full mb-4"
onChange={(e)=>setImage(e.target.value)}
/>

<textarea
placeholder="Description"
className="border p-3 w-full mb-4"
onChange={(e)=>setDescription(e.target.value)}
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