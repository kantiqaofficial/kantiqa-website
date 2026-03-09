import Link from "next/link"

export default function AdminLayout({ children }) {

return(

<div className="flex min-h-screen">

{/* Sidebar */}

<div className="w-64 bg-green-900 text-white p-6 space-y-6">

<h2 className="text-2xl font-bold">
Admin Panel
</h2>

<nav className="space-y-4">

<Link href="/admin" className="block hover:text-green-300">
Dashboard
</Link>

<Link href="/admin/products" className="block hover:text-green-300">
Products
</Link>

<Link href="/admin/orders" className="block hover:text-green-300">
Orders
</Link>

<Link href="/admin/reviews" className="block hover:text-green-300">
Reviews
</Link>

<Link href="/admin/users" className="block hover:text-green-300">
Users
</Link>

</nav>

</div>


{/* Main Content */}

<div className="flex-1 p-10 bg-gray-50">

{children}

</div>

</div>

)

}