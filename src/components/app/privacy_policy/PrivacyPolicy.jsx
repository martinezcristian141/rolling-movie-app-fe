import React from "react";
import "../../app/main.css";

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <>
        <section className="section section--first contactbg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section__wrap">
                  <h2 className="section__title">Política de Privacidad</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="section__text">
                  En esta Declaración de privacidad, se explican nuestras
                  prácticas, incluidas sus opciones, respecto de la
                  recopilación, uso y transmisión de cierta información,
                  incluida su información personal, por parte de la familia de
                  empresas de RollingMovie en relación con el servicio de
                  RollingMovie.
                </p>
              </div>

              <div className="col-12">
                <div className="section__list">
                  <ol>
                    <li>
                      <h4>Recopilación de la información</h4>
                      <ol>
                        <li>
                          Recibimos y almacenamos información sobre usted,
                          incluida:
                          <ol>
                            <li>
                              La información que usted nos proporciona:
                              Recopilamos la información que usted nos brinda,
                              que incluye:
                            </li>
                            <li>
                              su nombre, email, dirección o código postal,
                              forma(s) de pago y número de teléfono. En algunos
                              países, solicitamos un número de identificación
                              gubernamental para la facturación y el
                              cumplimiento de normas impositivas. Esta
                              información se recopila de diferentes maneras,
                              entre ellas, cuando usted la introduce en nuestro
                              servicio, al interactuar con nuestro servicio al
                              cliente, o al participar en encuestas o
                              promociones de marketing;
                            </li>
                          </ol>
                        </li>
                        <li>
                          la información recopilada cuando usted elige
                          proporcionar calificaciones o preferencias, configura
                          las preferencias (en la sección “Cuenta” de nuestro
                          sitio web) o nos brinda información mediante nuestro
                          servicio o de otros medios.
                        </li>
                        <li>
                          La información que recopilamos automáticamente:
                          Recopilamos información con relación a usted, el uso
                          de nuestro servicio, sus interacciones con nosotros y
                          nuestra publicidad, además de aquella información
                          relacionada con su computadora o cualquier otro
                          dispositivo compatible con RollingMovie que pudiera
                          utilizar para acceder a nuestro servicio (como los
                          sistemas de videojuegos, Smart TV, dispositivos
                          móviles, decodificadores y otros dispositivos
                          multimedia).
                        </li>
                      </ol>
                    </li>

                    <li>
                      <h4>Información de socios</h4>
                      <ol>
                        <li>
                          Recopilamos información a través de otras empresas con
                          las que usted tiene una relación (“Socios”). Entre
                          estos Socios, podrían incluirse (según los servicios
                          que use): su proveedor de servicios de internet o de
                          TV, u otros proveedores de reproductores multimedia
                          que ponen nuestro servicio a disposición en sus
                          dispositivos; operadores de telefonía móvil u otras
                          empresas que le proveen servicios y, asimismo,
                          recolectan los pagos del servicio de RollingMovie y
                          nos los hacen llegar o proporcionan promociones de
                          prepago para el servicio de RollingMovie; y
                          proveedores de plataformas de asistentes de voz que
                          permiten la interacción con nuestro servicio mediante
                          comandos de voz.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PrivacyPolicy;
