import React from "react";
import "../../app/main.css";

class Contact extends React.Component {
  render() {
    return (
      <>
        <section className="section section--first section--bg contactbg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section__wrap">
                  <h2 className="section__title">Contacto</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 col-xl-8">
                <div className="row">
                  <div className="col-12">
                    <h2 className="section__title">Formulario de Contacto</h2>
                  </div>

                  <div className="col-12">
                    <form action="#" className="form form--contacts">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Tu Nombre"
                      />
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Email"
                      />
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Tema por el cual nos escribes"
                      />
                      <textarea
                        id="text"
                        name="text"
                        className="form__textarea"
                        placeholder="Escribe tu mensaje ..."
                      ></textarea>
                      <button type="button" className="form__btn">
                        enviar
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5 col-xl-4">
                <div className="row">
                  <div className="col-12">
                    <h2 className="section__title">Información</h2>
                  </div>

                  <div className="col-12">
                    <p className="section__text">
                      Comunicarse con RollingMovie es ahora más fácil que nunca,
                      ya que puedes llamarnos desde la aplicación en tu tablet o
                      teléfono Android o iOS. Las llamadas desde la aplicación
                      son gratis: solo se necesita una conexión a internet o de
                      telefonía celular.
                    </p>

                    <ul className="contacts__list">
                      <li>
                        <a href="tel:5493815783030">+5493815783030</a>
                      </li>
                      <li>
                        <a href="mailto:academy@rollingcodeschool.com">
                          academy@rollingcodeschool.com{" "}
                        </a>
                      </li>
                    </ul>
                    <ul className="contacts__social">
                      <li className="facebook">
                        <a href="https://www.facebook.com/RollingCodeSchool/">
                          <i className="icon ion-logo-facebook"></i>
                        </a>
                      </li>
                      <li className="instagram">
                        <a href="https://www.instagram.com/rollingcodeschool/">
                          <i className="icon ion-logo-instagram"></i>
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="https://twitter.com/rollingcodeok">
                          <i className="icon ion-logo-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
