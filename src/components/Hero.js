import hero from '../assets/hero.png'
import hi from '../assets/hi.png'

const Hero = () => {
  return(
    <div className='hero-container'>
      <div className='hero'>
        <h2>hi there, I'm Alex</h2>
        <img src={hi} alt='waving hand' />
        <h1>web creator.</h1>
        <p>I aim to build creative and efficient websites that become the gateway to new worlds and experiences.</p>
      </div>
      <img src={hero} alt='sitting on top of rock'></img>
    </div>
  )
}

export default Hero;