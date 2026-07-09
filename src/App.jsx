import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Team from './components/Team';
import Metrics from './components/Metrics';
import CTA from './components/CTA';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
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
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
