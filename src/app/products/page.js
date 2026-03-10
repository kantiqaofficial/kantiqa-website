import Link from "next/link"
import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"
import { useState } from "react"

export default async function ProductsPage(){

  await connectDB()

  const products = await Product.find()
  const [search,setSearch] = useState("")
  const filteredProducts = products.filter((product)=>
product.name.toLowerCase().includes(search.toLowerCase())
)

  return(

    <main className="max-w-7xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-16">
        Our Products
      </h1>
      
      <input
type="text"
placeholder="Search products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border p-3 rounded w-full mb-10"
/>

      <div className="grid md:grid-cols-3 gap-10">

        {filteredProducts.map((product)=>(

          <Link key={product._id} href={`/products/${product._id}`}>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">

              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-xl font-semibold mb-2">
                  {product.name}
                </h2>

                <p className="text-gray-500 mb-2">
                  {product.weight}
                </p>

                <p className="text-green-700 font-bold text-lg mb-4">
                  ₹{product.price}
                </p>

                <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
                  View Product
                </button>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </main>

  )
}