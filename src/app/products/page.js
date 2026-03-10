"use client"

import { useEffect, useState } from "react"

export default function ProductsPage(){

const [products,setProducts] = useState([])
const [search,setSearch] = useState("")

useEffect(()=>{

fetch("/api/products")
.then(res=>res.json())
.then(data=>setProducts(data))

},[])

const filteredProducts = products.filter((product)=>
product.name.toLowerCase().includes(search.toLowerCase())
)

return(

<main className="max-w-6xl mx-auto py-20 px-6">

<h1 className="text-4xl font-bold mb-10">
Our Products
</h1>

<input
type="text"
placeholder="Search products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border p-3 rounded w-full mb-10"
/>

<div className="grid grid-cols-3 gap-6">

{filteredProducts.map((product)=>(

<div
key={product._id}
className="border p-6 rounded-lg shadow"
>

<img
src={product.image}
className="mb-4"
/>

<h2 className="text-xl font-semibold">
{product.name}
</h2>

<p className="text-gray-600">
{product.weight}
</p>

<p className="text-green-700 font-bold">
₹{product.price}
</p>

</div>

))}

</div>

</main>

)

}