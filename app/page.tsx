import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import SocialProof from '@/components/sections/SocialProof'
import Pricing from '@/components/sections/Pricing'
import Faq from '@/components/sections/Faq'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <SocialProof />
        <Pricing />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
