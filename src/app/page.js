export default function Home() {
  return (
    <main className="font-sans">

      {/* Navbar */}

<nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">

{/* Logo Section */}
<div className="flex items-center gap-3">

<img
src="/logo.png"
alt="Kantiqa Logo"
className="w-20 h-20 object-contain"
/>

<h1 className="text-2xl font-bold text-green-700">
Kantiqa
</h1>

</div>

{/* Navigation Links */}
<div className="flex items-center gap-6">

<a className="text-gray-800 hover:text-green-700 font-medium" href="#">Home</a>
<a className="text-gray-800 hover:text-green-700 font-medium" href="#">Products</a>
<a className="text-gray-800 hover:text-green-700 font-medium" href="#">About</a>
<a className="text-gray-800 hover:text-green-700 font-medium" href="#">Contact</a>

<a
href="https://www.instagram.com/kantiqa.official"
target="_blank"
className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
>
Instagram
</a>

</div>

</nav>


      {/* Hero Section */}

<section
className="text-center py-32 bg-cover bg-center"
style={{ backgroundImage: "url('/images/hero.jpg')" }}
>

<div className="bg-black/40 py-20">

<h1 className="text-5xl font-bold text-white mb-6">
Pure Herbal Beauty From Nature 🌿
</h1>

<p className="text-lg text-gray-200 mb-8">
Traditional herbal powders crafted for healthy skin and hair.
</p>

<a
href="https://wa.me/919302824042?text=Hello%20I%20want%20to%20order%20Kantiqa%20products"
className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
>
Order on WhatsApp
</a>

</div>

</section>


      {/* Products Section */}

<section className="py-20 text-center">

<h2 className="text-3xl font-bold text-gray-900 mb-12">
Our Products
</h2>

<div className="flex justify-center gap-10 flex-wrap">

{/* Product Card */}

<a href="/products/multani-mitti">

<div className="bg-white p-6 rounded-xl shadow-md w-64 
hover:shadow-xl transform hover:-translate-y-2 
transition duration-300 cursor-pointer">

<img
src="/images/multani-mitti.jpg"
alt="Multani Mitti"
className="rounded-lg mb-4 hover:scale-105 transition duration-300"
/>

<h3 className="text-xl font-semibold text-gray-900 mb-2">
Multani Mitti
</h3>

<p className="text-gray-600">
Natural face pack for glowing skin.
</p>

</div>

</a>


<a href="/products/mehendi">

<div className="bg-white p-6 rounded-xl shadow-md w-64 
hover:shadow-xl transform hover:-translate-y-2 
transition duration-300 cursor-pointer">

<img
src="/images/mehendi.jpg"
alt="Mehendi"
className="rounded-lg mb-4 hover:scale-105 transition duration-300"
/>

<h3 className="text-xl font-semibold text-gray-900 mb-2">
Mehendi Powder
</h3>

<p className="text-gray-600">
Natural hair colour and nourishment.
</p>

</div>

</a>


<a href="/products/herbal-hair-pack">

<div className="bg-white p-6 rounded-xl shadow-md w-64 
hover:shadow-xl transform hover:-translate-y-2 
transition duration-300 cursor-pointer">

<img
src="/images/hair-pack.jpg"
alt="Herbal Hair Pack"
className="rounded-lg mb-4 hover:scale-105 transition duration-300"
/>

<h3 className="text-xl font-semibold text-gray-900 mb-2">
Herbal Hair Pack
</h3>

<p className="text-gray-600">
Strengthens and nourishes hair.
</p>

</div>

</a>

</div>

</section>

<section className="bg-green-100 py-20 text-center">

<h2 className="text-3xl font-bold text-gray-900 mb-6">
About Kantiqa
</h2>

<p className="max-w-2xl mx-auto text-lg text-gray-700">
Kantiqa brings the purity of traditional herbal ingredients
for skin and hair care. Our products are 100% natural,
chemical-free, and crafted with care.
</p>

</section>

    <section className="py-20 text-center">

<h2 className="text-3xl font-bold mb-12">
Why Choose Kantiqa
</h2>

<div className="flex justify-center gap-10 flex-wrap">

<div className="w-60">
<h3 className="text-xl font-semibold text-green-700">100% Natural</h3>
<p>No chemicals, only herbal ingredients.</p>
</div>

<div className="w-60">
<h3 className="text-xl font-semibold text-green-700">Traditional Care</h3>
<p>Inspired by ancient herbal beauty rituals.</p>
</div>

<div className="w-60">
<h3 className="text-xl font-semibold text-green-700">Safe for Skin & Hair</h3>
<p>Gentle and effective natural care.</p>
</div>

</div>

</section>


<section className="bg-green-50 py-20 text-center">

<h2 className="text-3xl font-bold text-gray-900 mb-10">
Customer Reviews
</h2>

<div className="flex justify-center gap-10 flex-wrap">

<div className="bg-white p-6 rounded-xl shadow w-64 text-gray-800">
<p>⭐⭐⭐⭐⭐</p>
<p>My skin feels fresh after using Kantiqa Multani Mitti.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow w-64 text-gray-800">
<p>⭐⭐⭐⭐⭐</p>
<p>The mehendi powder gives amazing natural colour.</p>
</div>

</div>

</section>

<section className="py-20 text-center">

<h2 className="text-3xl font-bold mb-6">
Follow Us on Instagram
</h2>

<p className="mb-6">
See product updates and herbal beauty tips.
See real product updates and customer results.
</p>

<a
href="https://www.instagram.com/kantiqa.official"
target="_blank"
className="bg-green-700 text-white px-6 py-3 rounded-lg"
>
@kantiqa.official
</a>

</section>

    <a
     href="https://wa.me/919302824042"
     className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
    >
      WhatsApp
    </a>

    </main>
  )
}