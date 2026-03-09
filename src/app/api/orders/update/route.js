import { connectDB } from "@/lib/mongodb"
import Order from "@/models/Order"

export async function POST(req){

await connectDB()

const { orderId, status } = await req.json()

await Order.findByIdAndUpdate(orderId,{
status
})

return Response.json({ success:true })

}