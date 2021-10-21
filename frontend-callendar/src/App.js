// import { useState, useEffect } from 'react'
// import axios from 'axios'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './Nav/NavBar.js'
import './App.css';
import Login from './Auth/Login.js'
import Main from './Main/Main.js'


function App() {


  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/main" exact component={Main}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
