"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const navItems = [
    { href: "/", label: "トップ" },
    { href: "/sns-lp", label: "SNS運用代行" },
    { href: "/youtube-lp", label: "YouTube運用代行" },
    // { href: "/results", label: "実績" }, // この行を削除
    { href: "/company", label: "会社概要" },
    { href: "/contact", label: "お問い合わせ" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-end">
        {/* PC用ナビゲーション */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 ease-in-out",
                "hover:text-[#990001]",
                pathname === item.href
                  ? "text-[#990001] border-b-2 border-[#990001]"
                  : "text-gray-600 hover:text-gray-900",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* モバイル用ハンバーガーメニュー */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="メニューを開く">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] p-6">
            <nav className="flex flex-col gap-4 pt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors hover:text-[#990001]",
                    pathname === item.href ? "text-[#990001]" : "text-gray-700",
                  )}
                  onClick={() => setIsSheetOpen(false)} // クリックでメニューを閉じる
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
