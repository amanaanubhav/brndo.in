import PrivacyHero from '@/features/privacy-policy/PrivacyHero';
import PrivacyContent from '@/features/privacy-policy/PrivacyContent';
import Navbar from '@/components/layout/Navbar';
import Footer2 from '@/components/layout/Footer2';

export const metadata = {
  title: 'Privacy Policy - BRNDO',
  description: 'Learn about how BRNDO collects, uses, and safeguards your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-black font-pangram selection:bg-brndo-red selection:text-white">
      <Navbar />
      <PrivacyHero />
      <PrivacyContent />
      <Footer2 />
    </main>
  );
}
