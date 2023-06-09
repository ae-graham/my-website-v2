import { useState } from "react";


const ScrollButton = () => {
  const [isVisible, setisVisible] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener('scroll', () => {
    const scrolled = document.documentElement.scrollTop; //documentElement returns the element that is the root element of the document. 
    //An element's scrollTop value is a measurement of the distance from the element's top to its topmost visible content.
    if(scrolled > 500) {
      setisVisible(true)
    } else {
      setisVisible(false)
    }
  })
  

  return(
    <span className='scroll-top hvr-float' style={{display: isVisible ? 'inline' : 'none'}} onClick={scrollToTop}>&#8593;</span>
  )
}

export default ScrollButton;