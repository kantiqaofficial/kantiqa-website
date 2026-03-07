export default function About() {
  return (

    <main className="bg-white min-h-screen py-20 px-6 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
        About Kantiqa
      </h1>

      <p className="text-gray-700 text-lg mb-6">
        Kantiqa is dedicated to bringing the purity of traditional
        herbal ingredients for natural beauty and hair care.
      </p>

      <p className="text-gray-700 text-lg mb-6">
        Our products are made from carefully selected herbs like
        Multani Mitti, Mehendi, and Shikakai that have been trusted
        for generations.
      </p>

      <p className="text-gray-700 text-lg mb-6">
        We believe true beauty comes from nature. That's why our
        powders are 100% natural and free from harmful chemicals.
      </p>

      <div className="bg-green-50 p-6 rounded-xl mt-10">

        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Our Promise
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>100% Natural Ingredients</li>
          <li>No Chemicals</li>
          <li>Traditional Herbal Care</li>
          <li>Safe for Skin & Hair</li>
        </ul>

      </div>

    </main>

  )
}