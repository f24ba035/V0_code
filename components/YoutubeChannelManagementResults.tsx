import Image from "next/image"
import Link from "next/link"

export default function YoutubeChannelManagementResults() {
  const channelManagementResults = [
    {
      name: "株式会社Dazy 林龍男さん",
      image: "/images/hayatatsu-daruma-ch-profile.jpg",
      description:
        "■実施月：2021年〜\n■実施内容：YouTube月4投稿&ショート動画月20投稿（YouTube,Instagram、TikTok）\n・飲食店経営者向けのニッチジャンルでYouTube登録者5000人\n・SNSから採用やサービスの問い合わせ多数",
      url: "https://www.youtube.com/@daruma7342/videos",
      tag: "自社運用",
    },
    {
      name: "Mostfun 大崎氏チャンネル様",
      image: "/images/mostfun-osaki-ch-profile.jpg",
      description:
        "■実施月：2025年5月〜\n■実施内容：YouTube月4投稿&ショート動画月20投稿（YouTube,Instagram、TikTok）\n・5年で年商15億を達成した飲食ベンチャーの裏側ノウハウ\n・飲食人材の育成につながるカルチャー醸成、仕組みづくりが強み",
      url: "https://www.youtube.com/@mostfun_osaki",
      tag: "自社運用",
    },
  ]

  return (
    <section id="youtube-channel-management-results" className="py-16 md:py-24 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#990001] mb-4">チャンネル運用実績</h2>
          <p className="text-lg text-gray-600">私たちのYouTubeチャンネル運用サービスを提供した事例</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {channelManagementResults.map((result, index) => (
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
      </div>
    </section>
  )
}
