import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/Header";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/src/components/ui/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GSTly Admin",
  description: "Manage tenant-level feature flags for GSTly",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ToastProvider>
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />
            <div className="mx-auto max-w-7xl px-6 py-8">
              {children}
            </div>
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}

