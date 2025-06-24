import { Users, DollarSign, HelpCircle } from "lucide-react"

export default function Problems() {
  const problems = [
    {
      icon: <HelpCircle className="w-12 h-12 text-[#990001]" />,
      title: "お店を効果的に紹介・掲載する方法が分からない...",
      description: "SNSの重要性はわかるけど、どんな内容を発信すればお客様に響くのか、ネタ探しに困っている。",
    },
    {
      icon: <Users className="w-12 h-12 text-[#990001]" />,
      title: "効果的なインフルエンサーのキャスティング方法が分からない...",
      description: "店舗運営で忙しく、SNS用の写真撮影や動画編集に時間を割けない。",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#990001]" />,
      title: "飲食サイトに掲載しているのに集客に繋がらない...",
      description: "Web広告やグルメサイトの掲載料が高く、費用対効果が見えない。",
    },
  ]

  return (
    <section id="problems" className="py-16 md:py-24 bg-[#fffefe]">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">こんなお悩みありませんか？</h2>
          <p className="text-lg text-gray-600">多くの飲食店様が抱える共通の課題</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-6">{problem.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 h-14 flex items-center justify-center">
                {/* h-14 と flex items-center justify-center を追加して高さを揃え、中央寄せにする */}
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-left">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
