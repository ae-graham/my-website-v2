import Card from "./Card";
import lemon from '../assets/little-lemon.png';
import portfolio from '../assets/portfolio1.png';
import scoreboard from '../assets/scoreboard.png';
import conf from '../assets/conf.png';
import arrow from '../assets/arrow.png';
//import square from '../assets/square.png';
//import triangle from '../assets/triangle.png';
//import circle from '../assets/circle.png';

const Projects = () => {
  const projects = [
    {
      title: 'Little Lemon',
      preview: lemon,
      description: 'Little Lemon Restaurant. Developed by using Create React App (ReactJS).'
    },
    {
      title: 'First Portfolio Website',
      preview: portfolio,
      description: 'First version of my portfolio website. Built using HTML, CSS and JavaScript.'
    },
    {
      title: 'Scoreboard',
      preview: scoreboard,
      description: "An interactive scoreboard containing some of Australia's NRL teams. Developed with ReactJS."
    },
    {
      title: 'Full Stack Conf',
      preview: conf,
      description: 'Conference website template. Built with HTML and Bootstrap CSS.'
    }
  ]
  
  return(
    <div className="projects-outer-container">
      <div id='projects-container'>
        <h1 data-aos='fade-up'>things I've worked on</h1>
        <p className='belle' data-aos='fade-left'>{window.innerWidth < 1200 ? `click on a project` : `hover over a project`}</p>
        <img id='arrow' src={arrow} alt='arrow' data-aos='fade-right'></img>
        <section id='projects-section' data-aos='fade-up'>
          {projects.map((element, index) => {
              return(
                <Card 
                  key={index}
                  title={element.title}
                  preview={element.preview}
                  description={element.description}
                />
              )
            })}
        </section>
      </div>
      {/*<img id='square' src={square} alt='square' width={100} height={100}/>
      <img id='triangle' src={triangle} alt='triangle' width={100} height={100}/>
      <img id='circle' src={circle} alt='circle' width={100} height={100}/>*/}
    </div>
  )
}

export default Projects;