import { aboutUsData } from '@/data/aboutUs';
import { faqsData } from '@/data/faqs';
import AboutHero from '@/features/about-us/AboutHero';
import AboutStats from '@/features/about-us/AboutStats';
import AboutServices from '@/features/about-us/AboutServices';
import AboutTeamMission from '@/features/about-us/AboutTeamMission';
import Team from '@/features/team/Team';
import FAQ from '@/features/faq/FAQ';
import LogoScroll from '@/components/ui/LogoScroll';
import Navbar from '@/components/layout/Navbar';
import Footer2 from '@/components/layout/Footer2';
import GradientBox from '@/components/ui/GradientBox';

export const metadata = {
  title: 'About Us - BRNDO',
  description: 'Learn more about BRNDO - Your Partner in Digital Design & Development',
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 selection:bg-brndo-red/30 selection:text-brndo-red transition-colors duration-300">
      <Navbar />
      
      {/* Main Content Sections */}
      <AboutHero data={aboutUsData.hero} />

      <AboutStats data={aboutUsData.stats} />
      
      <AboutServices data={aboutUsData.services} />
      
      <AboutTeamMission data={aboutUsData} />
      
      <Team />
      
      <FAQ data={faqsData.aboutUs} showCta={false} />

      {/* Placeholder Gradient Horizontal Block */}
      <section className="py-24 px-6 md:px-12 w-full max-w-[1920px] mx-auto bg-white dark:bg-gray-950 transition-colors duration-300">
        <GradientBox className="w-full h-[400px] md:h-[600px] flex items-center justify-center rounded-[30px] md:rounded-[50px] shadow-2xl" />
      </section>

      <Footer2 />
    </div>
  );
}
