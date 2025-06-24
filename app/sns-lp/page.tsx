import HeroSns from "@/components/HeroSns"
import Problems from "@/components/Problems"
import WhyUs from "@/components/WhyUs"
import SnsResults from "@/components/SnsResults" // SnsResultsをインポート
import SnsPricing from "@/components/SnsPricing"
import OperationFlow from "@/components/OperationFlow"
import Faq from "@/components/Faq"
import Contact from "@/components/Contact"

export default function SnsLpPage() {
  return (
    <>
      <HeroSns />
      <Problems />
      <WhyUs />
      <SnsResults /> {/* SnsResultsを使用 */}
      <SnsPricing />
      <OperationFlow />
      <Faq />
      <Contact />
    </>
  )
}
