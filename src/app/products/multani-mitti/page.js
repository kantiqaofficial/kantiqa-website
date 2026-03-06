export default function MultaniMitti() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Multani Mitti
      </h1>

      <img
        src="/images/multani-mitti.jpg"
        alt="Multani Mitti"
        className="rounded-xl mb-8"
      />

      <p className="text-gray-700 mb-6">
        Multani Mitti is a natural clay used for deep cleansing and
        improving skin glow. It removes excess oil and impurities.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Benefits
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-8">
        <li>Removes excess oil</li>
        <li>Deep skin cleansing</li>
        <li>Natural glowing skin</li>
        <li>Improves skin texture</li>
      </ul>

      <a
        href="https://wa.me/919302824042?text=Hello%20I%20want%20to%20order%20Multani%20Mitti"
        className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
      >
        Order on WhatsApp
      </a>

    </main>
  )
}