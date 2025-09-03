import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ECommerce from './components/ECommerce';



function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ minWidth: 0 }}>
      <Navbar />
      <main className="flex-1" style={{ paddingTop: 64, minWidth: 0 }}>
        <Hero />
        <div className="container">
          <Projects />
          <ECommerce />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;
