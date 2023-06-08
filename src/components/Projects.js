import Card from "./Card";

const Projects = () => {
  const projects = [
    {
      title: 'Little Lemon',
      preview: '',
      description: 'Little Lemon Restaurant. Developed by using Create React App (ReactJS).'
    },
    {
      title: 'Alex Graham website v1',
      preview: '',
      description: 'First version of my portfolio website. Built using HTML, CSS and JavaScript'
    },
    {
      title: 'Scoreboard',
      preview: '',
      description: "An interactive Scoreboard containing some of Australia's NRL teams. Developed with ReactJS"
    },
    {
      title: 'Full Stack Conf',
      preview: '',
      description: 'Conference website template. Built with HTML and Bootstrap CSS.'
    }
  ]
  
  return(
    <div className='projects-container'>
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