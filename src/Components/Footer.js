import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    <footer>
     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-github"></i></a></li>
           </ul>
           <ul className="copyright">
              <li>&copy; Copyright 2020 FOSS CELL GECPKD</li>
           </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll " href="#home">
            <i className="fa fa-arrow-circle-up"></i>
          </a>
        </div>
     </div>
    </footer>
    );
  }
}

export default Footer;
