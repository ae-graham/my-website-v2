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
      <a href='#about' onClick={handleClick('about')}>About</a>
      <a href='/#'>Experience</a>
      <a href='/#projects' onClick={handleClick('projects')}>Projects</a>
      <a href='/#'>Contact</a>
    </nav>
  )
}

export default Nav;