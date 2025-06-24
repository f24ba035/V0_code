import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingContactButton from "@/components/FloatingContactButton"
import ScrollToTop from "@/components/ScrollToTop" // ScrollToTopをインポート

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
})

export const metadata: Metadata = {
  title: "飲食店向けSNS・映像制作 | 株式会社Dazy",
  description:
    '映像とSNSで、あなたの店を"行列店"に。インフルエンサー×動画クリエイターの力で集客を自動化。飲食店特化のSNS運用代行・映像制作サービス。',
  keywords: "飲食店, SNS運用, 映像制作, インフルエンサー, YouTube, 集客",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContactButton />
        <ScrollToTop /> {/* ここにScrollToTopコンポーネントを追加 */}
      </body>
    </html>
  )
}
