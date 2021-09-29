import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:6868/";
const IMAGES_URL = "http://localhost:6868/";

export const AzilContext = React.createContext();

export const AzilProvider = (props) => {
    const [animals, setAnimals] = useState([]);
    const [user, setUser] = useState(null);
    const [role, setRole] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const result = await axios(URL + 'animals');
        setAnimals(result.data.animals);
    }

    const values = {
        animals,
        setUser,
        setRole,
        setLoggedIn,
        loggedIn,
        role,
        user
    }

    return (
        <AzilContext.Provider value={values}>
            {props.children}
        </AzilContext.Provider>
    )
} 
