import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Pricing } from "@/components/landing/pricing"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  )
}
