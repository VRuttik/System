import React from 'react';
import "../pages/About.css";


function About() {
    return (
      <div className="about-page w3-margin">
        <div className="container-1">
          <div className="row">
            <div className="col-md-6">
              <h1>About Us</h1>
              <p>
              Advika Welfare Foundation was established in 2017 with the aim of providing higher education to destitute children
              coming from rural areas. As of June 2019, we are supporting 12 such students - 10 residential and 2 non-residential.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://dummyimage.com/600x250/000000/099ea1"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default About;
