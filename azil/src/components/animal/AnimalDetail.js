import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { AzilContext } from '../../context/AzilContext';

const IMAGES_URL = "http://localhost:6868/";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px',
        display: 'flex',
        width: '100%',
    },
    card: {
        width: '60%',
        marginLeft: '20%',
        height: 'auto'
    },
    image: {
        width: '50%',
        float: 'left',
        marginRight: '10px'
    },
    cardBody: {
        
    },
    cardText: {
        marginLeft: '3%'
    },
    groupButton: {
        
    }
}));

const AnimalDetail = () => {
    const { id } = useParams();
    const [animal, setAnimal] = useState();
    const [race, setRace] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("");
    const [age, setAge] = useState("");
    const [health, setHealth] = useState("");
    const { addAdopt, loggedIn, role } = useContext(AzilContext);
    const classes = useStyles();
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        axios.get(`http://localhost:6868/animal/${id}`,)
        .then((response) => {
            setAnimal(response.data.animal)
            setRace(response.data.animal.race);
            setImage(response.data.animal.image.data);
            setAge(response.data.animal.age);
            setCategory(response.data.animal.category);
            setHealth(response.data.animal.health);
        })
    }

    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                <Card.Header>
                <Card.Title>{ category + " - " + race }</Card.Title>
                </Card.Header>
                <Card.Body className={classes.cardBody}>
                    <Card.Img className={classes.image} variant="top" src={IMAGES_URL + "img/" + id} />
                    <Card.Title className={classes.cardText}>{ category + " - " + race }</Card.Title>
                    <Card.Text className={classes.cardText}> Age: { age.toString() } </Card.Text>
                    <Card.Title>Zdravstveno stanje: </Card.Title>
                    <Card.Text> { health } </Card.Text>
                    
                    { loggedIn && role === "User" && <Button variant="primary" className={classes.groupButton} onClick={() => addAdopt(id, "wait")} >Adopt</Button> }
                </Card.Body>
                
            </Card>
        </div>
    )
}

export default AnimalDetail;