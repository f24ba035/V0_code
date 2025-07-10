"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function SnsPricing() {
  // プランの定義順序を、モバイルで「1番人気」が最初に来るように変更
  const plans = [
    {
      name: "スタンダードプラン",
      price: "50,000",
      period: "月",
      description: "1番人気！コストパフォーマンス抜群のプランです！",
      features: ["インフルエンスキャスティング ※100人お声がけ", "月10投稿", "LINEチャットサポート"],
      popular: true,
      initialCost: "初期設計 ※10万円（税別）",
    },
    {
      name: "ライトプラン",
      price: "30,000",
      period: "月",
      description: "低コストで試したいお客様へ！",
      features: ["インフルエンサーキャスティング ※50人お声がけ", "LINEチャットサポート"],
      popular: false,
      note: "ライトプランは撮影を実施せずキャスティング準備から開始となります。",
    },
    {
      name: "プレミアムプラン",
      price: "300,000",
      period: "月",
      description: "集客効果を最大化し、Instagramを本格活用したいお客様へ！",
      features: [
        "クライアント様に合わせてプランをご提示",
        "ビックインフルエンサーのキャスティングやリール動画の投稿代行なども実施",
      ],
      popular: false,
    },
  ]

  const handlePlanSelect = (planName: string) => {
    const message = `【${planName}】について詳しく知りたいです。`
    const lineUrl = `https://page.line.me/kwg3508l?text=${encodeURIComponent(message)}`
    window.open(lineUrl, "_blank")
  }

  return (
    <section id="sns-pricing" className="py-16 md:py-24 bg-[#fffefe]">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#990001] mb-4">各種プラン</h2>
          <p className="text-lg text-gray-600 mb-2">飲食店特化型SNS運用プラン</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name} // keyをnameに変更して安定性を高める
              className={`
                relative bg-white p-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full
                ${plan.popular ? "border-2 border-[#990001] md:scale-105 md:shadow-2xl z-10" : "border border-[#dadbda]"}
                ${plan.name === "ライトプラン" ? "md:order-1" : ""}
                ${plan.name === "スタンダードプラン" ? "md:order-2" : ""}
                ${plan.name === "プレミアムプラン" ? "md:order-3" : ""}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#990001] text-white px-4 py-2 rounded-md text-sm font-bold">1番人気</span>
                </div>
              )}
              <div className="flex-grow">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#990001]">¥{plan.price}</span>
                    <span className="text-gray-600">/{plan.period} (税別)</span>
                    {plan.initialCost && <p className="text-sm text-gray-500 mt-2">{plan.initialCost}</p>}
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
                {plan.note && <p className="text-gray-500 text-xs mt-4 italic">{plan.note}</p>}
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
