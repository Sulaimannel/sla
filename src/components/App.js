import React from 'react';
import '../App.css';
import Home from './Home';
import LoginForm from './Login';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={LoginForm}/>

            </div>
        </Router>
    )
}

export default App;
