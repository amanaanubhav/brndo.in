import Navbar from '@/components/layout/Navbar';
import Footer2 from '@/components/layout/Footer2';
import SMMAHero from '@/features/smma/Hero';
import SMMAResults from '@/features/smma/Results';
import CaseStudies from '@/features/case-studies/CaseStudies';
import SMMAPricing from '@/features/smma/Pricing';
import FAQ from '@/features/faq/FAQ';
import { caseStudiesData } from '@/data/caseStudies';
import { faqsData } from '@/data/faqs';

export const metadata = {
  title: 'Social Media Marketing | BRNDO',
  description: 'Empowering Your Success with Digital Expertise.',
};

export default function SMMAPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 selection:bg-brndo-red/30 selection:text-brndo-red transition-colors duration-300 overflow-hidden w-full">
      <Navbar />
      <SMMAHero />
      <SMMAResults />
      <CaseStudies data={caseStudiesData.smma} />
      <SMMAPricing />
      <FAQ data={faqsData.smma} />
      <Footer2 />
    </div>
  );
}
