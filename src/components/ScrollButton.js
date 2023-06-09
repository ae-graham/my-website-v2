import { useEffect } from "react";

const ScrollButton = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled_button = document.querySelector('.scroll-top');
      scrolled_button.classList.toggle('active', window.scrollY > 500)
    })
  })

  return(
    <span className='scroll-top hvr-float' onClick={scrollToTop}>&#8593;</span>
  )
}

export default ScrollButton;