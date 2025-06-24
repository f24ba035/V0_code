import Image from "next/image"
import Link from "next/link"

export default function YoutubeFilmingEditingResults() {
  const filmingEditingResults = [
    {
      name: "ののチャンネル様 (Jリーグ公式チャンネル)",
      image: "/images/nono-channel.jpeg",
      description:
        "■概要：チェアマン(代表)がゲストを呼んで、Jリーグについて語ったり視聴者の質問に答える動画コンテンツ。",
      url: "https://www.youtube.com/watch?v=p6yiR54arP4&list=PLkPh_QuTENJLQlLEe64EO6bazELJatwle",
      tag: "撮影・編集を担当",
    },
    {
      name: "フットボール委員会アフタートーク様 (Jリーグ公式チャンネル)",
      image: "/images/football-committee.jpeg",
      description: "■概要：リーグフットボール委員会という月1の会議のアフタートーク（対談）",
      url: "https://www.youtube.com/watch?v=P7-7l2Q-_wU&list=PLkPh_QuTENJIhfW28BJ6mMd1J4LSxFCCy",
      tag: "撮影・編集を担当",
    },
    {
      name: "BreakingDown / ブレイキングダウン様",
      image: "/images/breakingdown.jpeg",
      description:
        "■チャンネル概要：素人をスターに変える“格闘×エンタメ”の化け物コンテンツ。YouTube視聴数1億回超、アマチュア大会でPPV売上日本一の快挙を達成したチャンネル。",
      url: "https://www.youtube.com/@BreakingDown_official",
      tag: "撮影・編集を担当",
    },
    {
      name: "REAL VALUE /リアルバリュー様",
      image: "/images/real-value.jpeg",
      description:
        "■チャンネル概要：若者のリアルな金銭感覚と社会の経済課題をつなぐ“等身大×経済”の新感覚ドキュメント番組。Z世代の等身大の悩みを通じて、経済の本質に迫る切り口が話題に。SNSでも共感を集め、再生数は累計1000万回超を記録したチャンネル。",
      url: "https://www.youtube.com/@takaponjp/playlists",
      tag: "SNS撮影・編集を担当",
    },
  ]

  return (
    <section id="youtube-filming-editing-results" className="py-16 md:py-24 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#990001] mb-4">撮影・編集実績</h2>
          <p className="text-lg text-gray-600">私たちのYouTube撮影・編集サービスを提供した事例</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {filmingEditingResults.map((result, index) => (
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
