export default function Home() {
  return (
    <main className="font-sans">

      {/* Navbar */}

      <nav className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-green-700">Kantiqa 🌿</h1>

        <div className="space-x-6">
          <a className="hover:text-green-700" href="#">Home</a>
          <a className="hover:text-green-700" href="#">Products</a>
          <a className="hover:text-green-700" href="#">About</a>
          <a className="hover:text-green-700" href="#">Contact</a>
        </div>
      </nav>


      {/* Hero Section */}

      <section className="text-center py-24 bg-green-100">

        <h1 className="text-5xl font-bold mb-6">
          Pure Herbal Beauty From Nature 🌿
        </h1>

        <p className="text-lg mb-8">
          Traditional herbal powders crafted for healthy skin and hair.
        </p>

        <a
          href="https://wa.me/919302824042"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
        >
          Order on WhatsApp
        </a>

      </section>


      {/* Products Section */}

    <section className="py-20 text-center">

     <h2 className="text-3xl font-bold mb-12">
      Our Products
     </h2>

     <div className="flex justify-center gap-10 flex-wrap">

     <div className="bg-white p-6 rounded-xl shadow w-64">
     <img
     src="/images/multani-mitti.jpg"
     className="rounded mb-4"
     />
     <h3 className="text-xl font-semibold">Multani Mitti</h3>
     <p>Natural face pack for glowing skin.</p>
     </div>

     <div className="bg-white p-6 rounded-xl shadow w-64">
     <img
     src="/images/mehendi.jpg"
     className="rounded mb-4"
     />
     <h3 className="text-xl font-semibold">Mehendi Powder</h3>
     <p>Natural hair colour and nourishment.</p>
     </div>

     <div className="bg-white p-6 rounded-xl shadow w-64">
     <img
     src="/images/hair-pack.jpg"
     className="rounded mb-4"
     />
     <h3 className="text-xl font-semibold">Herbal Hair Pack</h3>
     <p>Strengthens and nourishes hair.</p>
     </div>

     </div>

    </section>

    <section className="bg-green-100 py-20 text-center">

      <h2 className="text-3xl font-bold mb-6">
      About Kantiqa
      </h2>

      <p className="max-w-2xl mx-auto text-lg">
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

<h2 className="text-3xl font-bold mb-10">
Customer Reviews
</h2>

<div className="flex justify-center gap-10 flex-wrap">

<div className="bg-white p-6 rounded-xl shadow w-64">
<p>⭐⭐⭐⭐⭐</p>
<p>My skin feels fresh after using Kantiqa Multani Mitti.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow w-64">
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
See real product updates and customer results.
</p>

<a
href="https://instagram.com"
className="bg-green-700 text-white px-6 py-3 rounded-lg"
>
View Instagram
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