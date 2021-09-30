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
    const [adoptionRequests, setAdoptionRequests] = useState([]);

    useEffect(() => {
        fetchData();
        if (token != "") {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            setUser(JSON.parse(window.atob(base64)).user);
        }

    }, [])

    const fetchData = async () => {
        if (role === "Admin") {
            await axios.get(URL + 'requests')
                .then((response) => setAdoptionRequests(response.data.adoptionRequests))
        }
        const result = await axios(URL + 'animals');
        setAnimals(result.data.animals);
    }

    const logOut = () => {
        localStorage.setItem('role', '');
        localStorage.setItem('token', '');
    }

    const addAdopt = async (animalId, adopted) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        let data = new FormData();
        data.append('userId', JSON.parse(window.atob(base64)).user.id);
        data.append('animalId', animalId);
        data.append('adopted', adopted);
        await axios.post(URL + 'adopt', data)
            .then((response) => alert(response.data))
            .catch((response) => alert(response.data));
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
        logOut,
        addAdopt,
        setAdoptionRequests,
        adoptionRequests
    }

    return (
        <AzilContext.Provider value={values}>
            {props.children}
        </AzilContext.Provider>
    )
} 
