import Card from "./Card";
import lemon from '../assets/little-lemon.png';
import portfolio from '../assets/portfolio1.png';
import scoreboard from '../assets/scoreboard.png';
import conf from '../assets/conf.png';

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
    <div className='projects-container'>
      <h1>things I've worked on</h1>
      <section id='projects-section'>
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
  )
}

export default Projects;