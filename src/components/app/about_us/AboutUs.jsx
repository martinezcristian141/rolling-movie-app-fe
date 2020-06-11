import React from "react";
import "../../app/main.css";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <section className="section section--first section--bg contactbg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section__wrap">
                  <h2 className="section__title">Sobre Nosotros</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--grid">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="section__title">
                  <b>RollingMovie</b> – El mejor lugar para disfrutar películas
                </h2>
              </div>

              <div className="col-12">
                <p className="section__text">
                  Somos servicio de entretenimiento por streaming líder en el
                  mundo. Presente en más de 190 países, sus 183 millones de
                  suscriptores de pago disfrutan de series, documentales y
                  largometrajes de una amplia variedad de géneros y en diversos
                  idiomas. Los suscriptores de RollingMovie pueden ver las
                  series y películas que quieran, cuando quieran, donde quieran,
                  y en cualquier pantalla conectada a Internet. También pueden
                  reproducir, poner en pausa o continuar disfrutando, y todo
                  ello sin anuncios ni compromisos de permanencia.
                </p>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature">
                  <i className="icon ion-ios-tv feature__icon"></i>
                  <h3 className="feature__title">Ultra HD</h3>
                  <p className="feature__text">
                    Elige tu precio, elige tu plan. RollingMovie ofrece tres
                    planes de membresía para que elijas el más adecuado. El plan
                    que elijas determinará cuántas personas pueden ver series y
                    películas de RollingMovie al mismo tiempo y si puedes ver
                    contenido en definición estándar (SD), alta definición (HD)
                    o definición ultra alta (Ultra HD).
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature">
                  <i className="icon ion-ios-film feature__icon"></i>
                  <h3 className="feature__title">Series y Películas</h3>
                  <p className="feature__text">
                    En más de 190 países, los miembros de RollingMovie tienen
                    acceso al instante a contenido genial. Tenemos una vasta
                    biblioteca de contenido global que ofrece galardonados
                    títulos largometrajes, documentales, series y mucho más.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature">
                  <i className="icon ion-ios-trophy feature__icon"></i>
                  <h3 className="feature__title">Premios</h3>
                  <p className="feature__text">
                    Cuanto más contenido ves, mejor puede RollingMovie
                    recomendarte series y películas que seguro te encantarán.
                    Puedes reproducir, pausar y volver a ver contenido, sin
                    anuncios ni ningún tipo de compromiso.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature">
                  <i className="icon ion-ios-notifications feature__icon"></i>
                  <h3 className="feature__title">Notificaciones</h3>
                  <p className="feature__text">
                    Como miembro de RollingMovie, se te facturará una vez por
                    mes en la fecha de suscripción original. Puedes cambiar o
                    actualizar tu plan cuando quieras desde la página de tu
                    Cuenta.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature">
                  <i className="icon ion-ios-rocket feature__icon"></i>
                  <h3 className="feature__title">Dispositivos de streaming</h3>
                  <p className="feature__text">
                    Ve desde donde quieras, cuando quieras, en miles de
                    dispositivos. El software de streaming de RollingMovie te
                    permite ver al instante contenido a través de cualquier
                    dispositivo con conexión a internet que cuente con la
                    aplicación de RollingMovie, incluidos Smart TV, consolas de
                    juegos, reproductores multimedia, decodificadores,
                    smartphones y tablets.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature">
                  <i className="icon ion-ios-globe feature__icon"></i>
                  <h3 className="feature__title">
                    Subtítulos en varios idiomas
                  </h3>
                  <p className="feature__text">
                    Además, puedes descargar tus programas favoritos a tu
                    dispositivo móvil con iOS o Android o usar la aplicación
                    para Windows 10. Con la función de descarga, puedes verlos
                    donde vayas y sin conexión a internet. ¡Suscríbete y sé
                    parte de la maratón de RollingMovie!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--grid section--border">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="section__title section__title--no-margin">
                  ¿Cómo funciona?
                </h2>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="how">
                  <span className="how__number">01</span>
                  <h3 className="how__title">Crea una cuenta</h3>
                  <p className="how__text">
                    Crea una cuenta introduciendo tu email y una contraseña
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="how">
                  <span className="how__number">02</span>
                  <h3 className="how__title">Selecciona un plan</h3>
                  <p className="how__text">
                    Selecciona el plan de membresía ideal para ti
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="how">
                  <span className="how__number">03</span>
                  <h3 className="how__title">Disfruta</h3>
                  <p className="how__text">
                    Eso es todo. ¡Disfruta de nuestro streaming!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AboutUs;
