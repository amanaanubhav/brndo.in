import { aboutUsData } from '@/data/aboutUs';
import { faqsData } from '@/data/faqs';
import AboutHero from '@/features/about-us/AboutHero';
import AboutStats from '@/features/about-us/AboutStats';
import AboutServices from '@/features/about-us/AboutServices';
import AboutTeamMission from '@/features/about-us/AboutTeamMission';
import FAQ from '@/features/faq/FAQ';
import LogoScroll from '@/components/ui/LogoScroll';

export const metadata = {
  title: 'About Us - BRNDO',
  description: 'Learn more about BRNDO - Your Partner in Digital Design & Development',
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <AboutHero data={aboutUsData.hero} />
      
      <div className="pb-16 bg-white dark:bg-gray-950">
        <LogoScroll />
      </div>

      <AboutStats data={aboutUsData.stats} />
      
      <AboutServices data={aboutUsData.services} />
      
      <AboutTeamMission data={aboutUsData} />
      
      <FAQ data={faqsData.aboutUs} showCta={false} />

      {/* Footer Gradient Text Block */}
      <section className="py-24 md:py-40 bg-white dark:bg-gray-950 overflow-hidden flex justify-center items-center px-4">
        <h2 
          className="font-pangram font-extrabold text-[40px] md:text-[80px] lg:text-[150px] leading-[1.0] text-center tracking-[-0.02em] bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(180deg, #C7C7C7 -106.72%, rgba(97, 97, 97, 0) 71.43%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {aboutUsData.footer.text.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>
      </section>

    </main>
  );
}
