
const Card = (props) => {
  

  const handleRotate = (event) => {
    event.currentTarget.classList.toggle('mobile');
  }

  return (
    <div className="card-item" data-aos='fade-up' onClick={handleRotate}>
      <div className='card-item-inner'>
        <div className='card-front'>
          <img src={props.preview} alt='little lemon' id='preview-img'></img>
        </div>
        <div className='card-back'>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <a href={props.url} target="_blank" rel="noreferrer" className='hvr-sweep-to-right'>View project &nbsp;&nbsp;&nbsp; &#8594;</a>
        </div>
      </div>
      <div id='outline-project'></div>
    </div>
  )
    
}

export default Card;