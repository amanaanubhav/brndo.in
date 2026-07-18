import Navbar from '@/components/layout/Navbar';
import Footer2 from '@/components/layout/Footer2';
import CareersHero from '@/features/careers/Hero';
import OpenPositions from '@/features/careers/OpenPositions';
import ApplicationJourney from '@/features/careers/ApplicationJourney';

export const metadata = {
  title: 'Careers | BRNDO',
  description: 'Join the BRNDO team. Find your place and discover your next big career move.',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 selection:bg-brndo-red/30 selection:text-brndo-red transition-colors duration-300">
      <Navbar />
      <CareersHero />
      <OpenPositions />
      <ApplicationJourney />
      <Footer2 />
    </div>
  );
}
