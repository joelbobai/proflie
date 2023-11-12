import { useRef } from "react";
import "../css/portfolio.css";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilAngleLeftB } from "@iconscout/react-unicons";
import { UilAngleRightB } from "@iconscout/react-unicons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Portfolio() {
  const swiperNevPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const portfolioData = [
    {
      id: 1,
      title: "WELFARE",
      content:
        "I created, frontend for the Kenned Omosun Charity Foundation using React involves designing a user interface that allows users to interact with the information and services provided by the foundation.",
      href: "https://kennedyomosuncharityfoundation.org",
      image: "/img/Screenshot 2023-11-08 185037.png",
    },
    {
      id: 2,
      title: "Covenant Foundation Schools",
      content:
        "I built a web application that can handle various aspects of school management, such as student enrollment, subject management, grades, and more.",
      href: "https://cfschools.com.ng/",
      image: "/img/Screenshot 2023-11-08 184849.png",
    },
    {
      id: 3,
      title: "Luxolite Consult International",
      content:
        "I created, frontend for a business consulting firm like 'Business Consulting', and I designing a user interface that allows users to interact with the information and services provided by the company",
      href: "https://luxoliteconsultint.com/",
      image: "/img/Screenshot 2023-11-08 184621.png",
    },
  ];

  return (
    <>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container">
        <div>
          <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            //  navigation
            navigation={{
              prevEl: swiperNevPrevRef.current,
              nextEl: swiperNavNextRef.current,
            }}
            pagination={{ clickable: true }}
            effect={"flip"}
            speed={800}
            slidesPerView={1}
            loop
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperNevPrevRef.current;
              swiper.params.navigation.nextEl = swiperNavNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {/* PROTFOLIO  */}
            {portfolioData &&
              portfolioData.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <div className="portfolio__content grid">
                      <img src={data.image} alt="" className="portfolio__img" />
                      <div className="portfolio__data">
                        <h3 className="portfolio__title">{data.title}</h3>
                        <p className="portfolio__description">{data.content}</p>
                        <a
                          href={data.href}
                          className="button button--flex button--small portfolio__button"
                        >
                          Demo
                          <UilArrowRight className="button__icon" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            <div className="swiperNavPrev" ref={swiperNevPrevRef}>
              <UilAngleLeftB className="swiper-portfolio-icon" />
            </div>
            <div className="swiperNavNext" ref={swiperNavNextRef}>
              <UilAngleRightB className="swiper-portfolio-icon" />
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
