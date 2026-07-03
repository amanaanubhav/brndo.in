import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Metrics from './components/Metrics';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 selection:bg-brndo-red/30 selection:text-brndo-red transition-colors duration-300">
        <Navbar />
        {/* Temporarily hidden sections */}
        {/* <Hero /> */}
        {/* <Services /> */}
        {/* <Metrics /> */}
        {/* <CTA /> */}
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
