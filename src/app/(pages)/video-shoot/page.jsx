import Navbar from '@/components/layout/Navbar';
import Footer2 from '@/components/layout/Footer2';
import Hero from '@/features/video-shoot/Hero';
import Reels from '@/features/video-shoot/Reels';
import MediaPlayback from '@/features/video-shoot/MediaPlayback';
import WorkGrid from '@/features/video-shoot/WorkGrid';
import Testimonial from '@/features/video-shoot/Testimonial';
import EnterpriseReliability from '@/features/video-shoot/EnterpriseReliability';
import HowItWorks from '@/features/video-shoot/HowItWorks';
import FAQ from '@/features/faq/FAQ';
import { faqsData } from '@/data/faqs';

export const metadata = {
  title: 'Video Production | BRNDO',
  description: 'Professional Video Production Services for Businesses',
};

export default function VideoShootPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 selection:bg-brndo-red/30 selection:text-brndo-red transition-colors duration-300 overflow-hidden w-full">
      <Navbar />
      
      <Hero />
      <Reels />
      <MediaPlayback />
      <WorkGrid />
      <Testimonial />
      <EnterpriseReliability />
      <HowItWorks />

      <div className="min-h-[100dvh] flex flex-col justify-center">
        <FAQ data={faqsData.videoShoot} showCta={false} />
      </div>
      
      <Footer2 />
    </div>
  );
}
