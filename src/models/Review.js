import mongoose from "mongoose"

const ReviewSchema = new mongoose.Schema({

productId:String,
name:String,
rating:Number,
comment:String

},{timestamps:true})

export default mongoose.models.Review || mongoose.model("Review",ReviewSchema)