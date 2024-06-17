import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend or display a message)
    alert('Form submitted!');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left side - Contact Form */}
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        {/* Right side - Contact Information */}
        <div className="col-md-6">
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
    </div>
  );
}

export default Contact;


