import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({

name:String,
phone:String,
address:String,
email:String,
cart:Array,
total:Number,

status:{
type:String,
default:"Pending"
}

},{timestamps:true})

export default mongoose.models.Order || mongoose.model("Order",OrderSchema)