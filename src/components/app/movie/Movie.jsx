import React from "react";
import { withRouter } from "react-router-dom";
import "../../app/main.css";

class Movie extends React.Component {
  render() {
    return (
      <section className="section section--details section--bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section__title">I Dream in Another Language</h1>
            </div>

            <div className="col-12 col-lg-6">
              <div className="card card--details">
                <div className="row">
                  <div className="col-12 col-sm-5 col-lg-6 col-xl-5">
                    <div className="card__cover">
                      <img src="img/covers/cover.jpg" alt="" />
                      <span className="card__rate card__rate--green">8.4</span>
                    </div>
                  </div>

                  <div className="col-12 col-sm-7 col-lg-6 col-xl-7">
                    <div className="card__content">
                      <ul className="card__meta">
                        <li>
                          <span>Director:</span> Vince Gilligan
                        </li>
                        <li>
                          <span>Cast:</span> <a href="#">Brian Cranston</a>{" "}
                          <a href="#">Jesse Plemons</a>{" "}
                          <a href="#">Matt Jones</a>{" "}
                          <a href="#">Jonathan Banks</a>,{" "}
                          <a href="#">Charles Baker</a>{" "}
                          <a href="#">Tess Harper</a>
                        </li>
                        <li>
                          <span>Genre:</span> <a href="#">Action</a>
                          <a href="#">Triler</a>
                        </li>
                        <li>
                          <span>Release year:</span> 2019
                        </li>
                        <li>
                          <span>Running time:</span> 130 min
                        </li>
                        <li>
                          <span>Country:</span> <a href="#">USA</a>
                        </li>
                      </ul>
                      <div className="card__description">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <video
                controls
                crossorigin
                playsinline
                poster="../../../cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                id="player"
              >
                <source
                  src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                  type="video/mp4"
                  size="576"
                />
                <source
                  src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                  type="video/mp4"
                  size="720"
                />
                <source
                  src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
                  type="video/mp4"
                  size="1080"
                />

                <track
                  kind="captions"
                  label="English"
                  srclang="en"
                  src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
                  default
                />
                <track
                  kind="captions"
                  label="Français"
                  srclang="fr"
                  src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
                />

                <a
                  href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                  download
                >
                  Download
                </a>
              </video>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Movie);
