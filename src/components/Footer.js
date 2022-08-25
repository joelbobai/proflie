import '../css/footer.css';
import { UilFacebookF } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilTwitterAlt } from '@iconscout/react-unicons';


export default function Footer() {

   
   
  return (
   <footer className="footer">
       <div className='footer__bg'>
           <div className='footer__container container grid'>
              <div>
                 <h1 className='footer__title'>Alexa</h1>
                 <span className='footer__subtitle'>Frontend developer</span>
              </div>

              <ul className='footer__links'>
                 <li>
                    <a href='#services' className='footer__link'>Services</a>
                 </li>
                 <li>
                    <a href='#portfolio' className='footer__link'>Portfolio</a>
                 </li>
                 <li>
                    <a href='#contact' className='footer__link'>Contact Me</a>
                 </li>
              </ul>

               <div className='footer__socials'>
                  <a href='' className='footer__social'>
                      <UilFacebookF /> 
                  </a>
                  <a href='' className='footer__social'>
                      <UilInstagram />
                    </a>
                    <a href='' className='footer__social'>
                      <UilTwitterAlt />
                    </a>
               </div>
           </div>

           <p className='footer__copy'>&#169; Bobai. All right reserved</p>
       </div>
    </footer>
  )
}
