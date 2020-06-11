import React from "react";
import "../../app/main.css";

class Forgot extends React.Component {
  render() {
    return (
      <div className="contactbg sign section--bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                <form action="#" className="sign__form">
                  <div className="logosign logo ">
                    <span className="highlight">ROLLING</span>MOVIE
                  </div>

                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="sign__group sign__group--checkbox">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      checked="checked"
                    />
                    <label for="remember">
                      Acepto las{" "}
                      <a href="/privacy_policy">Políticas de Privacidad</a>
                    </label>
                  </div>

                  <button className="sign__btn" type="button">
                    Enviar
                  </button>

                  <span className="sign__text">
                    Le enviaremos una contraseña a su correo electrónico.
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgot;
