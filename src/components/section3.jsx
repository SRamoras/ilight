// Section3.jsx
import React from 'react';
import './section3.css'; // Import the stylesheet
import Section3Image from '../assets/formimg.png'; // Adjust the image path as needed

const Section3 = () => {
  return (
    <section className="section3-container">
      <div className="container-section-3"> 

        {/* LEFT COLUMN: Title + Image */}
        <div className="container-section-3-left">  
          <h1>
            Energize your world<br/>
            with efficient electrical solutions
          </h1>
          
          <div className="section3-image">
            <img
              src={Section3Image}
              alt="Example"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Text + Form */}
        <div className="container-section-3-right">  
          <div className="intro-container-section-3">
            <p>Start here</p>
            <p>
              iLight specializes in sustainable electrical systems for homes and businesses. 
              Fill out the form below and receive 
              personalized assistance on how to optimize your energy consumption.
            </p>
          </div>

          <div className="section3-form">
            <h2>Contact</h2>
            <form className="form-container">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message..."
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section3;