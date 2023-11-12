import "../css/contact.css";
import { UilPhone } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";

export default function Contact() {
  return (
    <>
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <UilPhone className="contact__icon" />
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">
                {/* +2348027663942 
                <br /> */}
                +2348054093530
              </span>
            </div>
          </div>
          <div className="contact__information">
            <UilEnvelope className="contact__icon" />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">
                joelisaiahbobai@gmail.com
              </span>
            </div>
          </div>
         {/* <div className="contact__information">
            <UilMapMarker className="contact__icon" />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                Nigeria, Phase 1, Federal Capital Territory
              </span>
            </div>
          </div> */}
        </div> 

        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label">Name</label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label className="contact__label">Email</label>
              <input type="email" className="contact__input" />
            </div>
          </div>
          <div className="contact__content">
            <label className="contact__label">Project</label>
            <input type="text" className="contact__input" />
          </div>
          <div className="contact__content">
            <label className="contact__label">Message</label>
            <textarea
              name=""
              id=""
              cols="0"
              rows="7"
              className="contact__input"
            ></textarea>
          </div>

          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="" className="button button--flex">
              Send Message
              <UilMessage className="button__icon" />
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
