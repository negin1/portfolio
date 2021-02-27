import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './About'
import Project from './Project';








function App() {
  return (
    <Router>
        <Navbar />
        <About/>
        <Project/>
          <Switch>
            <Route path='/' exact/>

        
          </Switch>

         

    </Router>
    
 
  
  );
}

export default App;
