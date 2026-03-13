"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function EditProduct({ params }){

const router = useRouter()

const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [image,setImage] = useState("")
const [description,setDescription] = useState("")
const [weight,setWeight] = useState("")

useEffect(()=>{

fetch("/api/products")
.then(res=>res.json())
.then(data=>{

const product = data.find(p=>p._id === params.id)

if(product){
setName(product.name)
setPrice(product.price)
setImage(product.image)
setDescription(product.description)
setWeight(product.weight)
}

})

},[params.id])

const updateProduct = async () => {

await fetch("/api/products",{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
id:params.id,
name,
price,
image,
description,
weight
})
})

alert("Product updated")

router.push("/admin/products")

}

return(

<main className="max-w-xl mx-auto py-20">

<h1 className="text-3xl font-bold mb-6">
Edit Product
</h1>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-3 w-full mb-4"
/>

<input
value={price}
onChange={(e)=>setPrice(e.target.value)}
className="border p-3 w-full mb-4"
/>

<input
value={weight}
onChange={(e)=>setWeight(e.target.value)}
className="border p-3 w-full mb-4"
/>

<input
value={image}
onChange={(e)=>setImage(e.target.value)}
className="border p-3 w-full mb-4"
/>

<textarea
value={description}
onChange={(e)=>setDescription(e.target.value)}
className="border p-3 w-full mb-4"
/>

<button
onClick={updateProduct}
className="bg-green-700 text-white px-6 py-3 rounded"
>
Update Product
</button>

</main>

)

}