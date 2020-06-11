import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../app/main.css";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Movie from "./movie/Movie";
import Signin from "./signin/Signin";
import AboutUs from "./about_us/AboutUs";
import Contact from "./contact/Contact";
import Help from "./help/Help";
import PrivacyPolicy from "./privacy_policy/PrivacyPolicy";
import Signup from "./signup/Signup";
import Forgot from "./forgot/Forgot";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:movieId" exact component={Movie} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/about_us" exact component={AboutUs} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/help" exact component={Help} />
          <Route path="/privacy_policy" exact component={PrivacyPolicy} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/forgot" exact component={Forgot} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
