import { useState } from 'react';
import '../css/navbar.css';
import { UilEstate } from '@iconscout/react-unicons';
import { UilUser } from '@iconscout/react-unicons';
import { UilFileAlt } from '@iconscout/react-unicons';
import { UilSuitcaseAlt } from '@iconscout/react-unicons';
import { UilScenery } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { UilApps } from '@iconscout/react-unicons';
import { UilMoon } from '@iconscout/react-unicons';
import { UilSun } from '@iconscout/react-unicons';
import {Link} from 'react-scroll';
//import { UilSearch } from '@iconscout/react-unicons';

export default function Navbar() {
    const [navState, setNavState] = useState('')
    const [Moon, setMoon] = useState(false)
    let tag =  document.getElementById("body");
      const moonClick = () =>{
         setMoon(Moon => !Moon);
      }
      let MoonIcon = Moon ? UilSun:UilMoon;

      if(Moon){
        tag.classList.add("dark-theme");
      }else if(!Moon){
        tag.classList.remove("dark-theme");
      }
      const navClick = (event, param) => {
        setNavState(navState => param);
        // console.log(event);
        // console.log(param);
       };
   const Links = [    
      {
         "id": 1,
         "title": "Home",
         "href": 'home',
         "icon": UilEstate
       },
       {
         "id": 2,
         "title": "About",
         "href": 'about',
         "icon": UilUser
       },
       {
         "id": 3,
         "title": "Skills",
         "href": 'skills',
         "icon": UilFileAlt
          
       },
       {
         "id": 4,
         "title": "Services",
         "href": 'services',
         "icon": UilSuitcaseAlt
          
       },
       {
         "id": 5,
         "title": "Porfolio",
         "href": 'portfolio',
         "icon": UilScenery
          
       },
       {
         "id": 6,
         "title": "Contact me",
         "href": 'contact',
         "icon": UilMessage
          
       }
     ]


   
  return (
       <header className='header'>
         <nav className='nav container'>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#' className='nav__logo'>Alexa</a>
             
             <div className={`nav__menu ${navState}`} id='nav-menu'>
                <ul className='nav__list grid'>
               {
                         Links && Links.map( data => {
                                return(
                                  <li key={ data.id } className='nav__item'>  
                                    <Link  to={ data.href } spy={true} smooth={true} onClick={event => navClick(event, '')} className='nav__link'>
                                           <data.icon className='nav__icon' /> { data.title }
                                    </Link>
                                  </li>
                                )
                          })
                    }

                </ul>
                <UilTimes onClick={event => navClick(event, '')} className='nav__close' id='nav-close' />
             </div>
                <div className='nav__btns'>
                  {/* theme change button */}
                     <MoonIcon onClick={moonClick} className='change-theme' id="theme-button" />

                    <div onClick={event => navClick(event, 'show-menu')} id='nav-toggle' className='nav__toggle'>
                       <UilApps />
                    </div>
                </div>
         </nav>
       </header>
  )
}
