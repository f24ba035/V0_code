import { CheckCircle, Camera, Settings, Users, PlayCircle } from "lucide-react"
import React from "react"

export default function OperationFlow() {
  const flowSteps = [
    {
      icon: <CheckCircle className="w-12 h-12 text-[#990001]" />,
      title: "ヒアリングMTG",
      description: "オンラインでサービス内容を詳しくお伺いします。",
    },
    {
      icon: <Camera className="w-12 h-12 text-[#990001]" />,
      title: "撮影",
      description: "店舗・施設に訪問し、SNS投稿用の素材を撮影します。",
      note: "※ライトプランは撮影を実施しません。",
    },
    {
      icon: <Settings className="w-12 h-12 text-[#990001]" />,
      title: "初期設計",
      description: "アカウントのプロフィール設定や投稿テンプレートなど、運用に必要な初期構築を行います。",
    },
    {
      icon: <Users className="w-12 h-12 text-[#990001]" />,
      title: "キャスティング\n準備", // ここを修正
      description: "貴店に最適なインフルエンサーを選定し、キャスティング準備を進めます。",
    },
    {
      icon: <PlayCircle className="w-12 h-12 text-[#990001]" />,
      title: "運用開始",
      description: "投稿代行やインフルエンサー施策を開始。LINEグループで随時サポートします。",
    },
  ]

  return (
    <section id="operation-flow" className="py-16 md:py-24 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#990001] mb-4">運用までの流れ</h2>
          <p className="text-lg text-gray-600">サービス導入から運用開始までのステップ</p>
        </div>

        {/* Desktop Flow (Horizontal without arrows) */}
        <div className="hidden md:flex justify-between items-start relative w-full">
          {flowSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center w-[18%] px-2">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-[#990001] text-white font-bold text-xl mb-4 shadow-md">
                  {index + 1}
                </div>
                <div className="mb-4">{step.icon}</div>
                <div className="text-left w-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 whitespace-pre-line">{step.title}</h3>{" "}
                  {/* whitespace-pre-lineを追加 */}
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  {step.note && <p className="text-gray-500 text-xs mt-2 italic">{step.note}</p>}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Flow (Vertical Timeline) */}
        <div className="md:hidden relative flex flex-col items-center">
          {flowSteps.map((step, index) => (
            <div key={index} className="relative w-full max-w-md my-6">
              <div className="absolute left-[-1.25rem] top-1/2 transform -translate-y-1/2 w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-[#990001] text-white font-bold text-lg shadow-md z-10">
                {index + 1}
              </div>
              <div className="ml-8 flex-grow bg-[#fffefe] p-6 rounded-md shadow-lg text-left">
                <div className="mb-2">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 whitespace-pre-line">{step.title}</h3>{" "}
                {/* whitespace-pre-lineを追加 */}
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                {step.note && <p className="text-gray-500 text-xs mt-2 italic">{step.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
