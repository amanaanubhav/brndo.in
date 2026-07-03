import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Metrics from './components/Metrics';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brndo-red/30 selection:text-brndo-red">
      <Navbar />
      {/* Temporarily hidden sections */}
      {/* <Hero /> */}
      {/* <Services /> */}
      {/* <Metrics /> */}
      {/* <CTA /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
