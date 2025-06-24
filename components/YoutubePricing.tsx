"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function YoutubePricing() {
  const plans = [
    {
      name: "特別価格パッケージプラン",
      price: "300,000",
      period: "月",
      description: "一番人気！社長の想いを未来につなぐYouTube運用プラン",
      features: [
        "撮影 月1回",
        "YouTube 月4投稿（8分〜10分）",
        "切り抜きショート動画 月20投稿 ※YouTube、Instagram、Tiktok",
        "LINEチャットサポート",
        "撮影テーマ提案",
      ],
      popular: true,
    },
    {
      name: "YouTube運用プラン",
      price: "280,000",
      period: "月",
      description: "通常価格 月40万円のところ、特別価格でご提供！",
      features: ["撮影 4本分（1日想定）", "YouTube 月4投稿（編集尺10分）"],
      popular: false,
      note: "※通常価格 月40万円（税抜）",
    },
    {
      name: "YouTube切り抜きshorts投稿プラン",
      price: "60,000",
      period: "月",
      description: "手軽にショート動画で発信したいお客様へ！",
      features: [
        "shorts動画作成 20本",
        "YouTube shorts 月20投稿",
        "＋Instagramリール投稿（月20投稿）月3万円",
        "＋TikTok投稿（月20投稿）月3万円",
      ],
      popular: false,
      note: "※3媒体投稿で月12万円（税抜）",
    },
  ]

  const handlePlanSelect = (planName: string) => {
    const message = `【${planName}】について詳しく知りたいです。`
    const lineUrl = `https://page.line.me/kwg3508l?text=${encodeURIComponent(message)}`
    window.open(lineUrl, "_blank")
  }

  return (
    <section id="youtube-pricing" className="py-16 md:py-24 bg-[#fffefe]">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#990001] mb-4">各種プラン</h2>
          <p className="text-lg text-gray-600 mb-2">経営者の想いを未来につなぐYouTube運用プラン</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`
                relative bg-white p-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full
                ${plan.popular ? "border-2 border-[#990001] md:scale-105 md:shadow-2xl z-10" : "border border-[#dadbda]"}
                ${plan.name === "YouTube運用プラン" ? "md:order-1" : ""}
                ${plan.name === "特別価格パッケージプラン" ? "md:order-2" : ""}
                ${plan.name === "YouTube切り抜きshorts投稿プラン" ? "md:order-3" : ""}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#990001] text-white px-4 py-2 rounded-md text-sm font-bold">一番人気！</span>
                </div>
              )}
              <div className="flex-grow">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#990001]">¥{plan.price}</span>
                    <span className="text-gray-600">/{plan.period} (税抜）</span>
                    {plan.note && <p className="text-sm text-gray-500 mt-2">{plan.note}</p>}
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <h4 className="font-bold text-gray-800 mb-3">【プラン内容】</h4>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-[#990001] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Button
                  className={`w-full py-3 rounded-md font-bold transition-colors ${
                    plan.popular
                      ? "bg-[#990001] hover:bg-[#b70002] text-white"
                      : "bg-white border-2 border-[#990001] text-[#990001] hover:bg-[#990001] hover:text-white"
                  }`}
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  このプランについて相談する
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
