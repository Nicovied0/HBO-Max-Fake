import React from "react";
import './Css/App.css';
import { Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Home from './Components/Home';
import Movie from './Components/Movie'



function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route path="/movie/:id" component={Movie}/>
      </div>
    </React.Fragment>

  );
}

export default App;
