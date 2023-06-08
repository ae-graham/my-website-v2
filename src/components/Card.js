
const Card = (props) => {
  return(
    <div className="card-item">
      <img src={props.preview} alt='little lemon'></img>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>View</p>
    </div>
  )
}

export default Card;