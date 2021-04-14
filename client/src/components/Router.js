import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import About from './About';
import Login from './login/Login';
import NavigationBar from './navbar/NavigationBar';


const Router = () => {

    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route path="/" component={ App } exact />
                <Route path="/about" component={ About } />
                <Route path="/login" component={ Login } />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;