import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kantiqa | Natural Herbal Beauty Products",
  description:
    "Kantiqa offers natural herbal powders like Multani Mitti, Mehendi, and hair packs for healthy skin and hair.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
        <footer className="bg-green-900 text-white py-12 mt-20">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

{/* Brand */}
<div>
<h2 className="text-2xl font-bold mb-3">Kantiqa</h2>
<p className="text-green-100">
Natural herbal powders crafted for healthy skin and hair.
100% natural and chemical-free beauty care.
</p>
</div>

{/* Quick Links */}
<div>
<h3 className="text-xl font-semibold mb-3">Quick Links</h3>
<ul className="space-y-2">
<li><a href="/" className="hover:text-green-300">Home</a></li>
<li><a href="/products" className="hover:text-green-300">Products</a></li>
<li><a href="#" className="hover:text-green-300">About</a></li>
<li><a href="#" className="hover:text-green-300">Contact</a></li>
</ul>
</div>

{/* Contact */}
<div>
<h3 className="text-xl font-semibold mb-3">Contact</h3>
<p>WhatsApp: +91 9302824042</p>

<a
href="https://www.instagram.com/kantiqa.official"
target="_blank"
className="text-green-300 hover:text-white"
>
Instagram: @kantiqa.official
</a>
</div>

</div>

<p className="text-center text-green-200 mt-10">
© {new Date().getFullYear()} Kantiqa. All rights reserved.
</p>

</footer>

        <a
          href="https://wa.me/919302824042?text=Hello%20I%20want%20to%20order%20Kantiqa%20products"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700"
        >
          WhatsApp
        </a>
      </body>
    </html>
  )
}
