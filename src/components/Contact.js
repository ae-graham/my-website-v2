import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'


const Contact = () => {
  return(
    <div id='contact-container'>
      <h1 data-aos='fade-up'>let's connect!</h1>
      <section id='contact-section' data-aos='fade-up'>
        <p>If you have any questions, business inquiries or just wish to get in touch...</p>
        <button type="button" style={{border: 'none', backgroundColor: 'transparent'}}>
          <a href="mailto:ae.graham93@gmail.com?subject=Business%20Opportunity" className={window.innerWidth >= 830 ? 'hvr-sweep-to-right hello' : 'hello'}>say hello!</a>
        </button>
        <p>You can also connect with me through the following platforms</p>
        <div className='socials'>
          <a href="https://github.com/ae-graham" target="_blank"  rel="noreferrer">
            <img className='hvr-float' src={github} alt='github logo' />
          </a>
          <a href="https://www.linkedin.com/in/ae-graham/" target="_blank" rel="noreferrer">
            <img className='hvr-float' src={linkedin} alt='linkedin logo' />
          </a>
      </div>
      </section>
    </div>
  )
}

export default Contact;