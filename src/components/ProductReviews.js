"use client"

import { useState, useEffect } from "react"

export default function ProductReviews({ productId }) {

const [reviews,setReviews] = useState([])
const [name,setName] = useState("")
const [rating,setRating] = useState(5)
const [comment,setComment] = useState("")
const [message,setMessage] = useState("")


const loadReviews = async () => {

const res = await fetch(`/api/reviews?productId=${productId}`)

const data = await res.json()

setReviews(data)

}


useEffect(()=>{
loadReviews()
},[])



const submitReview = async () => {

const res = await fetch("/api/reviews",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
productId,
name,
rating,
comment
})
})

if(res.ok){

setMessage("Review submitted successfully!")

setName("")
setComment("")

loadReviews()

}

}


return(

<div className="mt-20">

<h2 className="text-2xl font-bold mb-6">
Customer Reviews
</h2>


{/* Review Form */}

<div className="space-y-4 max-w-lg mb-10">

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-3 rounded w-full"
/>

<select
value={rating}
onChange={(e)=>setRating(e.target.value)}
className="border p-3 rounded w-full"
>
<option value="5">5 ⭐</option>
<option value="4">4 ⭐</option>
<option value="3">3 ⭐</option>
<option value="2">2 ⭐</option>
<option value="1">1 ⭐</option>
</select>

<textarea
placeholder="Write your review"
value={comment}
onChange={(e)=>setComment(e.target.value)}
className="border p-3 rounded w-full"
/>

<button
onClick={submitReview}
className="bg-green-700 text-white px-6 py-3 rounded-lg"
>
Submit Review
</button>

{message && (
<p className="text-green-700">
{message}
</p>
)}

</div>


{/* Reviews List */}

<div className="space-y-6">

{reviews.map((review)=>(
  
<div
key={review._id}
className="border p-4 rounded-lg"
>

<p className="font-semibold">
{review.name}
</p>

<p>
{"⭐".repeat(review.rating)}
</p>

<p className="text-gray-700">
{review.comment}
</p>

</div>

))}

</div>

</div>

)

}