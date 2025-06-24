"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function FloatingContactButton() {
  const handleFabClick = () => {
    const message = "ウェブサイト右下のボタンから無料相談を希望します。"
    const lineUrl = `https://page.line.me/kwg3508l?text=${encodeURIComponent(message)}`
    window.open(lineUrl, "_blank")
  }

  return (
    <Button
      onClick={handleFabClick}
      className="fixed bottom-6 right-6 z-50 h-14 rounded-full bg-[#990001] px-6 shadow-lg hover:bg-[#b70002] hover:scale-105 transition-all duration-200 ease-in-out flex items-center justify-center gap-3 group"
      aria-label="LINEで無料相談"
    >
      <MessageCircle className="h-6 w-6 text-white transition-transform duration-200 ease-in-out group-hover:rotate-12" />
      <span className="text-white font-bold text-base">LINEで無料相談</span>
    </Button>
  )
}
