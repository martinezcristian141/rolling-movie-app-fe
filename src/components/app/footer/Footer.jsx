import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="footer__content">                                
                                <Link to='/'>
                                    <div className="logo"><span className="highlight">ROLLING</span>MOVIE</div>
                                </Link>

                                <span class="footer__copyright">© 2020 Rolling Movie<br /></span>

                                <nav class="footer__nav">
                                    <a href="about.html">Nosotros</a>
                                    <a href="contacts.html">Contacto</a>
                                    <a href="privacy.html">Política de Privacidad</a>
                                </nav>

                                <button class="footer__back" type="button">
                                    <i class="icon ion-ios-arrow-round-up"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;