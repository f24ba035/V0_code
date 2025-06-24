import Link from "next/link"
// Instagram, Twitter, Youtube は不要になったため削除

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {" "}
          {/* md:grid-cols-3 から md:grid-cols-2 に変更 */}
          <div>
            <h3 className="text-xl font-bold mb-4">会社情報</h3>
            <div className="space-y-2 text-gray-300">
              <p>株式会社Dazy</p>
              <p>代表取締役: 林龍男</p>
              <p>〒101-0047</p>
              <p>東京都千代田区内神田1-11-10</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">サービス</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services-pricing" className="hover:text-white transition-colors">
                  SNS運用代行
                </Link>
              </li>
              <li>
                <Link href="/services-pricing" className="hover:text-white transition-colors">
                  インフルエンサーキャスティング
                </Link>
              </li>
              <li>
                <Link href="/services-pricing" className="hover:text-white transition-colors">
                  映像制作
                </Link>
              </li>
              <li>
                <Link href="/services-pricing" className="hover:text-white transition-colors">
                  YouTube運営代行
                </Link>
              </li>
            </ul>
          </div>
          {/* 「フォローする」セクション全体を削除 */}
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 株式会社Dazy. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
