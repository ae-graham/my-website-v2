import '../css/Nav.css'
import cv from '../assets/alex_graham.pdf';

const Nav = () => {
  
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    const header = document.querySelector('.header-container');
    header.removeAttribute('data-aos'); //removes the data-aos attribute to the element which causes issues with the overlay of the navbar
  }
    
  function closeNav() {
    if (window.innerWidth < 830) {
        document.getElementById("myNav").style.width = "0%";
    } else {
        document.getElementById("myNav").style.width = "auto";
    }
  } 

  window.addEventListener("resize", () => {
    if (window.innerWidth > 829) {
        document.getElementById("myNav").style.width = "auto";
    } else {
        document.getElementById("myNav").style.width = "0%"
    }
  });

  const handleClick = (anchor) => () => {
    closeNav();
    const id = `${anchor}-container`;
    const element = document.getElementById(id);
    if(element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return(
    <>
      <nav id="myNav" className="overlay">
        <span className="closebtn" onClick={closeNav}>&times;</span>
        <ul className='main-nav'>
          <li><a href='#about' onClick={handleClick('about')}>about</a></li>
          <li><a href='/#projects' onClick={handleClick('projects')}>projects</a></li>
          <li><a href='/#contact' onClick={handleClick('contact')}>contact</a></li>
          <li><a href={cv} target="_blank"  rel="noreferrer">resumé</a></li>
        </ul>
      </nav>
      <span className="lines" onClick={openNav}>&#9776;</span>
    </>
  )
}

export default Nav;