import type React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Resonators of Sound",
  description: "Innovative earbud tips designed for comfort",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-16 flex items-center border-b">
              <Link className="flex items-center justify-center" href="/">
                <div className="flex items-center">
                  <svg
                    width="220"
                    height="40"
                    viewBox="0 0 220 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-auto"
                  >
                    {/* Background waves with reduced opacity */}
                    <path
                      d="M10 20 Q 20 10, 30 20 Q 40 30, 50 20 Q 60 10, 70 20 Q 80 30, 90 20 Q 100 10, 110 20 Q 120 30, 130 20 Q 140 10, 150 20 Q 160 30, 170 20 Q 180 10, 190 20 Q 200 30, 210 20"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeOpacity="0.7"
                      fill="none"
                    />
                    <path
                      d="M10 25 Q 20 15, 30 25 Q 40 35, 50 25 Q 60 15, 70 25 Q 80 35, 90 25 Q 100 15, 110 25 Q 120 35, 130 25 Q 140 15, 150 25 Q 160 35, 170 25 Q 180 15, 190 25 Q 200 35, 210 25"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeOpacity="0.7"
                      fill="none"
                    />
                    <path
                      d="M10 15 Q 20 25, 30 15 Q 40 5, 50 15 Q 60 25, 70 15 Q 80 5, 90 15 Q 100 25, 110 15 Q 120 5, 130 15 Q 140 25, 150 15 Q 160 5, 170 15 Q 180 25, 190 15 Q 200 5, 210 15"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeOpacity="0.7"
                      fill="none"
                    />

                    {/* Text with black fill */}
                    <text x="10" y="25" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white">
                      Resonators of Sound
                    </text>
                  </svg>
                </div>
              </Link>
              <nav className="ml-auto flex gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
                  Home
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/team">
                  The Team
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
                  Contact
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/products">
                  Products
                </Link>
              </nav>
            </header>
            {children}
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
              <p className="text-xs text-muted-foreground">© 2024 Resonators of Sound. All rights reserved.</p>
              <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                  Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                  Privacy
                </Link>
              </nav>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'