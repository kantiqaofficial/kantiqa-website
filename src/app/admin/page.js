import { connectDB } from "@/lib/mongodb"
import Order from "@/models/Order"
import Product from "@/models/Product"
import Review from "@/models/Review"

export default async function AdminDashboard(){

await connectDB()

const orders = await Order.find()
const products = await Product.find()
const reviews = await Review.find()

const totalOrders = orders.length
const totalProducts = products.length
const totalReviews = reviews.length

const totalRevenue = orders.reduce(
(sum,order)=> sum + order.total,
0
)

return(

<main>

<h1 className="text-4xl font-bold mb-10">
Admin Dashboard
</h1>

<div className="grid md:grid-cols-4 gap-6">
<a href="/admin/products">
Manage Products
</a>
<div className="bg-white p-6 rounded-lg shadow">
<h2 className="text-lg text-gray-500">Orders</h2>
<p className="text-3xl font-bold">
{totalOrders}
</p>
</div>

<div className="bg-white p-6 rounded-lg shadow">
<h2 className="text-lg text-gray-500">Revenue</h2>
<p className="text-3xl font-bold text-green-700">
₹{totalRevenue}
</p>
</div>

<div className="bg-white p-6 rounded-lg shadow">
<h2 className="text-lg text-gray-500">Products</h2>
<p className="text-3xl font-bold">
{totalProducts}
</p>
</div>

<div className="bg-white p-6 rounded-lg shadow">
<h2 className="text-lg text-gray-500">Reviews</h2>
<p className="text-3xl font-bold">
{totalReviews}
</p>
</div>

</div>

</main>

)

}