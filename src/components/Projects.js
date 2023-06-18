import Card from "./Card";
import lemon from '../assets/little-lemon.png';
import portfolio from '../assets/portfolio1.png';
import scoreboard from '../assets/scoreboard.png';
import conf from '../assets/conf.png';
import arrow from '../assets/arrow.png';

const Projects = () => {
  const projects = [
    {
      title: 'Little Lemon',
      preview: lemon,
      description: 'Little Lemon Restaurant. Developed by using Create React App (ReactJS).',
      url: 'https://www.ae-graham.com/projects/little-lemon'
    },
    {
      title: 'First Portfolio Website',
      preview: portfolio,
      description: 'First version of my portfolio website. Built using HTML, CSS and JavaScript.',
      url: '/projects/my-website-v1/index.html'
    },
    {
      title: 'Scoreboard',
      preview: scoreboard,
      description: "An interactive scoreboard containing some of Australia's NRL teams. Developed with ReactJS.",
      url: '/projects/scoreboard/index.html'
    },
    {
      title: 'Full Stack Conf',
      preview: conf,
      description: 'Conference website template. Built with HTML and Bootstrap CSS.',
      url: '/projects/bootstrap_conf/index.html'
    }
  ]
  
  return(
    <div className="projects-outer-container">
      <div id='projects-container'>
        <h1 data-aos='fade-up'>things I've worked on</h1>
        <p className='belle' data-aos='fade-left'>{window.innerWidth < 1200 ? `click on a project` : `hover over a project`}</p>
        <img id='arrow' src={arrow} alt='arrow' data-aos='fade-right'></img>
        <section id='projects-section'>
          {projects.map((element, index) => {
              return(
                <Card 
                  key={index}
                  title={element.title}
                  preview={element.preview}
                  description={element.description}
                  url={element.url}
                />
              )
            })}
        </section>
      </div>
    </div>
  )
}

export default Projects;