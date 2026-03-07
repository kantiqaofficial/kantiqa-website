export const metadata = {
  title: "Natural Mehendi Powder | Kantiqa",
  description:
    "Kantiqa natural Mehendi powder strengthens hair and provides beautiful natural color.",
}
export default function Mehendi() {
  return (
    <main className="bg-white min-h-screen max-w-5xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Mehendi Powder
      </h1>

      <img
        src="/images/mehendi.jpg"
        alt="Mehendi Powder"
        className="rounded-xl mb-8"
      />

      <p className="text-gray-700 mb-6">
        Natural Mehendi powder strengthens hair, cools the scalp,
        and provides a beautiful natural color.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Benefits
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-8">
        <li>Natural hair color</li>
        <li>Strengthens hair roots</li>
        <li>Improves scalp health</li>
        <li>Adds shine to hair</li>
      </ul>

      <a
        href="https://wa.me/919302824042?text=Hello%20I%20want%20to%20order%20Mehendi%20Powder"
        className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
      >
        Order on WhatsApp
      </a>

    </main>
  )
}