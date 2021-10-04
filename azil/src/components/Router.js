import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import AdoptionList from './adoption-list/AdoptionList';
import AdoptionHistory from './adoption-list/AdoptionHistory';


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
                { role === "Admin" && <Route path="/adoption-history" component={ AdoptionHistory } /> }
                { role === "User" && <Route path="/adopts" component={AdoptionList} /> }
            </Switch>
        </BrowserRouter>
    )
}

export default Router;