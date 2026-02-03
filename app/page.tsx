import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Strengths } from "@/components/strengths"
import { Services } from "@/components/services"
import { Philosophy } from "@/components/philosophy"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Strengths />
        <Services />
        <Philosophy />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
