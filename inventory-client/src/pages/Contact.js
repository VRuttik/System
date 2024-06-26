import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xdoqpezp"); // Replace "xdoqpezp" with your actual Formspr.ee form ID

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className='container'>
      <div className="container-fluid w3-margin-top">
        <div className="row">
          {/* Left side - Contact Form */}
          <div className="col-md-6 w3-margin-top border border-primary">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                {state.submitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Right side - Contact Information */}
          <div className="col-md-6 w3-margin-top border border-primary">
            <h2>Contact Information</h2>
            <p><strong>Reg. Address:</strong><br />
              4A Pradnyadeep Apt, Pradnya Park, Mahatma Soc, Kothrud, Pune 411038</p>
            <p><strong>Hostel Address:</strong><br />
              Ground Floor, Kusuma Bunglow, Plot No 3, Sahajanand Soc, Kothrud, Pune 411038</p>
            <p><strong>Email:</strong><br />
              shripadghodke@gmail.com</p>
            <p><strong>Phone:</strong><br />
              +91 9552560631</p>
            <p><strong>FB Page:</strong><br />
              <a href="https://www.facebook.com/AdvikaWelfarFoundation">@AdvikaWelfarFoundation</a></p>
          </div>
        </div>

        {/* Google Maps iframe */}
        <div className='row'>
          <div className='col-md-12'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6627023752244!2d73.79867087436732!3d18.498931469836503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfcba8f7b30d%3A0xd118bcd6f67fd8d2!2sAdvika%20Welfare%20Foundation!5e0!3m2!1sen!2sin!4v1718624363208!5m2!1sen!2sin"
              width="1330"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
