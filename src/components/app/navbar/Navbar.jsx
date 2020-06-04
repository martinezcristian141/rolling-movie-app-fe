import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (<>
            {/*<div className="Nav">
            <div className="container">
                <div id={navActive} className="nav-bar">
                    <Link style={linkStyle} to='/'>
                    <div onClick={resetNav}>Home</div>
                    </Link>
                    <Link style={linkStyle} to='/catalog'>
                    <div onClick={resetNav}>Catalog</div>
                    </Link>                  
                </div>
                <div onClick={navToggle} className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
    </div>*/}

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
                                        <a href="home.html" className="header__nav-link">Inicio</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a href="catalog.html" className="header__nav-link">Catalogo</a>
                                    </li>

                                    <li className="header__nav-item">
                                        <a href="help.html" className="header__nav-link">Ayuda</a>
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

                                    <a href="signin.html" className="header__sign-in">
                                        <i className="icon ion-ios-log-in"></i>
                                        <span>Ingresar</span>
                                    </a>
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
            </header></>
        )
    }

    componentWillMount() {
    }
}

export default Navbar