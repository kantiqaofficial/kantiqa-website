"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import Link from "next/link"
import { signIn } from "next-auth/react"


export default function LoginPage(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = async () => {

await signIn("credentials",{
email,
password,
callbackUrl:"/"
})

}

return(

<div className="min-h-screen flex items-center justify-center bg-green-50">

<div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

<h1 className="text-3xl font-bold text-center mb-2">
Welcome Back
</h1>

<p className="text-gray-500 text-center mb-8">
Login to your Kantiqa account
</p>

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
onClick={handleLogin}
className="bg-green-700 hover:bg-green-800 text-white w-full py-3 rounded-lg"
>
Login
</button>

<p className="text-center mt-6 text-gray-600">
Don't have an account?
<Link href="/signup" className="text-green-700 ml-1">
Create one
</Link>
</p>

<button
onClick={() => signIn("google")}
className="bg-red-500 text-white px-6 py-3 rounded"
>
Sign in with Google
</button>

</div>

</div>

)
}