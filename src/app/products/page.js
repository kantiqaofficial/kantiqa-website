export default function Products() {
  return (
    <main className="bg-white min-h-screen py-20 px-6">

      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
        Our Products
      </h1>

      <div className="flex justify-center gap-10 flex-wrap">

        {/* Multani Mitti */}
        <a href="/products/multani-mitti">
          <div className="bg-white p-6 rounded-xl shadow-md w-64 hover:shadow-xl transition">

            <img
              src="/images/multani-mitti.jpg"
              className="rounded mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-900">
              Multani Mitti
            </h3>

            <p className="text-gray-600">
              Natural face pack for glowing skin.
            </p>

          </div>
        </a>


        {/* Mehendi */}
        <a href="/products/mehendi">
          <div className="bg-white p-6 rounded-xl shadow-md w-64 hover:shadow-xl transition">

            <img
              src="/images/mehendi.jpg"
              className="rounded mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-900">
              Mehendi Powder
            </h3>

            <p className="text-gray-600">
              Natural hair colour and nourishment.
            </p>

          </div>
        </a>


        {/* Shikakai */}
        <a href="/products/shikakai">
          <div className="bg-white p-6 rounded-xl shadow-md w-64 hover:shadow-xl transition">

            <img
              src="/images/shikakai.jpg"
              className="rounded mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-900">
              Shikakai Powder
            </h3>

            <p className="text-gray-600">
              Natural herbal hair cleanser.
            </p>

          </div>
        </a>

      </div>

    </main>
  )
}