import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
//import Experience from './components/Experience';

function App() {
  return (
    <div className="app-container">
      <div className='main-container'>
        <header className="header-container">
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
