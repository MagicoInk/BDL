import { SiteHeader } from './components/SiteHeader';
import { HeroFourthWall } from './components/HeroFourthWall';
import { IntroPhilosophy } from './components/IntroPhilosophy';
import { FeaturedStudioStrip } from './components/FeaturedStudioStrip';
import { VideoShowcase } from './components/VideoShowcase';
import { ServicesNumbered } from './components/ServicesNumbered';
import { SignatureInvestment } from './components/SignatureInvestment';
import { WhyChooseSection } from './components/WhyChooseSection';
import { GuaranteesStrip } from './components/GuaranteesStrip';
import { BreedsPortfolio } from './components/BreedsPortfolio';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { PremiumFooter } from './components/PremiumFooter';
import { FloatingSocial } from './components/FloatingSocial';

export default function App() {
  return (
    <div className="min-h-screen bg-fw-bg text-fw-white">
      <SiteHeader />
      <HeroFourthWall />
      <IntroPhilosophy />
      <FeaturedStudioStrip />
      <VideoShowcase />
      <ServicesNumbered />
      <SignatureInvestment />
      <WhyChooseSection />
      <GuaranteesStrip />
      <BreedsPortfolio />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <PremiumFooter />
      <FloatingSocial />
    </div>
  );
}
