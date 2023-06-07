import 'animate.css';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
//import Experience from './components/Experience';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


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
          <h1>Logo</h1>
          <Nav />
        </header>
        <Hero />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
