import "../css/home.css";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilDribbble } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilMouseAlt } from "@iconscout/react-unicons";
import { UilArrowDown } from "@iconscout/react-unicons";
import MeIcon from "../MeIcon";

export default function Home() {
  return (
    <div className="home__container container grid">
      <div className="home__content grid">
        <div className="home__social">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="https://www.linkedin.com/in/joel-isaiah-bobai-b74b02251/"
            className="home__social-icon"
          >
            <UilLinkedinAlt />
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="https://dribbble.com/bobai" className="home__social-icon">
            <UilDribbble />
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="https://github.com/joelbobai" className="home__social-icon">
            <UilGithubAlt />
          </a>
        </div>
        <div className="home__img">
          <MeIcon />
        </div>
        <div className="home__data">
          <h1 className="home__title">Hi I'am Joel</h1>
          <h3 className="home__subtitle">Full-Stack Developer</h3>
          <p className="home__description">
            Dedicated full-stack developer with a rich background in web and
            mobile development.
          </p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="mailto:joelbobai43@gmail.com"
            className="button botton--flex"
          >
            Contact Me <UilMessage size="17" className="button__icon" />
          </a>
        </div>
      </div>
      <div className="home__scroll">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="" className="home__scroll-button button--flex">
          <UilMouseAlt className="home__scroll-mouse" />
          <span className="home__scroll-name">Scroll down</span>
          <UilArrowDown className="home__scroll-arrow" />
        </a>
      </div>
    </div>
  );
}
