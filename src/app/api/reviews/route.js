import { connectDB } from "@/lib/mongodb"
import Review from "@/models/Review"

export async function GET(req){

await connectDB()

const { searchParams } = new URL(req.url)

const productId = searchParams.get("productId")

const reviews = await Review.find({productId}).sort({createdAt:-1})

return Response.json(reviews)

}


export async function POST(req){

await connectDB()

const body = await req.json()

const review = await Review.create(body)

return Response.json(review)

}