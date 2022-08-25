import { useState } from 'react';
import '../css/qualification.css';
import { UilGraduationCap } from '@iconscout/react-unicons';
import { UilBriefcaseAlt } from '@iconscout/react-unicons';
import { UilCalendarAlt } from '@iconscout/react-unicons';




export default function Qualification() {
    const [qualificationState0, setQualificationState0] = useState('qualification__active');
    const [qualificationState1, setQualificationState1] = useState('');

    const qualificationClick0 = () => {
        setQualificationState0(qualificationClick0 => 'qualification__active');
        setQualificationState1(qualificationClick1 => '');
            
    }
    const qualificationClick1 = () => {
        setQualificationState0(qualificationClick0 => '');
        setQualificationState1(qualificationClick1 => 'qualification__active');
    }

    

   
  return (
    <>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personal journey</span>

            <div className='qualification__container container grid'>
                <div className='qualification__tabs'>
                    <div onClick={qualificationClick0} className={`qualification__button button--flex ${qualificationState0}`} data-target='#education'>
                        <UilGraduationCap className='qualification__icon' />
                        Education
                    </div>

                    <div onClick={qualificationClick1} className={`qualification__button button--flex ${qualificationState1}`} data-target='#work'>
                        <UilBriefcaseAlt className='qualification__icon' />
                        work
                    </div>
                </div>
                  <div className='qualification__sections'>
                                    {/* Qualification CONTENT 1*/}
                        <div className={`qualification__content ${qualificationState0}`} data-content id='education'>
                                     {/* Qualification 1*/}
                            <div className='qualification__data'>
                        
                                <div>
                                    <h3 className='qualification_title'>Computer</h3>
                                    <span className='qualification__subtitle'>Peru - University</span>
                                    <div className='qualification__calendar'>
                                        <UilCalendarAlt />
                                        2009 - 2014
                                    </div>
                                </div>

                                 <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                 </div>
                            </div>

                                      {/* Qualification 2*/}
                        <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                         </div>

                        <div>
                            <h3 className='qualification_title'>Web Design</h3>
                            <span className='qualification__subtitle'>Spain - Institute</span>
                            <div className='qualification__calendar'>
                                <UilCalendarAlt />
                                2014 - 2017
                            </div>
                        </div>
                    </div>

                              {/* Qualification 3*/}
                              <div className='qualification__data'>
                        
                        <div>
                            <h3 className='qualification_title'>Web Development</h3>
                            <span className='qualification__subtitle'>Peru - University</span>
                            <div className='qualification__calendar'>
                                <UilCalendarAlt />
                                2017 - 2019
                            </div>
                        </div>

                         <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                         </div>
                    </div>

                              {/* Qualification 4*/}
                         <div className='qualification__data'>
                            <div></div>
                            
                            <div>
                            <span className='qualification__rounder'></span>
                            {/* <span className='qualification__line'></span> */}
                            </div>

                        <div>
                            <h3 className='qualification_title'>Master in Ui/Ux</h3>
                            <span className='qualification__subtitle'>Peru - Institute</span>
                            <div className='qualification__calendar'>
                                <UilCalendarAlt />
                                2019 - 2021
                            </div>
                        </div>
                    </div>

                        </div>
                                         {/* Qualification CONTENT 2*/}
                        <div className={`qualification__content ${qualificationState1}`} data-content id='work'>
                                     {/* Qualification 1*/}
                            <div className='qualification__data'>
                        
                                <div>
                                    <h3 className='qualification_title'>Software Enginner</h3>
                                    <span className='qualification__subtitle'>Microsoft - peru</span>
                                    <div className='qualification__calendar'>
                                        <UilCalendarAlt />
                                        2016 - 2018
                                    </div>
                                </div>

                                 <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                 </div>
                            </div>

                                      {/* Qualification 2*/}
                        <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                         </div>

                        <div>
                            <h3 className='qualification_title'>Frontend Developer</h3>
                            <span className='qualification__subtitle'>Apple Inc - Spain</span>
                            <div className='qualification__calendar'>
                                <UilCalendarAlt />
                                2018 - 2020
                            </div>
                        </div>
                    </div>

                              {/* Qualification 3*/}
                              <div className='qualification__data'>
                        
                        <div>
                            <h3 className='qualification_title'>Ui Designer</h3>
                            <span className='qualification__subtitle'>Figma - Spain</span>
                            <div className='qualification__calendar'>
                                <UilCalendarAlt />
                                2017 - 2019
                            </div>
                        </div>

                         <div>
                            <span className='qualification__rounder'></span>
                         {/*   <span className='qualification__line'></span> */}
                         </div>
                    </div>

                              {/* Qualification 4*/}
                       {/*  <div className='qualification__data'>
                            <div></div>
                            
                            <div>
                            <span className='qualification__rounder'></span>
                             <span className='qualification__line'></span> 
                            </div>

                        <div>
                            <h3 className='qualification_title'>Master in Ui/Ux</h3>
                            <span className='qualification__subtitle'>Peru - Institute</span>
                            <div className='qualification__calendar'>
                                <UilCalendarAlt />
                                2019 - 2021
                            </div>
                        </div>
                    </div> */}

                        </div>
                  </div>
            </div>
    </>
  )
}
