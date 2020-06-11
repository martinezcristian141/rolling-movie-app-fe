import React from "react";
import { withRouter, Link } from "react-router-dom";
import MovieApi from "../../../services/MovieApi";
import "../../app/main.css";

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: { genres: [] },
    };
  }
  render() {
    return (
      <section className="section section--details contactbg">
        <div className="container largo">
          <div className="row">
            <div className="col-12">
              <h1 className="section__title">{this.state.movie.title}</h1>
            </div>

            <div className="col-12 col-lg-6">
              <div className="card card--details">
                <div className="row">
                  <div className="col-12 col-sm-5 col-lg-6 col-xl-5">
                    <div className="card__cover">
                      <img src={this.state.movie.poster_url} alt="" />
                      <span className="card__rate card__rate--green">
                        {this.state.movie.rating || "0.0"}
                      </span>
                    </div>
                  </div>

                  <div className="col-12 col-sm-7 col-lg-6 col-xl-7">
                    <div className="card__content">
                      <ul className="card__meta">
                        <li>
                          <span>Director:</span>{" "}
                          {this.state.movie.director || "Vince Gilligan"}
                        </li>
                        <li>
                          <span>Actores:</span>
                          <Link to="/#">{this.state.movie.actors}</Link>
                        </li>
                        <li>
                          <span>Genre:</span>
                          <a href="#">
                            {this.state.movie.genres.length
                              ? this.state.movie.genres.join(",")
                              : "Sin Genero"}
                          </a>
                        </li>
                        <li>
                          <span>Release year:</span> 2019
                        </li>
                        <li>
                          <span>Running time:</span> {this.state.movie.time}
                        </li>
                        <li>
                          <span>Country:</span>{" "}
                          <a href="/#">{this.state.movie.country}</a>
                        </li>
                      </ul>
                      <div className="card__description">
                        {this.state.movie.synopsis}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <video
                controls
                crossorigin
                playsinline
                poster="../img/gallery/project-1.jpg"
                id="player"
              >
                <source
                  src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                  type="video/mp4"
                  size="576"
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

  componentDidMount() {
    const id = this.props.match.params.movieId;

    MovieApi.getMovie(id).then((movie) => {
      let state = this.state;
      movie.genres = movie.genres || [];
      state.movie = movie;
      this.setState(state);
    });
  }
}

export default withRouter(Movie);
