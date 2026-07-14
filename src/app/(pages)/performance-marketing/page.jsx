import Navbar from '@/components/layout/Navbar';
import Footer2 from '@/components/layout/Footer2';
import PerformanceHero from '@/features/performance-marketing/Hero';
import Results from '@/features/performance-marketing/Results';
import CaseStudies from '@/features/case-studies/CaseStudies';
import FAQ from '@/features/faq/FAQ';
import { caseStudiesData } from '@/data/caseStudies';
import { faqsData } from '@/data/faqs';

export const metadata = {
  title: 'Performance Marketing | BRNDO',
  description: 'Accelerate Growth. Maximize Your Bottom Line.',
};

export default function PerformanceMarketingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 selection:bg-brndo-red/30 selection:text-brndo-red transition-colors duration-300">
      <Navbar />
      <PerformanceHero />
      <Results />
      <CaseStudies data={caseStudiesData.performanceMarketing} />
      <FAQ data={faqsData.performanceMarketing} />
      <Footer2 />
    </div>
  );
}
