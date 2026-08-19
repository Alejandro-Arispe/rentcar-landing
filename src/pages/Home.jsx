import Seo from '../components/common/Seo'
import Hero from '../components/hero/Hero'
import VehicleSection from '../components/vehicles/VehicleSection'
import BrandsSection from '../components/brands/BrandsSection'
import ServicesSection from '../components/services/ServicesSection'
import WhyUsSection from '../components/why-us/WhyUsSection'
import HowItWorksSection from '../components/how-it-works/HowItWorksSection'
import FaqSection from '../components/faq/FaqSection'
import ContactSection from '../components/contact/ContactSection'

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <VehicleSection />
      <BrandsSection />
      <ServicesSection />
      <WhyUsSection />
      <HowItWorksSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
