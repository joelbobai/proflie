import "../css/testimonial.css";
import { UilStar } from "@iconscout/react-unicons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Scrollbar, A11y } from "swiper";

export default function Testimonial() {
  const testimonialData = [
    {
      id: 1,
      name: "James Michael",
      description:
        "Joel's proficiency in React and Node.js was evident from the start. He created a seamless and intuitive user experience that has greatly improved our platform. His attention to detail and commitment to quality sets him apart. We look forward to.... ",
      image:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/400369456_302623519365739_7471380455353206424_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWF9g6Zzz4sDS4QS7XhnTn8EmDem0F7vLwSYN6bQXu8uYtYAd8RpqiO5kSZbSkErenNTx4Vnn8vql_UiYKh7U6&_nc_ohc=7BH6PY03T44AX_7tE1i&_nc_ht=scontent-los2-1.xx&oh=00_AfDNDUfzGBQ0A_yOGWNFXjyxxMpRdN58xp_SuAmAZNqDBA&oe=655020EC",
    },
    {
      id: 2,
      name: "Joe Aoms",
      description:
        "Working with Joel was a pleasure. His proficiency in React Native ensured our mobile app was not only functional, but also user-friendly. He went above and beyond to meet our specific requirements, and his dedication to excellence was evident in the final product.",
      image:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/277369816_1017165018889728_7588212647430126704_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFICGNHPVHNFr3oC4RYPajeJmCgnkAt4m0mYKCeQC3ibRkwGWmjfnH22ZzVX5hEYk0-LwRoQshUlRLuJJmQrk_W&_nc_ohc=A4py8J0ehQ4AX9MWmtL&_nc_ht=scontent-los2-1.xx&oh=00_AfBrr6MycR6XJSWdXbbUJHFybBZhqxF3gDzhu5sOA6Aq8w&oe=65504AD7",
    },
    {
      id: 3,
      name: "Judith Solomon",
      description:
        "Working with Joel was a game-changer for our project. His expertise in full-stack development brought our vision to life, and the end result exceeded our expectations. We highly recommend Joel for his technical prowess and dedication to delivering top-notch applications.",
      image:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/317089651_868732007617884_3732298394356144440_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHU2VWfdeCCf-1eNehq-BzKniW4zG7xZ9OeJbjMbvFn0-rRkh9PJoJyWdg9bjDt0qFbkfkAKse38D-eqU5rpWoy&_nc_ohc=jFr3uBz2cR4AX_dmI0R&_nc_ht=scontent-los2-1.xx&oh=00_AfAjjeEEkLL5URA3eDcNKfVpDSAIn0B-buoOCHylcTJykQ&oe=6550B0DC",
    },
  ];

  return (
    <>
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="testimonial__container container">
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
            effect={"flip"}
            speed={800}
            loop
          >
            {/* TESTIMONIAl 1 */}
            {testimonialData &&
              testimonialData.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <div className="testimonial__content">
                      <div className="testimonial__data">
                        <div className="testimonial__header">
                          <img
                            src={data.image}
                            alt=""
                            className="testimonial__img"
                          />

                          <div>
                            <h3 className="testimonial__name">{data.name}</h3>
                            <span className="testimonial__client">Client</span>
                          </div>
                        </div>

                        <div>
                          <UilStar className="testimonial__icon-star" />
                          <UilStar className="testimonial__icon-star" />
                          <UilStar className="testimonial__icon-star" />
                          <UilStar className="testimonial__icon-star" />
                          <UilStar className="testimonial__icon-star" />
                        </div>
                      </div>
                      <p className="testimonial__description">
                        {data.description}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
