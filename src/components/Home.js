import { useState } from 'react';
import '../css/home.css';
import { UilLinkedinAlt } from '@iconscout/react-unicons';
import { UilDribbble } from '@iconscout/react-unicons';
import { UilGithubAlt } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';
import { UilMouseAlt } from '@iconscout/react-unicons';
import { UilArrowDown } from '@iconscout/react-unicons';
import MeIcon from '../MeIcon';

{/* <div className='home__blob'></div>
<img className='home__blob-img' /> */}

export default function Home() {
    const [navState, setNavState] = useState('')
    

   
  return (
            <div className='home__container container grid'>
                <div className='home__content grid'>
                    <div className='home__social'>
                        <a href='#' className='home__social-icon'>
                           <UilLinkedinAlt />
                        </a>

                        <a href='https://www.dribbble.com' className='home__social-icon'>
                            <UilDribbble />
                        </a>

                        <a href='#' className='home__social-icon'>
                            <UilGithubAlt />
                        </a>
                    </div>
                        <div className='home__img'>
                               <MeIcon />
                        </div>
                        <div className='home__data'>
                            <h1 className='home__title'>Hi I'am Bobai</h1>
                            <h3 className='home__subtitle'>Frontend developer</h3>
                            <p className='home__description'> vzxcv zv zvz</p>
                            <a href='' className='button botton--flex'>
                                 Contact Me <UilMessage size='17' className='button__icon' />
                            </a>
                        </div>
                </div>
                   <div className='home__scroll'>
                      <a href='' className='home__scroll-button button--flex'>
                         <UilMouseAlt className='home__scroll-mouse' />
                         <span className='home__scroll-name'>Scroll down</span>
                         <UilArrowDown className='home__scroll-arrow'/>
                      </a>
                   </div>
            </div>

  )
}
