import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/navigation/Navbar.js';
import CategoryDetail from './components/category/CategoryDetail.js';
import PostDetail from './components/post/PostDetail.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'


function App() {

  

  return (
    <div clasName="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/post/:id" exact component={PostDetail}/>
          <Route path="/category/:id" exact component={CategoryDetail}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
