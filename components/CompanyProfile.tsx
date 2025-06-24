"use client"

export default function CompanyProfile() {
  const companyInfo = [
    { label: "会社名", value: "株式会社Dazy" },
    { label: "代表者", value: "代表取締役 林龍男" },
    {
      label: "所在地",
      value: "〒101-0047 東京都千代田区内神田1-11-10",
    },
    {
      label: "設立",
      value: "20XX年X月X日",
    },
    { label: "資本金", value: "X,XXX,XXX円" },
    {
      label: "事業内容",
      value: (
        <ul className="space-y-1">
          <li>・飲食店経営 (現在4店舗)</li>
          <li>・飲食店SNS運用</li>
          <li>・インフルエンサー紹介</li>
          <li>・PR動画制作</li>
          <li>・YouTubeチャンネル運営</li>
        </ul>
      ),
    },
  ]

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#990001] mb-4">会社概要</h1>
        </div>

        <div className="space-y-6">
          {companyInfo.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row border-b border-gray-200 py-6">
              <dt className="w-full md:w-48 font-semibold text-gray-700 text-base mb-2 md:mb-0 flex-shrink-0">
                {item.label}
              </dt>
              <dd className="w-full text-gray-800 text-base leading-relaxed">
                {typeof item.value === "string" ? <p>{item.value}</p> : item.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
