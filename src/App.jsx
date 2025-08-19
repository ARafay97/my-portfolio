import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <div style={{ flex: 1 }}>
  <Hero />
</div>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
} 




export default App;
