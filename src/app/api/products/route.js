import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"

export async function GET() {

  await connectDB()

  const products = await Product.find()

  return Response.json(products)
}

export async function POST(req) {

  await connectDB()

  const body = await req.json()

  const product = await Product.create(body)

  return Response.json(product)
}

export async function DELETE(req) {

  await connectDB()

  const { id } = await req.json()

  await Product.findByIdAndDelete(id)

  return Response.json({message:"Product deleted"})
}