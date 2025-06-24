"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function Contact() {
  const handleContactClick = () => {
    const message = "お問い合わせページから連絡しました。"
    const lineUrl = `https://page.line.me/kwg3508l?text=${encodeURIComponent(message)}`
    window.open(lineUrl, "_blank")
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#990001] mb-4">公式LINEから気軽にお問い合わせ！</h2>
          <p className="text-lg text-gray-600">ご相談・お見積もりは無料です。まずはお気軽にご連絡ください。</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#fffefe] p-8 md:p-12 rounded-lg shadow-lg border border-[#dadbda] text-center max-w-md w-full">
            <div className="flex justify-center mb-8">
              <MessageCircle className="w-20 h-20 text-[#990001]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">LINEでのお問い合わせ</h3>
            <p className="text-gray-600 mb-8">
              以下の「友だち追加」ボタンをタップして、お気軽にご連絡ください。
              <br />
              専門スタッフが迅速に対応いたします。
            </p>
            <Button
              size="lg"
              className="w-full bg-[#00B900] hover:bg-[#00a300] text-white py-4 rounded-md font-bold transition-colors flex items-center justify-center gap-2 text-lg"
              onClick={handleContactClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.229 13.115c-.679.369-1.357.738-2.036 1.107-.429.229-.857.448-1.286.667-.5.25-.75.021-.689-.531.05-.448.161-.896.211-1.344.06-.551-.12-.811-.68-.811-.679 0-1.357 0-2.036 0-.541 0-.781.25-.781.781 0 .896 0 1.792 0 2.688 0 .5.24.75.74.75.896 0 1.792 0 2.688 0 .5 0 .75-.25.75-.75 0-.429.021-.857.021-1.286.01-.5.25-.74.75-.74.5 0 1 0 1.5 0 .5 0 .75.25.75.75 0 .896 0 1.792 0 2.688 0 .5.25.75.75.75.896 0 1.792 0 2.688 0 .5 0 .75-.25.75-.75v-2.688c0-.5-.25-.75-.75-.75-.896 0-1.792 0-2.688 0-.5 0-.75.25-.75.75 0 .429-.021.857-.021 1.286 0 .5-.25.74-.75.74-.5 0-1 0-1.5 0-.5 0-.75-.25-.75-.75v-1.344c.429-.229.857-.448 1.286-.667.679-.369 1.357-.738 2.036-1.107.5-.27.71-.689.62-1.256-.12-.719-.5-1.357-1.01-1.867-.5-.5-1.138-.879-1.817-1.088-.781-.24-1.6-.27-2.4-.1-1.01.219-1.92.7-2.688 1.4-1.01.9-1.6,2.1-1.6,3.4 0,1.5.8,2.8,2,3.6.6.4,1.3.6,2,.7.6.1,1.2.1,1.8,0,.7-.1,1.3-.4,1.9-.8.5-.3.7-.8.5-1.3zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" />
              </svg>
              友だち追加して相談する
            </Button>
            <div className="mt-8 p-6 bg-[#990001] text-white rounded-md">
              <h4 className="font-bold text-lg mb-2">初回相談無料！</h4>
              <p className="text-sm">
                現在の課題をヒアリングし、最適なプランをご提案いたします。 お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
