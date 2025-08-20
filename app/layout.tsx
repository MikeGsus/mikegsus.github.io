import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Clarity from "@microsoft/clarity"

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio de Desarrollador",
  description: "Portfolio profesional de desarrollador de software",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (clarityProjectId) {
    Clarity.init(clarityProjectId)
  } else {
    console.warn("Clarity project ID is not set. Skipping initialization.")
  }
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
