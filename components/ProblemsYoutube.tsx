import { Users, DollarSign, FileText } from "lucide-react" // アイコンを更新

export default function ProblemsYoutube() {
  const problems = [
    {
      icon: <FileText className="w-12 h-12 text-[#990001]" />,
      title: "求人票では理念が伝わらず、ミスマッチ採用が多い",
      description: "文字情報だけでは企業の文化や経営者の人柄が伝わりにくく、採用後のギャップが生じやすい。",
    },
    {
      icon: <Users className="w-12 h-12 text-[#990001]" />,
      title: "社長の想いが中間層に伝わらず組織のベクトルが揃わない",
      description: "経営者のビジョンや理念が社員全体に浸透せず、組織の一体感が欠けてしまう。",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#990001]" />,
      title: "SNSが時代の主戦場なのは分かるが、手が回らない",
      description: "YouTubeの重要性は理解しているものの、企画・撮影・編集・運用にリソースを割けない。",
    },
  ]

  return (
    <section id="problems-youtube" className="py-16 md:py-24 bg-[#fffefe]">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">こんなお悩みありませんか？</h2>
          <p className="text-lg text-gray-600">多くの経営者様が抱える共通の課題</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-6">{problem.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 h-14 flex items-center justify-center">
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
