import React from "react";
import { Link } from "react-router-dom";
import "../../app/main.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__content">
                <Link to="/">
                  <div className="logo">
                    <span className="highlight">ROLLING</span>MOVIE
                  </div>
                </Link>

                <span className="footer__copyright">
                  © 2020 Rolling Movie
                  <br />
                </span>

                <nav className="footer__nav">
                  <Link to="/about_us">Nosotros</Link>
                  <Link to="/contact">Contacto</Link>
                  <Link to="/privacy_policy">Política de Privacidad</Link>
                </nav>

                <button className="footer__back" type="button">
                  <i className="icon ion-ios-arrow-round-up"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
