
const Card = (props) => {
  
  return(
    <div className="card-item">
      <div className='card-item-inner'>
        <div className='card-front'>
          <img src={props.preview} alt='little lemon' id='preview-img'></img>
        </div>
        <div className='card-back'>
          <h2 id='card-h2'>{props.title}</h2>
          <p>{props.description}</p>
          <p className='hvr-sweep-to-right'>View project &nbsp;&nbsp;&nbsp; &#8594;</p>
        </div>
      </div>
      <div id='outline-project'></div>
    </div>
  )
}

export default Card;