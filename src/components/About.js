import "../css/about.css";
import { UilDownloadAlt } from "@iconscout/react-unicons";

export default function About() {
  return (
    <>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/398608239_1432623403953246_8816769731727104765_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFNe9lPC8BHJkRtJ_5qRcGJliZKc1m-eGeWJkpzWb54Z-3sSEvx9tcTLcWoP-Uh12HbFWX3AU5m0nchuOsDHql4&_nc_ohc=_Tnc7zoBp6IAX9SVDsW&_nc_ht=scontent-los2-1.xx&oh=00_AfAjPflZXVKZvmBDhgxbHGbF79xdYOF5m29eaUIuXLpg0w&oe=6551741B" alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            I'm Joel Isaiah Bobai, a skilled full-stack developer known for
            creating dynamic applications. I excels in React for front-end,
            Node.js for back-end, and React Native for mobile. My passion is
            building high-performance, scalable software that exceeds client
            expectations.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">04+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br /> project
              </span>
            </div>

            <div>
              <span className="about__info-title">01+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>
          <div className="about__buttons">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a download="" href="" className="button button--flex">
              Download CV
              <UilDownloadAlt className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
