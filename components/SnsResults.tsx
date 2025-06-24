import Image from "next/image"
import Link from "next/link"

export default function SnsResults() {
  const snsResults = [
    {
      name: "海老牡蠣酒場だるま", // 東京都港区 海鮮系居酒屋さん
      image: "/images/ebi-kaki-sakaba-daruma-platter.jpg",
      description: "SNS運用開始から3ヶ月で来客数が大幅増加",
      url: "#",
      tag: "SNS運用代行",
    },
    {
      name: "東京都品川区 居酒屋（大井町）",
      image: "/images/oimachi-izakaya-entrance.jpeg",
      description:
        "■実施月：2025年1月〜運用\n■実施内容：月10投稿代行&インフルエンサーキャスティング\n・3月の売上が昨対比100万円UP\n・4.5月も売上150%UP継続中",
      url: "https://www.instagram.com/denrai_ooimachi/",
      tag: "SNS運用代行",
    },
    {
      name: "東京都渋谷区 定食さん",
      image: "/images/dashibayashi-restaurant-entrance.jpg",
      description:
        "■実施月：2024年7月〜運用\n■実施内容：月10投稿代行&インフルエンサーキャスティング\n・昨年7月から右肩上がりで売上が向上、現在は売上150%UP",
      url: "https://www.instagram.com/dashihayashi/",
      tag: "SNS運用代行",
    },
  ]

  return (
    <section id="sns-results" className="py-16 md:py-24 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#990001] mb-4">SNS運用実績</h2>
          <p className="text-lg text-gray-600">私たちのSNS運用代行サービスを提供した事例</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {snsResults.map((result, index) => (
            <div
              key={index}
              className="bg-[#fffefe] rounded-md shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link href={result.url || "#"} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <div className="absolute top-2 right-2 bg-[#990001] text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                    {result.tag}
                  </div>
                  <Image
                    src={result.image || "/placeholder.svg"}
                    alt={result.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#990001] mb-2">{result.name}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{result.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-gray-600">
          <p>記載店舗様以外にもありがたいことに数十件の飲食店様の運用を支援させていただいております</p>
        </div>
      </div>
    </section>
  )
}
