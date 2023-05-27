import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Footer = () => {
  return(
    <div className='footer-container'>
      <footer className='footer'>
      <div className='socials'>
        <a href="https://www.linkedin.com/in/alexander-graham93/" target="_blank"  rel="noreferrer">
          <img src={github} alt='github logo' />
        </a>
        <a href="https://github.com/ae-graham" target="_blank" rel="noreferrer">
          <img src={linkedin} alt='linkedin logo' />
        </a>
      </div>
      <span>Developed by &#169;2023 Alex Graham</span>
      </footer>
    </div>
  )
}

export default Footer;