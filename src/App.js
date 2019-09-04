import React from 'react'
import './App.css';
import  Create from './Create.js';
import  Connexion from './Connexion.js';
import Home from './Home';
import List from "./List";
import { BrowserRouter as Router, Route }  from 'react-router-dom'

/****-------------------------
Author: Ismael foletia
tel: 695930773 673276146
Email: ismaellongouate@gmail.com
------------------------******/
function App() {
  return (
    <Router>
            <div>
                <Route exact path="/" component={Connexion}/>
                <Route path="/create" component={Create}/>
                <Route path="/home/:p" component={List}/>
            </div>
        </Router> 
 
  );
}

export default App;