export default function Shikakai() {
  return (
    <main className="bg-white min-h-screen max-w-5xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Shikakai Powder
      </h1>

      <img
        src="/images/shikakai.jpg"
        alt="Shikakai Powder"
        className="rounded-xl mb-8"
      />

      <p className="text-gray-700 mb-6">
        Shikakai is a natural herbal powder used for hair cleansing.
        It strengthens hair roots and promotes healthy hair growth.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Benefits
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-8">
        <li>Natural hair cleanser</li>
        <li>Promotes hair growth</li>
        <li>Reduces dandruff</li>
        <li>Adds shine and strength to hair</li>
      </ul>

      <a
        href="https://wa.me/919302824042?text=Hello%20I%20want%20to%20order%20Shikakai%20Powder"
        className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
      >
        Order on WhatsApp
      </a>

    </main>
  )
}