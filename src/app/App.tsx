import { SiteHeader } from './components/SiteHeader';
import { HeroFourthWall } from './components/HeroFourthWall';
import { EjemplaresDisponibles } from './components/EjemplaresDisponibles';
import { GuaranteesStrip } from './components/GuaranteesStrip';
import { IntroPhilosophy } from './components/IntroPhilosophy';
import { WhyChooseSection } from './components/WhyChooseSection';
import { SignatureInvestment } from './components/SignatureInvestment';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { PremiumFooter } from './components/PremiumFooter';
import { FloatingSocial } from './components/FloatingSocial';

export default function App() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-fw-bg text-fw-white">
      <SiteHeader />
      <HeroFourthWall />
      <EjemplaresDisponibles />
      <GuaranteesStrip />
      <IntroPhilosophy />
      <WhyChooseSection />
      <SignatureInvestment />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <PremiumFooter />
      <FloatingSocial />
    </div>
  );
}
