import React from "react";
import "../../app/main.css";

class Signup extends React.Component {
  render() {
    return (
      <div className="sing contactbg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                <form action="#" className="sign__form">
                  <div className="logosign logo">
                    <span className="highlight">ROLLING</span>MOVIE
                  </div>

                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Nombre"
                    />
                  </div>

                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="sign__group">
                    <input
                      type="password"
                      className="sign__input"
                      placeholder="Contraseña"
                    />
                  </div>

                  <div className="sign__group sign__group--checkbox">
                    <input
                      id="remember"
                      name="Recordar"
                      type="checkbox"
                      checked="checked"
                    />
                    <label for="remember">
                      Acepto las{" "}
                      <a href="/privacy_policy">Políticas de Privacidad</a>
                    </label>
                  </div>

                  <button className="sign__btn" type="button">
                    Registro
                  </button>

                  <span className="sign__text">
                    ¿Ya tienes una cuenta? <a href="/signin">Ingresa!</a>
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

export default Signup;
