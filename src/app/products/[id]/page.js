import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"
import AddToCartButton from "@/components/AddToCartButton"
import ProductReviews from "@/components/ProductReviews"

export default async function ProductPage({ params }) {

  const { id } = await params   // 👈 required in Next.js 16

  await connectDB()

  const productDoc = await Product.findById(id)
const product = JSON.parse(JSON.stringify(productDoc))

  if (!product) {
    return <div className="text-center py-20">Product not found</div>
  }

  return (

<main className="max-w-6xl mx-auto py-20 px-6">

<div className="grid md:grid-cols-2 gap-16 items-center">

{/* Product Image */}

<div>

<img
src={product.image}
alt={product.name}
className="rounded-xl w-full shadow-lg"
/>

</div>


{/* Product Details */}

<div>

<h1 className="text-4xl font-bold text-gray-900 mb-4">
{product.name}
</h1>

<p className="text-gray-600 mb-6">
{product.description}
</p>

<p className="text-3xl font-bold text-green-700 mb-8">
₹{product.price}
</p>

<div className="flex flex-col sm:flex-row gap-4">

<AddToCartButton product={product} />

<a
href={`https://wa.me/919302824042?text=Hello%20I%20want%20to%20order%20${product.name}`}
className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
>
Order on WhatsApp
</a>

</div>

<div className="mt-10 grid grid-cols-2 gap-4 text-gray-700">

<div className="flex items-center gap-2">
<span>🌿</span>
<p>100% Natural Ingredients</p>
</div>

<div className="flex items-center gap-2">
<span>🚫</span>
<p>No Harmful Chemicals</p>
</div>

<div className="flex items-center gap-2">
<span>🧴</span>
<p>Traditional Herbal Care</p>
</div>

<div className="flex items-center gap-2">
<span>✨</span>
<p>Safe for Skin & Hair</p>
</div>

</div>



</div>

</div>

<ProductReviews productId={product._id} />

</main>

)
}
