"use client"

import { useContext, useState } from "react"
import { CartContext } from "@/context/CartContext"
import { useSession } from "next-auth/react"

export default function CheckoutPage(){

const { data: session } = useSession()
const { cart } = useContext(CartContext)

const [name,setName] = useState("")
const [phone,setPhone] = useState("")
const [address,setAddress] = useState("")

const total = cart.reduce((sum,item)=> sum + item.price * item.quantity,0)

const handleOrder = async () => {

const res = await fetch("/api/orders",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
name,
phone,
address,
cart,
total,
email: session?.user?.email
})
})

if(res.ok){
alert("Order placed successfully!")
}

}

return(

<main className="max-w-5xl mx-auto py-20 px-6">

<h1 className="text-4xl font-bold mb-10">
Checkout
</h1>

<div className="grid md:grid-cols-2 gap-12">

{/* Customer Form */}

<div className="space-y-6">

<input
type="text"
placeholder="Full Name"
className="w-full border p-3 rounded"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="text"
placeholder="Phone Number"
className="w-full border p-3 rounded"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<textarea
placeholder="Delivery Address"
className="w-full border p-3 rounded"
value={address}
onChange={(e)=>setAddress(e.target.value)}
/>

<button
onClick={handleOrder}
className="bg-green-700 text-white px-6 py-3 rounded-lg"
>
Place Order
</button>

</div>

{/* Order Summary */}

<div>

<h2 className="text-2xl font-semibold mb-6">
Order Summary
</h2>

{cart.map((item)=>(
<div key={item._id} className="flex justify-between mb-4">

<p>
{item.name} × {item.quantity}
</p>

<p>
₹{item.price * item.quantity}
</p>

</div>
))}

<hr className="my-6"/>

<h3 className="text-xl font-bold">
Total: ₹{total}
</h3>

</div>

</div>

</main>

)
}