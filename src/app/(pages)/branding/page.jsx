import Navbar from '@/components/layout/Navbar';
import Footer2 from '@/components/layout/Footer2';
import BrandingHero from '@/features/branding/Hero';
import VisionSection from '@/features/branding/VisionSection';
import WorkSection from '@/features/branding/WorkSection';
import FAQ from '@/features/faq/FAQ';
import { faqsData } from '@/data/faqs';
import GradientBox from '@/components/ui/GradientBox';

export const metadata = {
  title: 'Branding | BRNDO',
  description: 'Your Next "Big Brand" Starts Here.',
};

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 selection:bg-brndo-red/30 selection:text-brndo-red transition-colors duration-300 overflow-hidden w-full">
      <Navbar />
      
      <BrandingHero />
      
      <VisionSection />

      <WorkSection />

      <div className="min-h-[100dvh] flex flex-col justify-center">
        <FAQ data={faqsData.branding} showCta={false} />
      </div>

      <div className="min-h-[100dvh] flex items-center justify-center px-4 md:px-12 py-12">
        <GradientBox className="w-full max-w-7xl h-[70vh] flex items-center justify-center border border-brndo-red/20 shadow-2xl">
          <span className="font-pangram text-white/50 text-xl font-light tracking-widest uppercase">Content Placeholder</span>
        </GradientBox>
      </div>
      
      <Footer2 />
    </div>
  );
}
