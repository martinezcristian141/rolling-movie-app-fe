import React from 'react'
import { withRouter } from "react-router-dom";
import './Movie.css'

class Movie extends React.Component {
  render() {
    return (
      <section className="section section--details section--bg" data-bg="img/section/details.jpg">
        {/* details content */}
        <div className="container">
          <div className="row">
            {/* title */}
            <div className="col-12">
              <h1 className="section__title">I Dream in Another Language</h1>
            </div>
            {/* end title */}

            {/* content */}
            <div className="col-12 col-lg-6">
              <div className="card card--details">
                <div className="row">
                  {/* card cover */}
                  <div className="col-12 col-sm-5 col-lg-6 col-xl-5">
                    <div className="card__cover">
                      <img src="img/covers/cover.jpg" alt="" />
                      <span className="card__rate card__rate--green">8.4</span>
                    </div>
                  </div>
                  {/* end card cover */}

                  {/* card content */}
                  <div className="col-12 col-sm-7 col-lg-6 col-xl-7">
                    <div className="card__content">
                      <ul className="card__meta">
                        <li><span>Director:</span> Vince Gilligan</li>
                        <li><span>Cast:</span> <a href="#">Brian Cranston</a> <a href="#">Jesse Plemons</a> <a href="#">Matt Jones</a> <a href="#">Jonathan Banks</a>, <a href="#">Charles Baker</a> <a href="#">Tess Harper</a></li>
                        <li><span>Genre:</span> <a href="#">Action</a>
                          <a href="#">Triler</a></li>
                        <li><span>Release year:</span> 2019</li>
                        <li><span>Running time:</span> 130 min</li>
                        <li><span>Country:</span> <a href="#">USA</a></li>
                      </ul>
                      <div className="b-description_readmore_wrapper js-description_readmore_wrapper">
                        <div className="card__description b-description_readmore_ellipsis">
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
									      </div>
                        <div className="b-description_readmore_button"></div>
                      </div>
                    </div>
                  </div>
                  {/* end card content */}
                </div>
              </div>
            </div>
            {/* end content */}

            {/* player */}
            <div className="col-12 col-lg-6">
              Player
            </div>
          </div>
        </div>
        {/* end details content */}
      </section >
    )
  }
}

export default withRouter(Movie)