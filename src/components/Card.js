import { useEffect } from "react";


const Card = (props) => {
  
  useEffect(() => {
    const card_items = document.querySelectorAll('.card-item');
    for (let i=0; i < card_items.length; i++) {
      card_items[i].addEventListener('click', () => {
        card_items[i].classList.toggle('mobile', window.innerWidth < 1200)
      })
    }
  })

  return (
    <div className="card-item">
      <div className='card-item-inner'>
        <div className='card-front'>
          <img src={props.preview} alt='little lemon' id='preview-img'></img>
        </div>
        <div className='card-back'>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p className='hvr-sweep-to-right'>View project &nbsp;&nbsp;&nbsp; &#8594;</p>
        </div>
      </div>
      <div id='outline-project'></div>
    </div>
  )
    
}

export default Card;