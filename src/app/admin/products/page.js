"use client"

import { useEffect, useState } from "react"

export default function AdminProducts(){

const [products,setProducts] = useState([])

const loadProducts = async ()=>{

const res = await fetch("/api/products")
const data = await res.json()

setProducts(data)

}

useEffect(()=>{
loadProducts()
},[])

const deleteProduct = async(id)=>{

await fetch("/api/products",{
method:"DELETE",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({id})
})

alert("Product deleted")

loadProducts()

}

return(

<main className="max-w-6xl mx-auto py-20">

<h1 className="text-4xl font-bold mb-10">
Admin Product Manager
</h1>

<div className="space-y-6">

{products.map((product)=>(

<div
key={product._id}
className="flex items-center justify-between border p-6 rounded-lg"
>

<div>

<h2 className="text-xl font-semibold">
{product.name}
</h2>

<p className="text-gray-600">
₹{product.price}
</p>

</div>

<button
onClick={()=>deleteProduct(product._id)}
className="bg-red-600 text-white px-4 py-2 rounded"
>
Delete
</button>

</div>

))}

</div>

</main>

)

}