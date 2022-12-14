import '../css/about.css';
import { UilDownloadAlt } from '@iconscout/react-unicons';

export default function About() {
    

   
  return (
         <>
            <h2 className='section__title'>About Me</h2>
            <span className='section__subtitle'>My introduction</span>

            <div className='about__container container grid'>
                 <img src='/img/about.jpg' alt='' className='about__img' />

                 <div className='about__data'>
                    <p className='about__description'>
                        lbdjsbcdj s s hshs u cugsucgsu s ucfgusgu scugsugc cgsugcu cugsucgsu
                    </p>

                    <div className='about__info'>
                        <div>
                            <span className='about__info-title'>08+</span>
                            <span className='about__info-name'>Years <br/> experience</span>
                        </div>

                        <div>
                            <span className='about__info-title'>20+</span>
                            <span className='about__info-name'>Completed <br/> project</span>
                        </div>

                        <div>
                            <span className='about__info-title'>05+</span>
                            <span className='about__info-name'>Companies <br/> worked</span>
                        </div>
                    </div>
                        <div className='about__buttons'>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a download='' href='' className='button button--flex'>
                               Download CV<UilDownloadAlt className='button__icon' />
                            </a>
                        </div>
                 </div>
            </div>
        </>
  )
}
