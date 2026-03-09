import { connectDB } from "@/lib/mongodb"
import Order from "@/models/Order"
import OrderStatus from "@/components/OrderStatus"

export default async function OrdersPage(){

await connectDB()

const orders = await Order.find().sort({createdAt:-1})

return(

<main className="max-w-6xl mx-auto py-20 px-6">

<h1 className="text-4xl font-bold mb-10">
Customer Orders
</h1>

<div className="space-y-8">

{orders.map((order)=>(

<div
key={order._id}
className="border p-6 rounded-lg shadow"
>

<h2 className="text-xl font-semibold mb-2">
Customer: {order.name}
</h2>

<p>Phone: {order.phone}</p>

<p className="mb-4">
Address: {order.address}
</p>

<h3 className="font-semibold mb-2">
Products:
</h3>

{order.cart.map((item,index)=>(
<p key={index}>
{item.name} × {item.quantity}
</p>
))}

<p className="mt-4 font-bold text-green-700">
Total: ₹{order.total}
</p>

<div className="mt-2">
Status: <OrderStatus orderId={order._id} status={order.status} />
</div>

<p className="text-sm text-gray-500 mt-2">
{new Date(order.createdAt).toLocaleString()}
</p>

</div>

))}

</div>

</main>

)
}