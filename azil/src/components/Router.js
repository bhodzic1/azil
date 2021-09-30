import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from './About';
import Login from './login/Login';
import NavigationBar from './navbar/NavigationBar';
import RegisterAnimal from './registerAnimal/RegisterAnimal';
import SignUp from './signUp/SignUp';
import AnimalDetail from './animal/AnimalDetail';
import { AzilContext } from '../context/AzilContext';
import Profile from './profile/Profile';
import AdoptionRequests from './adoption-list/AdoptionRequests';


const Router = () => {
    const { role, loggedIn } = useContext(AzilContext);
    
    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route path="/" component={ Home } exact />
                <Route path="/about" component={ About } />
                { role === "Admin" && <Route path="/requests" component={ AdoptionRequests } /> }
                { !loggedIn &&  <Route path="/login" component={ Login } />}
                
                { !loggedIn && <Route path="/signup" component={ SignUp } /> }
                { role === "Admin" && <Route path="/register-animal" component={ RegisterAnimal } /> }
                <Route path="/:id/animal" component={ AnimalDetail } />
                { role === "Admin" && <Route path="/:id/profile" component={ Profile } /> }
            </Switch>
        </BrowserRouter>
    )
}

export default Router;