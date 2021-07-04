import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import About from './About';
import Login from './login/Login';
import NavigationBar from './navbar/NavigationBar';
import SignUp from './signUp/SignUp';


const Router = () => {

    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route path="/" component={ App } exact />
                <Route path="/about" component={ About } />
                <Route path="/login" component={ Login } />
                <Route path="/signup" component={ SignUp } />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;