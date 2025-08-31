import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sites Apostas Des Portivas Pt | Análise Completa 2024",
  description:
    "Descubra os melhores sites de apostas em Portugal. Análises detalhadas, bónus exclusivos e casas de apostas licenciadas. Aposte com segurança!",
  keywords: "apostas portugal, sites apostas, casas apostas portugal, bónus apostas, apostas desportivas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer/>
      </body>
    </html>
  )
}
