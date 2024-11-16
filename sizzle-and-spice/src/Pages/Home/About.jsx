import React from 'react'
import Aboutpic from "../../assets/aboutpic1.jpg"
import { FaCheckCircle } from "react-icons/fa";
import "./about.css"
const About = () => {
  return (
    <section className="about-section">
      <div className="about-cards-container">
        <div className="about-image-side">
          <div className="about-image-holder">
            <img src={Aboutpic} alt="people eating burgers"></img>
          </div>
        </div>
        <div className="about-detail-side">
          <div className="details-side">
            <div className="about-textbox">
              <div className="about-heading">
                <h2>About Us</h2>
              </div>

              <div className="aboutus-details">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique, qui. Odio, illo eius laboriosam aliquam beatae
                sapiente molestiae dolorem velit neque accusamus modi mollitia
                id dolores rerum quibusdam dolorum possimus! Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Similique, qui. Odio,
                illo eius laboriosam aliquam beatae sapiente molestiae dolorem
                velit neque accusamus modi mollitia id dolores rerum quibusdam
                dolorum possimus!
              </div>

              <div className="more-details">
                <div className="different-counts">
                  <div className="detailscard">
                    <p className="numbers">10+</p>
                    <p>Years of Experience</p>
                  </div>
                </div>

                <div className="different-counts">
                  <div className="detailscard">
                    <p className="numbers">10+</p>
                    <p>Experienced Chefs</p>
                  </div>
                </div>

                <div className="different-counts">
                  <div className="detailscard">
                    <p className="numbers">90%</p>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>

              <div className="specialities">
                <h3>Specialities</h3>
              </div>

              <div className="experties">
                <div className="different-counts">
                  <div className="moredetailscard">
                    <p className="about-icon">
                      <FaCheckCircle />
                      Fine Dine
                    </p>
                    <p className="about-icon">
                      <FaCheckCircle />
                      Fast Food
                    </p>
                    <p className="about-icon">
                      <FaCheckCircle />
                      Vegeterian delicacy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About