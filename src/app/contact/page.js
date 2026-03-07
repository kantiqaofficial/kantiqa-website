"use client"

import { useState } from "react"

export default function Contact() {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()

  const text = `Hello Kantiqa,

Name: ${name}
Email: ${email}

Message:
${message}`

  const whatsappURL =
    "https://wa.me/919302824042?text=" + encodeURIComponent(text)

  window.open(whatsappURL, "_blank")
}

return (

<main className="bg-white min-h-screen py-20 px-6 max-w-5xl mx-auto">

<h1 className="text-4xl font-bold text-green-700 text-center mb-10">
Contact Us
</h1>

<div className="grid md:grid-cols-2 gap-10">

{/* Contact Info */}

<div>

<h2 className="text-2xl font-semibold text-green-700 mb-4">
Get in Touch
</h2>

<p className="text-gray-700 mb-6">
Have questions about our herbal products? Feel free to reach out.
</p>

<p className="text-gray-800 mb-3">
📱 WhatsApp: +91 9302824042
</p>

<p className="text-gray-700 mb-6">
EMS 109, Indus Town<br/>
Hoshangabad Road<br/>
Bhopal, Madhya Pradesh<br/>
462047
</p>

</div>


{/* Contact Form */}

<div className="bg-green-50 p-6 rounded-xl shadow">

<h2 className="text-2xl font-semibold text-green-700 mb-4">
Send a Message
</h2>

<form onSubmit={handleSubmit} className="flex flex-col gap-4">

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e) => setName(e.target.value)}
className="border border-gray-300 p-3 rounded-lg text-gray-900 bg-white"
/>

<input
type="email"
placeholder="Your Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="border border-gray-300 p-3 rounded-lg text-gray-900 bg-white"
/>

<textarea
placeholder="Your Message"
rows="4"
value={message}
onChange={(e) => setMessage(e.target.value)}
className="border border-gray-300 p-3 rounded-lg text-gray-900 bg-white"
/>

<button
type="submit"
className="bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
>
Send Message
</button>

</form>

</div>

</div>

</main>

)
}