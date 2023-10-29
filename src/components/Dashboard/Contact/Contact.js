import React from 'react';
import './Contact.css';

function Contact({ inactive }) {
  return (
    <div className={`contact-body ${!inactive ? 'contact-inactive' : ''} `}>
      <div class="section-header">
        <div class="contact-container">
          <h2>Contact Us</h2>
          <p>
            CueLogic is the company that helps for Vehicle tracking systems with
            CCTV cameras utilize a network of strategically placed cameras to
            monitor and record vehicle movements.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-home"></i>
            </div>

            <div class="contact-info-content">
              <h4>Address</h4>
              <p>
                Unit 503, 5th Floor, Godrej Castlemaine,
                <br /> Bund Garden Road, Next To Ruby Hall Clinic, <br />
                Pune, Maharashtra - 411001
              </p>
            </div>
          </div>

          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-phone"></i>
            </div>

            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>020 6724 2323</p>
            </div>
          </div>

          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-envelope"></i>
            </div>

            <div class="contact-info-content">
              <h4>Email</h4>
              <p>enquiry@cuelogic.com</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name="" />
              <span>Full Name</span>
            </div>

            <div class="input-box">
              <input type="email" required="true" name="" />
              <span>Email</span>
            </div>

            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>

            <div class="input-box">
              <input type="submit" value="Send" name="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
