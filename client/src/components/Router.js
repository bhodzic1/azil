import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from './About';
import Login from './login/Login';
import NavigationBar from './navbar/NavigationBar';
import RegisterAnimal from './registerAnimal/RegisterAnimal';
import SignUp from './signUp/SignUp';


const Router = () => {

    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route path="/" component={ Home } exact />
                <Route path="/about" component={ About } />
                <Route path="/login" component={ Login } />
                <Route path="/signup" component={ SignUp } />
                <Route path="/register-animal" component={ RegisterAnimal } />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;