import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/components/auth/auth-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GREIA - Global Real Estate & Investment Alliance",
  description: "Your global gateway to properties, services, and professional connections worldwide.",
  keywords: "real estate, properties, global, investment, services, professionals",
  authors: [{ name: "GREIA Team" }],
  openGraph: {
    title: "GREIA - Global Real Estate & Investment Alliance",
    description: "Your global gateway to properties, services, and professional connections worldwide.",
    url: "https://greia-platform-2.lindy.site",
    siteName: "GREIA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GREIA - Global Real Estate & Investment Alliance",
    description: "Your global gateway to properties, services, and professional connections worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}