import React from "react";
import "../../app/main.css";

class Signin extends React.Component {
  render() {
    return (
      <>
        <body className="body">
          <div className="sign contactbg">
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
                          name="remember"
                          type="checkbox"
                          checked="checked"
                        />
                        <label for="remember">Recuerdame</label>
                      </div>

                      <button className="sign__btn" type="button">
                        Ingresa
                      </button>

                      <span className="sign__text">
                        ¿No tienes una cuenta? <a href="/signup">Regístrate!</a>
                      </span>

                      <span className="sign__text">
                        <a href="/forgot">¿Olvidaste tu contraseña?</a>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default Signin;
