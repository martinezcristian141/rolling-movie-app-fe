import React from "react";
import { Link } from "react-router-dom";
import "../../app/main.css";

class Navbar extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header_content">
                <Link to="/">
                  <div className="logo">
                    <span className="highlight">ROLLING</span>MOVIE
                  </div>
                </Link>

                <ul className="header_nav">
                  <li className="header_nav-item">
                    <Link to="/" className="header_nav-link">
                      Inicio
                    </Link>
                  </li>
                  <li className="header_nav-item">
                    <Link to="/catalog" className="header_nav-link">
                      Catálogo
                    </Link>
                  </li>

                  <li className="header_nav-item">
                    <Link to="/about_us" className="header_nav-link">
                      Sobre Nosotros
                    </Link>
                  </li>

                  <li className="header_nav-item">
                    <Link to="/help" className="header_nav-link">
                      Ayuda
                    </Link>
                  </li>
                </ul>

                <div className="header_auth">
                  <form action="#" className="headersearch">
                    <input
                      className="headersearch-input"
                      type="text"
                      placeholder="Buscar..."
                    />
                    <button className="headersearch-button" type="button">
                      <i className="icon ion-ios-search"></i>
                    </button>
                    <button className="headersearch-close" type="button">
                      <i className="icon ion-md-close"></i>
                    </button>
                  </form>

                  <button className="header_search-btn" type="button">
                    <i className="icon ion-ios-search"></i>
                  </button>

                  <Link to="/signin" className="header_sign-in">
                    <i className="icon ion-ios-log-in"></i>
                    <span>Ingresar</span>
                  </Link>
                </div>

                <button className="header_btn" type="button">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
