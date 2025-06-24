import Hero from "@/components/Hero"
import Problems from "@/components/Problems"
import WhyUs from "@/components/WhyUs"
// TeamSection は一旦トップから削除（他のページに移動するか検討）

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <WhyUs />
      {/* <TeamSection /> */}
    </>
  )
}
