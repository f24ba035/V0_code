import Image from "next/image"
import { UserCheck, BookOpen, GitFork, Award } from "lucide-react" // アイコンを更新

export default function WhyUsYoutube() {
  const reasons = [
    {
      icon: <UserCheck className="w-12 h-12 text-[#990001]" />,
      title: "採用のミスマッチを防ぐ",
      description:
        "経営者の「人柄」や「想い」を映像で伝えることで共感を呼び、求職者「この経営者の元で働きたい」と思ってもらえる。",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-[#990001]" />,
      title: "教育コンテンツに活用できる",
      description: '新入社員や中堅社員に"何度も見返せる教材"として浸透。社内教育に効果的。',
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      icon: <GitFork className="w-12 h-12 text-[#990001]" />,
      title: "組織の軸が揃う",
      description: "社長の考えを動画で全社共有可能。会議や朝礼にも活用可能で組織体制の構築や理念浸透に効果的。",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      icon: <Award className="w-12 h-12 text-[#990001]" />,
      title: "運用実績多数あり",
      description: "「BreakingDown」「REAL VALUE」などを担当する撮影・編集チームが担当。",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section id="why-us-youtube" className="py-16 md:py-24 bg-[#fffefe]">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">そのお悩み解決します！</h2>
          <p className="text-lg text-gray-600">本サービスが選ばれる理由</p>
        </div>
        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-xl shadow-lg overflow-hidden bg-white ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center`}
            >
              {/* コンテンツブロック (アイコン、タイトル、PC表示用説明文) */}
              <div className="lg:w-1/2 p-8 pb-0 lg:pb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{reason.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed hidden lg:block">{reason.description}</p>
              </div>

              {/* 画像ブロック */}
              <div className="lg:w-1/2 w-full">
                <Image
                  src={reason.image || "/placeholder.svg"}
                  alt={reason.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-[300px]"
                />
              </div>

              {/* モバイル表示用説明文ブロック */}
              <div className="w-full p-8 pt-4 lg:hidden">
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
