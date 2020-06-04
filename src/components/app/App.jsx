import React from 'react';  
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Home from './home/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
