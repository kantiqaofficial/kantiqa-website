"use client"

import { useEffect, useState } from "react"

export default function AdminProducts(){

const [products,setProducts] = useState([])

useEffect(()=>{
fetchProducts()
},[])

const fetchProducts = async()=>{

const res = await fetch("/api/products")

const data = await res.json()

setProducts(data)

}

const deleteProduct = async(id)=>{

await fetch("/api/products",{
method:"DELETE",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({id})
})

fetchProducts()

}

return(

<main className="max-w-6xl mx-auto py-20">

<h1 className="text-4xl font-bold mb-10">
Admin Product Manager
</h1>

<div className="grid md:grid-cols-3 gap-8">

{products.map((product)=>(

<div
key={product._id}
className="border p-6 rounded-lg shadow"
>

<img src={product.image} className="mb-4"/>

<h2 className="text-xl font-semibold">
{product.name}
</h2>

<p className="text-green-700 font-bold">
₹{product.price}
</p>

<button
onClick={()=>deleteProduct(product._id)}
className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
>
Delete
</button>

</div>

))}

</div>

</main>

)

}