// import { useState, useEffect } from 'react'
// import axios from 'axios'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './Nav/NavBar.js'
import './App.css';
import Login from './Auth/Login.js'
import Registration from './Auth/Registration.js'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.js'

import Main from './Main/Main.js'


function App() {


  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/login" component={Login}/>
          <ProtectedRoute exact path="/" component={Main}/>
          <Route path="/registration" component={Registration}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
