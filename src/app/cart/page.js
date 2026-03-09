"use client"

import { useContext } from "react"
import { CartContext } from "@/context/CartContext"

export default function CartPage(){

const { cart, removeFromCart } = useContext(CartContext)

const total = cart.reduce((sum,item)=> sum + item.price * item.quantity,0)

return(

<main className="max-w-5xl mx-auto py-20 px-6">

<h1 className="text-4xl font-bold mb-10">
Your Cart
</h1>

{cart.length === 0 && (
<p>Your cart is empty.</p>
)}

<div className="space-y-6">

{cart.map((item)=>(
  
<div
key={item._id}
className="flex items-center gap-6 border p-6 rounded-lg"
>

<img
src={item.image}
className="w-24 rounded"
/>

<div className="flex-1">

<h2 className="text-xl font-semibold">
{item.name}
</h2>

<p className="text-gray-600">
Quantity: {item.quantity}
</p>

<p className="text-green-700 font-bold">
₹{item.price * item.quantity}
</p>

</div>

<button
onClick={()=>removeFromCart(item._id)}
className="bg-red-600 text-white px-4 py-2 rounded"
>
Remove
</button>

</div>

))}

</div>

{cart.length > 0 && (

<div className="mt-10 border-t pt-6">

<h2 className="text-2xl font-bold mb-4">
Total: ₹{total}
</h2>


<a
href="/checkout"
className="bg-green-700 text-white px-6 py-3 rounded-lg"
>
Proceed to Checkout
</a>

</div>

)}

</main>

)

}