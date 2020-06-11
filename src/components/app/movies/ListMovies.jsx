import React from "react";
import "./ListMovies.css";
import "./MovieCard.css";
import MovieApi from "../../../services/MovieApi";
import MovieCard from "./MovieCard";

class ListMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  render() {
    const listMovies = this.state.movies.map((movie) => {
      return <MovieCard movie={movie} key={movie._id} />;
    });
    return (
      <>
        <section className="section section--first section--bg contactbg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section__wrap">
                  <h2 className="section__title">Nuevas Películas</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
                aria-labelledby="1-tab"
              >
                <div className="row">{listMovies}</div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  componentDidMount() {
    MovieApi.getMovies().then((movies) => {
      let state = this.state;
      state.movies = movies;
      this.setState(state);
    });
  }
}

export default ListMovies;
