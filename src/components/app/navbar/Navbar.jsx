import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <Link to='/'>
                  <div className="logo"><span className="highlight">ROLLING</span>MOVIE</div>
                </Link>

                <ul className="header__nav">
                  <li className="header__nav-item">
                    <Link to='/' className="header__nav-link">Inicio</Link>
                  </li>
                  <li className="header__nav-item">
                    <Link to='/catalog' className="header__nav-link">Catalogo</Link>
                  </li>

                  <li className="header__nav-item">
                    <Link to='/help' className="header__nav-link">Ayuda</Link>
                  </li>
                </ul>

                <div className="header__auth">
                  <form action="#" className="header__search">
                    <input className="header__search-input" type="text" placeholder="Buscar..." />
                    <button className="header__search-button" type="button">
                      <i className="icon ion-ios-search"></i>
                    </button>
                    <button className="header__search-close" type="button">
                      <i className="icon ion-md-close"></i>
                    </button>
                  </form>

                  <button className="header__search-btn" type="button">
                    <i className="icon ion-ios-search"></i>
                  </button>

                  <Link to='/' className="header__sign-in">
                    <i className="icon ion-ios-log-in"></i>
                    <span>Ingresar</span>
                  </Link>
                </div>

                <button className="header__btn" type="button">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar