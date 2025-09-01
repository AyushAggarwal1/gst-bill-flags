import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold">Tenants</h2>
          <p className="text-sm text-gray-600 mt-1">View tenants and users from gst-bill.</p>
          <Link href="/tenants" className="inline-flex mt-4 px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700">Open</Link>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold">Features</h2>
          <p className="text-sm text-gray-600 mt-1">Enable/disable features per tenant.</p>
          <Link href="/features" className="inline-flex mt-4 px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700">Open</Link>
        </div>
      </div>
    </main>
  );
}

