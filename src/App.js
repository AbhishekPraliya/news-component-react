import './App.css';
import Navbar from './Component/Navbar';
import React from 'react'
import About from "./Component/About";
import Login from "./Component/login";
import Registor from "./Component/registor";
// import NewsComponent from './Component/Newscomponent';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NewsCompo from "./FunctionCompo/NewsCompo.jsx"

function App(){

    return (
    <>
      <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
          {/* <NewsComponent /> */}
          <NewsCompo/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/registor">
            <Registor/>
          </Route>
        </Switch>


      </Router>
    </>
    
  );
  
}

export default App;
