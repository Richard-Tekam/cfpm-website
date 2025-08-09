import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CFP-M - Centre de Formation Professionnelle aux Métiers",
  description:
    "Centre de Formation Professionnelle aux Métiers Informatiques, Linguistiques, Management, Agribusiness et BTP. Formation pratique 'Learning by Doing' au Cameroun.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
