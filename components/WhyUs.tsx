import Image from "next/image"
import { CheckCircle, Users, Star, TrendingUp } from "lucide-react" // アイコンを更新

export default function WhyUs() {
  const strengths = [
    {
      icon: <CheckCircle className="w-12 h-12 text-[#990001]" />,
      title: "自社のノウハウをフル活用",
      description: "自社店舗での集客施策や動向を元に、アカウントの運用を支援。効果検証を常に行いサービスを改善。",
      image: "/images/sushi-platter.jpg", // 既存の画像を再利用
    },
    {
      icon: <Users className="w-12 h-12 text-[#990001]" />,
      title: "独自のインフルエンサーリスト",
      description:
        "グルメに特化したインフルエンサーだけを1,000人以上リストアップ。独自の視点で効果のあるインフルエンサーをキャスティング。",
      image: "/images/creator-influencer-shoot.jpg", // 既存の画像を再利用
    },
    {
      icon: <Star className="w-12 h-12 text-[#990001]" />,
      title: "現役インフルエンサーが担当",
      description: "現役のグルメインフルエンサーが知見を生かして個別にキャスティングや運用を担当。",
      image: "/images/barista-welcoming.jpg", // 既存の画像を再利用
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#990001]" />,
      title: "運用実績多数あり",
      description:
        "実際に導入した居酒屋が約150%の売上増加を達成するなど、実績あり！グルメアカウント運用の熟練者が貴店舗をサポート！",
      image: "/images/data-report-analytics.jpg", // 既存の画像を再利用
    },
  ]

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#fffefe]">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">そのお悩み解決します！</h2>
          <p className="text-lg text-gray-600">Dazyが選ばれる4つの強み</p>
        </div>
        <div className="space-y-12">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-xl shadow-lg overflow-hidden bg-white ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center`}
            >
              {/* コンテンツブロック (アイコン、タイトル、PC表示用説明文) */}
              <div className="lg:w-1/2 p-8 pb-0 lg:pb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">{strength.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{strength.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed hidden lg:block">{strength.description}</p>
              </div>

              {/* 画像ブロック */}
              <div className="lg:w-1/2 w-full">
                <Image
                  src={strength.image || "/placeholder.svg"}
                  alt={strength.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-[300px]"
                />
              </div>

              {/* モバイル表示用説明文ブロック */}
              <div className="w-full p-8 pt-4 lg:hidden">
                <p className="text-gray-600 leading-relaxed">{strength.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
