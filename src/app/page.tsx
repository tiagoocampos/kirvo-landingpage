import { ContactSection } from "@/components/landing/ContactSection"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { Footer } from "@/components/landing/Footer"
import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { Pricing } from "@/components/landing/Pricing"
import { ProblemSection } from "@/components/landing/ProblemSection"
import { Segments } from "@/components/landing/Segments"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorks />
        <Segments />
        <Pricing />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
