import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"

export default async function Home() {

  await connectDB()

  const products = await Product.find()

  return (
    <main className="font-sans">

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

          <div className="flex justify-center gap-4 flex-wrap">

            <a
              href="/products"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              View Products
            </a>

            <a
              href="https://wa.me/919302824042?text=Hello%20I%20want%20to%20order%20Kantiqa%20products"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
            >
              Order on WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* Products Section */}

      <section className="py-20 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Our Products
        </h2>

        <div className="flex justify-center gap-10 flex-wrap">

          {products.slice(0,3).map((product) => (

            <div
              key={product._id}
              className="bg-white p-6 rounded-xl shadow-md w-64 hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
            >

              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg mb-4 hover:scale-105 transition duration-300"
              />

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>

              <p className="text-gray-600 mb-2">
                {product.weight}
              </p>

              <p className="text-green-700 font-bold">
                ₹{product.price}
              </p>

            </div>

          ))}

        </div>

      </section>

<section className="bg-green-50 py-24 text-center">

<h2 className="text-3xl font-bold text-gray-900 mb-12">
How To Use Our Products
</h2>

<div className="flex justify-center gap-12 flex-wrap max-w-5xl mx-auto">

{/* Multani Mitti */}

<div className="w-72">

<h3 className="text-xl font-semibold text-green-700 mb-3">
Multani Mitti
</h3>

<p className="text-gray-700">
Mix 2 spoons of Multani Mitti with rose water,
apply evenly on the face, leave for 15 minutes,
then wash with clean water.
</p>

</div>

{/* Mehendi */}

<div className="w-72">

<h3 className="text-xl font-semibold text-green-700 mb-3">
Mehendi Powder
</h3>

<p className="text-gray-700">
Mix Mehendi powder with water or tea water,
apply to hair, leave for 1–2 hours,
then wash thoroughly.
</p>

</div>

{/* Hair Pack */}

<div className="w-72">

<h3 className="text-xl font-semibold text-green-700 mb-3">
Herbal Hair Pack
</h3>

<p className="text-gray-700">
Mix herbal powder with curd or aloe vera gel,
apply on scalp and hair,
leave for 30 minutes and rinse.
</p>

</div>

</div>

</section>

<section className="bg-white py-24 text-center">

<h2 className="text-3xl font-bold text-gray-900 mb-12">
Natural Herbal Ingredients
</h2>

<div className="flex justify-center gap-10 flex-wrap max-w-5xl mx-auto">

<div className="bg-green-50 p-6 rounded-xl w-60 shadow">
<h3 className="text-xl font-semibold text-green-700 mb-2">
Multani Mitti
</h3>
<p className="text-gray-700">
Deep cleanses skin and removes excess oil.
</p>
</div>

<div className="bg-green-50 p-6 rounded-xl w-60 shadow">
<h3 className="text-xl font-semibold text-green-700 mb-2">
Henna (Mehendi)
</h3>
<p className="text-gray-700">
Strengthens hair and provides natural color.
</p>
</div>

<div className="bg-green-50 p-6 rounded-xl w-60 shadow">
<h3 className="text-xl font-semibold text-green-700 mb-2">
Shikakai
</h3>
<p className="text-gray-700">
Natural herbal cleanser that promotes healthy hair growth.
</p>
</div>

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