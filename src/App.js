import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/home';
import Shop from './pages/shop'
import React from "react";

function App() {
    return (
    <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
        </Switch>
    </Router>
    );
}

export default App;
