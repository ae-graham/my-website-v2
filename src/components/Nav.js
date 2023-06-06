import '../css/Nav.css'

const Nav = () => {
  
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
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
      <a href='/#'>Skills</a>
      <a href='/#'>Experience</a>
      <a href='/#'>Work</a>
      <a href='/#'>Contact</a>
    </nav>
  )
}

export default Nav;