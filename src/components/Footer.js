import "../css/footer.css";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilTwitterAlt } from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Joel Isaiah Bobai</h1>
            <span className="footer__subtitle">Full-Stack Developer</span>
          </div>

          <ul className="footer__links">
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#contact" className="footer__link">
                Contact Me
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="https://www.facebook.com/joel.isaiahbobai"
              className="footer__social"
            >
              <UilFacebookF />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="https://www.instagram.com/joel_isaiah_bobai"
              className="footer__social"
            >
              <UilInstagram />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="https://twitter.com/bobai_joel" className="footer__social">
              <UilTwitterAlt />
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; Bobai. All right reserved</p>
      </div>
    </footer>
  );
}
