"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignupPage(){

const router = useRouter()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [message,setMessage] = useState("")

const handleSignup = async () => {

const res = await fetch("/api/signup",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name,email,password})
})

const data = await res.json()

if(data.error){
setMessage(data.error)
}else{
router.push("/login")
}

}

return(

<div className="min-h-screen flex items-center justify-center bg-green-50">

<div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

<h1 className="text-3xl font-bold text-center mb-2">
Create Account
</h1>

<p className="text-gray-500 text-center mb-8">
Join Kantiqa herbal beauty
</p>

<input
type="text"
placeholder="Name"
className="border p-3 rounded w-full mb-4"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
className="border p-3 rounded w-full mb-4"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="border p-3 rounded w-full mb-6"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={handleSignup}
className="bg-green-700 hover:bg-green-800 text-white w-full py-3 rounded-lg"
>
Sign Up
</button>

{message && (
<p className="text-red-500 mt-4 text-center">
{message}
</p>
)}

<p className="text-center mt-6 text-gray-600">
Already have an account?
<Link href="/login" className="text-green-700 ml-1">
Login
</Link>
</p>

</div>

</div>

)
}