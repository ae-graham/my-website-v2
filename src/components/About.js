import portrait from '../assets/portrait.png';

const handleHover = () => {
  const outline = document.getElementById('outline');       //I use this handleHover function to add style to the 'outline div' when hovering over the image.
  const photo = document.getElementById('photo');
  photo.addEventListener('mouseover', () => {
    outline.style.translate = '-10px 10px';
  })
  photo.addEventListener('mouseleave', () => {
    outline.style.translate = '0px 0px';
  })
  
}



const About = () => {
  return(
    <div className='about-container'>
      <section id='about-section'>
        <div className='about-item'>
          <img id='photo' src={portrait} alt='portrait of Alex' onMouseEnter={handleHover} onMouseLeave={handleHover}/>
          <div id='outline'></div>
        </div>
        <div className='about-item'>
          <h1>what I've done</h1>
          <p>Strong background in building and commercializing digital solutions for engineering applications.</p>
          <p>Graduated as an Electronics Engineer and spent the last 5 years working in numerous industries such as mining, electronics manufacturing and retail. My passion for creating and building UIs in these sectors, led me to shift my focus on to web-development in 2022.</p> 
          <h1>how others see me</h1>
          <p>Organised, committed and reliable professional. Great team player, able to work under pressure, determined, and good at multitasking.</p>
        </div>
        <div className='about-item'>
          <h1>what I like doing</h1>
          <p>When I'm not working I tend to travel a lot. I've visited approximately 50 countries all around the world, and lived in several of them, including Spain, UK, Denmark and now Australia.</p>
          <p>I like to spend my free time working out, looking into blockchain technology & cryptocurrencies, and occassionally hit the slopes during winter as I'm an advanced snowboarder.</p>
        </div>
      </section>
    </div>
  )
}

export default About;

/*
  <h1>About Me</h1>
  <p>Hey! my name is Alex Graham, I have a strong background in building and commercializing digital solutions for engineering applications.</p>
  <p>I graduated as an Electronics Engineer and have spent the last 5 years working in numerous industries such as mining, electronics manufacturing and retail. My passion for creating and building UIs in these sectors, led me to shift my focus on to web-development in 2022.</p>
  <p>I'm an organised, committed and reliable professional. Great team player, able to work under pressure, determined, and good at multitasking. When I'm not working I tend to travel a lot. I've visited approximately 50 countries all around the world, and lived in several of them, including Spain, UK, Denmark and now Australia.</p>
  <p>I like to spend my free time working out, looking into blockchain technology & cryptocurrencies, and occassionally hit the slopes during winter as I'm an advanced snowboarder.</p>
*/