import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">
            
            <div className="six columns main-col">
               <h2>About Us</h2>
               <p>
                  //To be updated.
               </p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Join Us</h2>
                     <p className="address">
                        // Procedure for joining.
                     </p>
                  </div>
               </div>
            </div>

            <div className="three columns">
               <img className="pic" src = "images/favicon.jpg" alt="Foss LOGO" />
            </div>
         </div>
      </section>
    );
  }
}

export default About;
