import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { Services } from "@/components/landing/services";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { FiscalInfo } from "@/components/landing/fiscal-info";
import { Differentials } from "@/components/landing/differentials";
import { TargetAudience } from "@/components/landing/target-audience";
import { Deliverables } from "@/components/landing/deliverables";
import { Support30Days } from "@/components/landing/support-30-days";
import { FAQ } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <HowItWorks />
      <Pricing />
      <FiscalInfo />
      <Differentials />
      <TargetAudience />
      <Deliverables />
      <Support30Days />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
