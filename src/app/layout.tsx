import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GST Bill Flags Admin",
  description: "Manage tenant-level feature flags for GST Bill",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-primary-600" />
              <span className="font-semibold">GST Bill Flags Admin</span>
            </div>
            <nav className="flex items-center gap-4 text-sm">
              <a className="text-gray-600 hover:text-gray-900" href="/">Home</a>
              <a className="text-gray-600 hover:text-gray-900" href="/tenants">Tenants</a>
              <a className="text-gray-600 hover:text-gray-900" href="/features">Features</a>
              <form action="/api/logout" method="post">
                <button className="text-gray-600 hover:text-gray-900" type="submit">Logout</button>
              </form>
            </nav>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </div>
      </body>
    </html>
  );
}

