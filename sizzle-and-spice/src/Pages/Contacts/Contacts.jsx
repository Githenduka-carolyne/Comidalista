import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoMdClock } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


import "../Contacts/contacts.css";

const Contacts = () => {
  return (
    <section className="cont-section">
      <div className="contact-container">
        <div className="contact-textbox">
          <h4>Get In Touch With Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            odio!.
          </p>
        </div>
      </div>
      <div className="contact-cards-container">
        <div className="contact-card">
          <div className="icon-holder">
            <FaLocationDot />
          </div>
          <div className="card-details">
            <p className="card-title">Location</p>
            <p> Lorem ipsum dolor</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="icon-holder">
            <FaPhoneVolume />
          </div>
          <div className="card-details">
            <p className="card-title">Phone Number</p>
            <p> +245723456789</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="icon-holder">
            <IoMail />
          </div>
          <div className="card-details">
            <p className="card-title">Email Us</p>
            <p> Sizzle&Spice@gmail.com</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="icon-holder">
            <IoMdClock />
          </div>
          <div className="card-details">
            <p className="card-title">Working Hours</p>
            <p>24/7 hrs </p>
          </div>
        </div>
      </div>
      <div className="form-map">
        <div className="map-side">
          <iframe
            className="maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.012317845742!2d37.158912!3d-0.7202532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1717959865419!5m2!1sen!2ske"
            width="400"
            height="240"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="social-account-container">
        <div className="social-handles-container">
          <div className="social-handles">
            <h4>Reach to us:</h4>
            <div className="social-holder">
              <p className="icon">
                <GiRotaryPhone />
              </p>
              <div className="social-icon-details">
                <p>+245723456789</p>
              </div>
            </div>
          </div>
          <div className="social-handles">
            <h4>Email Us:</h4>
            <div className="social-holder">
              <p className="icon">
                <IoMail />
              </p>
              <div className="social-icon-details">
                <p>Evergreen@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="social-handles">
            <h4>Follow Us:</h4>
            <p className="icon">
              <FaFacebook /> <FaInstagramSquare /> <FaSquareXTwitter />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
