import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'


const Contact = () => {
  return(
    <div id='contact-container'>
      <h1>let's connect!</h1>
      <section id='contact-section'>
        <p>If you have any questions, business inquiries or just wish to get in touch...</p>
        <button type="button" className="hvr-sweep-to-right hello">say hello!</button>
        <p>You can also connect with me through the following platforms</p>
        <div className='socials'>
          <a href="https://www.linkedin.com/in/alexander-graham93/" target="_blank"  rel="noreferrer">
            <img src={github} alt='github logo' />
          </a>
          <a href="https://github.com/ae-graham" target="_blank" rel="noreferrer">
            <img src={linkedin} alt='linkedin logo' />
          </a>
      </div>
      </section>
    </div>
  )
}

export default Contact;