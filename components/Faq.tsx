"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "Q. お支払い方法は何がありますか？",
      answer:
        "A. 銀行振り込みのみとなっております。請求書を毎月お送りさせていただきます。月末締め、翌月末払いとなります。",
    },
    {
      question: "Q. 運用までにかかる日数はどの程度ですか？",
      answer:
        "A. 1ヶ月ほどで対応いたします。初期構築に1ヶ月ほどお時間いただきます。ご希望に合わせて柔軟に対応できればと考えております。",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#fffefe]">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#990001] mb-4">Q&A</h2>
          <p className="text-lg text-gray-600">よくあるご質問</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* 以下のdivを削除 */}
          {/* <div className="text-center mt-12 text-gray-600">
            <p>その他、ご不明点や質問事項は担当者が対応いたします。</p>
            <p>何かありましたら、お気軽にお申し付けください！</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}
