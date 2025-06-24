"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSns() {
  const handleFreeConsultation = () => {
    const message =
      "SNS運用代行LPの「無料相談はこちら」ボタンから問い合わせました。サービスについて詳しく知りたいです。"
    const lineUrl = `https://page.line.me/kwg3508l?text=${encodeURIComponent(message)}`
    window.open(lineUrl, "_blank")
  }

  return (
    <section id="hero-sns" className="min-h-[calc(100vh-4rem)] bg-[#990001] relative overflow-hidden flex items-center">
      {/* スマートフォン表示用の背景画像とオーバーレイ */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="/images/hero-izakaya.png" // 既存のヒーロー画像を再利用
          alt="SNS運用中のスマートフォンと飲食店"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* コンテンツ部分 */}
      <div className="max-w-screen-xl mx-auto px-6 py-16 w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              飲食店特化型
              <br />
              <span className="text-[#fffefe]">SNS支援</span>
            </h1>
            <p className="text-lg leading-relaxed text-[#fffefe] max-w-md">
              飲食店様向けインフルエンサーキャスティング & 代理投稿サービスです。
              <br />
              昨今の飲食業界において最も重要と言っても過言ではない集客ツール、Instagram。
              <br />
              Dazy独自のナレッジをいかしInstagramによる集客底上げを実現します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#fffefe] text-[#990001] hover:bg-[#dadbda] hover:text-[#990001] transition-colors px-8 py-4 text-lg font-bold rounded-md"
                onClick={handleFreeConsultation}
              >
                無料相談はこちら
              </Button>
            </div>
          </div>
          {/* PC表示用の画像 */}
          <div className="relative hidden lg:block w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-izakaya.png" // 既存のヒーロー画像を再利用
              alt="SNS運用中のスマートフォンと飲食店"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
