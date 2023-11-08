import {useEffect, useState } from 'react';
import '../css/scrollup.css';
import { UilArrowUp } from '@iconscout/react-unicons';
import {Link} from 'react-scroll';



export default function Scrollup() {
     
    const [backToTopButton, setBackToTopButton] = useState(false);
  
    useEffect(() => {
        window.addEventListener("scroll", () => {
           if(window.scrollY > 200){
              setBackToTopButton(true);
              
           } else {
              setBackToTopButton(false);
           }
        })
    }, [])
   
   const scrollButton = backToTopButton ? 'show-scroll': ' ';
   
  return (  
    <Link name='Down' spy={true} smooth={true} to='home' className={`scrollup ${scrollButton}`} id='scroll-up'>
       <UilArrowUp className='scrollup__icon' />
    </Link>
  )
}
