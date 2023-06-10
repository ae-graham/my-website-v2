import '../css/Nav.css'

const Nav = () => {
  
  const handleClick = (anchor) => () => {
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
    <nav>
      <a href='#about' onClick={handleClick('about')}>about</a>
      {/*<a href='/#'>Experience</a>*/}
      <a href='/#projects' onClick={handleClick('projects')}>projects</a>
      <a href='/#contact' onClick={handleClick('contact')}>contact</a>
      <a href='/' target="_blank"  rel="noreferrer" >resumé</a>
    </nav>
  )
}

export default Nav;