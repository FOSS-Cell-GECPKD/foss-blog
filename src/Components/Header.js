import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {
    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">FOSS GEC PKD</h1>
              <h3>
                 <span className="samecolor">Talent </span>
                 wins games, but <span className="samecolor">TeamWork </span>
                  wins championships</h3>
            <hr />
         </div>
      </div>
      <p className="scrolldown">
         <a href="#about">
            <i className="icon-down-circle"></i>
         </a>
      </p>
   </header>
    );
  }
}

export default Header;
