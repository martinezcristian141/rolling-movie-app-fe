import React from 'react';  
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Home from './home/Home'
import Movie from './movie/Movie'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/movie/:movieId" exact component={Movie}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
