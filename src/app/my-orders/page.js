import { connectDB } from "@/lib/mongodb"
import Order from "@/models/Order"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function MyOrders() {

const session = await getServerSession(authOptions)

if (!session) {
return (
<div className="text-center py-20">
Please login to view your orders
</div>
)
}

await connectDB()

const orders = await Order.find({
email: session.user.email
}).sort({ createdAt: -1 })

return (

<main className="max-w-5xl mx-auto py-20 px-6">

<h1 className="text-3xl font-bold mb-10">
My Orders
</h1>

<div className="space-y-6">

{orders.length === 0 && (
<p>No orders yet.</p>
)}

{orders.map(order => (

<div
key={order._id}
className="border rounded-lg p-6 shadow"
>

<p className="font-semibold">
Order Total: ₹{order.total}
</p>

<p className="text-gray-600">
Status: {order.status || "Pending"}
</p>

<p className="text-gray-500">
Date: {new Date(order.createdAt).toLocaleDateString()}
</p>

</div>

))}

</div>

</main>

)
}