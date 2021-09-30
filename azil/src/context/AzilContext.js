import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:6868/";

export const AzilContext = React.createContext();

export const AzilProvider = (props) => {
    const [animals, setAnimals] = useState([]);
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(localStorage.getItem('role') ? localStorage.getItem('role') : "");
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "");
    const [loggedIn, setLoggedIn] = useState(token ? true : false);

    useEffect(() => {
        fetchData();
    }, [user, role, token, loggedIn])

    const fetchData = async () => {
        const result = await axios(URL + 'animals');
        setAnimals(result.data.animals);
    }

    const logOut = () => {
        localStorage.setItem('role', '');
        localStorage.setItem('token', '');
    }

    const values = {
        animals,
        setUser,
        setRole,
        setLoggedIn,
        loggedIn,
        role,
        user,
        token,
        setToken,
        logOut
    }

    return (
        <AzilContext.Provider value={values}>
            {props.children}
        </AzilContext.Provider>
    )
} 
