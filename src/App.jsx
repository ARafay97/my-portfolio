import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import ECommerce from './components/ECommerce';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Certifications />
        <Achievements />
        <ECommerce />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
