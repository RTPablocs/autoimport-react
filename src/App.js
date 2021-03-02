import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/home';
import Shop from './pages/shop'
import AdPage from './pages/AdPage';
import CreateForm from "./pages/CreateForm";
import React from "react";


function App() {
    return (
    <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/ads' exact component={Shop}/>
            <Route path='/ad/:id' component={AdPage}/>
            <Route path='/new' component={CreateForm}/>
        </Switch>
    </Router>
    );
}

export default App;
