import 'animate.css';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ae_logo from '../src/assets/ae-logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollButton from './components/ScrollButton';


function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [])

  return (
    <div className="app-container">
      <div className='main-container'>
        <header className="header-container" data-aos='slide-down'>
          <img className='ae-logo' src={ae_logo} alt='main logo of the website' width={82} height={82} />
          <Nav />
        </header>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <ScrollButton />
      </div>
      <Footer />
    </div>
  );
}

export default App;
