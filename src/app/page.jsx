'use client';

import Navbar from '@/components/layout/Navbar';
import Hero from '@/features/hero/Hero';
import CaseStudies from '@/features/case-studies/CaseStudies';
import Services from '@/features/services/Services';
import Team from '@/features/team/Team';
import Metrics from '@/features/metrics/Metrics';
import CTA from '@/features/cta/CTA';
import Reviews from '@/features/reviews/Reviews';
import FAQ from '@/features/faq/FAQ';
import Contact from '@/features/contact/Contact';
import Footer from '@/components/layout/Footer';
import Footer2 from '@/components/layout/Footer2';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 selection:bg-brndo-red/30 selection:text-brndo-red transition-colors duration-300">
      <Navbar />
      {/* Main Content Sections */}
      <Hero />
      <CaseStudies />
      <Services />
      <Team />
      {/* <Metrics /> */}
      {/* <CTA /> */}
      <Reviews />
      <FAQ />
      <Contact />
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
}
