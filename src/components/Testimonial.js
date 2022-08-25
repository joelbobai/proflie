import '../css/testimonial.css';
import { UilStar } from '@iconscout/react-unicons';
import  { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation, EffectFade, Pagination, Scrollbar, A11y } from 'swiper';


export default function Testimonial() {
   
    const testimonialData = [
        {
          "id": 1,
          "name": "Sara Smith",
          "description": "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.",
          "image": '/img/testimonial1.jpg'
        },
        {
          "id": 2,
          "name": "Joel Bobai",
          "description": "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.",
          "image": '/img/testimonial2.jpg'
        },
        {
          "id": 3,
          "name": "Amos Bobai",
          "description": "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.",
          "image": '/img/testimonial3.jpg'
        }
      ]

  return (
        <>
          <h2 className='section__title'>Testimonial</h2>
          <span className='section__subtitle'>My client saying</span>

          <div className='testimonial__container container'>
            <div>
            <Swiper
                 // install Swiper modules
                modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={2}
               // navigation
                pagination={{ clickable: true }}
               // scrollbar={{ draggable: true }}
               // onSwiper={(swiper) => console.log(swiper)}
              //  onSlideChange={() => console.log('slide change')}
                effect={'flip'}
                speed={800}
                loop
                       >
                         {/* TESTIMONIAl 1 */}
                         {
                          testimonialData && testimonialData.map( data => {
                                return(
                                  <SwiperSlide key={ data.id }>  
                                     <div className='testimonial__content'>
                                            <div className='testimonial__data'>
                                                <div className='testimonial__header'>
                                                    <img src={data.image} alt='' className='testimonial__img' />

                                                    <div>
                                                        <h3 className='testimonial__name'>{data.name}</h3>
                                                        <span className='testimonial__client'>Client</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <UilStar className='testimonial__icon-star' />
                                                    <UilStar className='testimonial__icon-star' />
                                                    <UilStar className='testimonial__icon-star' />
                                                    <UilStar className='testimonial__icon-star' />
                                                    <UilStar className='testimonial__icon-star' />
                                                </div>
                                            </div>
                                            <p className='testimonial__description'>{data.description}</p>
                                    </div>
                                  </SwiperSlide>
                                )
                          })
                    }              
                </Swiper>
            </div>
          </div>
        </>

  )
}
