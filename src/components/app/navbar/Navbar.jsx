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

<<<<<<< HEAD
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
=======
                                <ul className="header__nav">
                                    <li className="header__nav-item">
                                        <a href="home.html" className="header__nav-link">Inicio</a>
                                        <Link to='/' className="header__nav-link"></Link>
                                    </li>
                                    <li className="header__nav-item">
                                        <a href="catalog.html" className="header__nav-link">Catalogo</a>
                                        <Link to='/' className="header__nav-link"></Link>
                                    </li>

                                    <li className="header__nav-item">
                                        <a href="help.html" className="header__nav-link">Ayuda</a>
                                        <Link to='/' className="header__nav-link"></Link>
                                    </li>
                                </ul>
>>>>>>> bf10cd7... Arreglo links del header y footer.

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

<<<<<<< HEAD
                  <button className="header_search-btn" type="button">
                    <i className="icon ion-ios-search"></i>
                  </button>
=======
                                    <a href="signin.html" className="header__sign-in">
                                        <i className="icon ion-ios-log-in"></i>
                                        <span>Ingresar</span>
                                    </a>
                                    <Link to='/' className="header__sign-in"></Link>
                                </div>
>>>>>>> bf10cd7... Arreglo links del header y footer.

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
