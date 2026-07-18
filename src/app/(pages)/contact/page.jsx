import Navbar from '@/components/layout/Navbar';
import Contact from '@/features/contact/Contact';
import Footer2 from '@/components/layout/Footer2';

export const metadata = {
  title: 'Contact Us | BRNDO',
  description: 'Get in touch with BRNDO to scale your brand.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24">
        <Contact />
      </div>
      <Footer2 />
    </div>
  );
}
