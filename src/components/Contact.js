import React, { useState } from "react";
import "../css/contact.css";
import { UilPhone } from "@iconscout/react-unicons";
import { UilEnvelope } from "@iconscout/react-unicons";
// import { UilMapMarker } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import { UilMessage } from "@iconscout/react-unicons";
import axios from "axios";

export default function Contact() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const sendRequest = async () => {
    const res = await axios
      .post(`https://dm-mr-bobai-ckzo.vercel.app/bobai/sendmail`, inputs)
      .catch((err) => {
        errorHandle(err.response?.data);
        console.log(err, err?.response?.data);
      });

    if (res) {
      const data = await res?.data;
      // console.log(data);
      return data;
    }
  };

  const handleInputChange = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    sendRequest().then((data) => {
      successHandle(data.message);
    });
  };
  const successHandle = (value) => {
    toast.success(value, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const errorHandle = (err) => {
    toast.error(err, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

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

        <form className="contact__form grid" onSubmit={handleFormSubmit}>
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label">Name</label>
              <input
                type="text"
                className="contact__input"
                required
                name="name"
                onChange={handleInputChange}
                value={inputs.name}
              />
            </div>
            <div className="contact__content">
              <label className="contact__label">Email</label>
              <input
                type="email"
                name="email"
                className="contact__input"
                onChange={handleInputChange}
                value={inputs.email}
                required
              />
            </div>
          </div>
          <div className="contact__content">
            <label className="contact__label">Project</label>
            <input
              type="text"
              name="subject"
              className="contact__input"
              onChange={handleInputChange}
              value={inputs.subject}
              required
            />
          </div>
          <div className="contact__content">
            <label className="contact__label">Message</label>
            <textarea
              name="message"
              id=""
              cols="0"
              rows="7"
              className="contact__input"
              onChange={handleInputChange}
              value={inputs.message}
              required
            ></textarea>
          </div>

          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <button
              style={{ border: "none" }}
              type="submit"
              className="button button--flex"
            >
              Send Message
              <UilMessage className="button__icon" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
