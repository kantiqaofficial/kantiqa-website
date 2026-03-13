import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"
import Link from "next/link"

export default async function Home() {

await connectDB()

const products = await Product.find()

return (

<main className="bg-white text-gray-900">

{/* HERO SECTION */}

<section
className="relative bg-cover bg-center py-40 text-center"
style={{ backgroundImage: "url('/images/hero.jpg')" }}
>

<div className="absolute inset-0 bg-black/40"></div>

<div className="relative z-10 max-w-4xl mx-auto px-6">

<h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
Pure Herbal Beauty <br/> From Nature 🌿
</h1>

<p className="text-lg md:text-xl text-gray-200 mb-10">
Traditional herbal powders crafted for glowing skin and healthy hair.
</p>

<div className="flex justify-center gap-4 flex-wrap">

<Link
href="/products"
className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200"
>
Shop Products
</Link>

<a
href="https://wa.me/919302824042"
className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800"
>
Order on WhatsApp
</a>

</div>

</div>

</section>

{/* TRUST BADGES */}

<section className="py-12 bg-green-50">

<div className="max-w-6xl mx-auto flex justify-around flex-wrap text-center gap-6">

<div>
<h3 className="font-bold text-green-700">🌿 100% Natural</h3>
<p className="text-gray-600 text-sm">Pure herbal ingredients</p>
</div>

<div>
<h3 className="font-bold text-green-700">🚫 Chemical Free</h3>
<p className="text-gray-600 text-sm">Safe for skin & hair</p>
</div>

<div>
<h3 className="font-bold text-green-700">🇮🇳 Made in India</h3>
<p className="text-gray-600 text-sm">Traditional herbal care</p>
</div>

<div>
<h3 className="font-bold text-green-700">⭐ Trusted Quality</h3>
<p className="text-gray-600 text-sm">Loved by customers</p>
</div>

</div>

</section>

{/* PRODUCTS */}

<section className="py-24">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold mb-14">
Our Best Sellers
</h2>

<div className="grid md:grid-cols-3 gap-10">

{products.slice(0,3).map((product)=>(

<Link key={product._id} href={`/products/${product._id}`}>

<div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">

<img
src={product.image}
alt={product.name}
className="rounded-xl mb-5 w-full h-56 object-cover"
/>

<h3 className="text-xl font-semibold mb-2">
{product.name}
</h3>

<p className="text-gray-500 text-sm mb-2">
{product.weight}
</p>

<p className="text-green-700 font-bold text-lg">
₹{product.price}
</p>

</div>

</Link>

))}

</div>

<div className="mt-12">

<Link
href="/products"
className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800"
>
View All Products
</Link>

</div>

</div>

</section>

{/* HOW TO USE */}

<section className="bg-green-50 py-24 text-center">

<h2 className="text-4xl font-bold mb-12">
How To Use Our Products
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-xl font-semibold mb-3 text-green-700">
Multani Mitti
</h3>
<p>
Mix with rose water, apply on face, leave for 15 minutes, wash.
</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-xl font-semibold mb-3 text-green-700">
Mehendi Powder
</h3>
<p>
Mix with tea water, apply to hair for 1-2 hours, rinse well.
</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-xl font-semibold mb-3 text-green-700">
Shikakai
</h3>
<p>
Mix with water, apply to scalp for natural cleansing.
</p>
</div>

</div>

</section>

{/* BRAND STORY */}

<section className="py-24 text-center">

<div className="max-w-3xl mx-auto px-6">

<h2 className="text-4xl font-bold mb-6">
About Kantiqa
</h2>

<p className="text-lg text-gray-600 leading-relaxed">
Kantiqa brings the purity of traditional herbal ingredients
for skin and hair care. Our mission is to provide natural,
chemical-free beauty solutions inspired by ancient remedies.
</p>

</div>

</section>

{/* REVIEWS */}

<section className="bg-green-50 py-24 text-center">

<h2 className="text-4xl font-bold mb-12">
Customer Reviews
</h2>

<div className="flex justify-center gap-8 flex-wrap">

<div className="bg-white p-6 rounded-xl shadow w-72">
<p className="text-yellow-500 text-lg mb-2">★★★★★</p>
<p>My skin feels fresh after using Kantiqa Multani Mitti.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow w-72">
<p className="text-yellow-500 text-lg mb-2">★★★★★</p>
<p>The mehendi powder gives amazing natural colour.</p>
</div>

</div>

</section>

{/* INSTAGRAM */}

<section className="py-20 text-center">

<h2 className="text-3xl font-bold mb-6">
Follow Us on Instagram
</h2>

<p className="text-gray-600 mb-6">
Real product updates and herbal beauty tips.
</p>

<a
href="https://www.instagram.com/kantiqa.official"
target="_blank"
className="bg-green-700 text-white px-6 py-3 rounded-full"
>
@kantiqa.official
</a>

</section>

{/* WHATSAPP BUTTON */}

<a
href="https://wa.me/919302824042"
className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700"
>
WhatsApp
</a>

</main>

)

}