
const Card = (props) => {
  return(
    <div className="card-item">
  
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <br></br>
      <p>View</p>
    </div>
  )
}

export default Card;