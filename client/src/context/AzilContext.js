import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:6868/";
const IMAGES_URL = "http://localhost:6868/";

export const AzilContext = React.createContext();

export const AzilProvider = (props) => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const result = await axios(URL + 'animals');
        setAnimals(result.data.animals);
    }

    const values = {
        animals
    }

    return (
        <AzilContext.Provider value={values}>
            {props.children}
        </AzilContext.Provider>
    )
} 
