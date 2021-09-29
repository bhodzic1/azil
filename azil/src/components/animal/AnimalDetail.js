import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { AzilContext } from '../../context/AzilContext';

const IMAGES_URL = "http://localhost:6868/";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px',
        marginTop: theme.spacing(8),
        display: 'flex',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
}));

const AnimalDetail = () => {
    const { id } = useParams();
    const { animals } = useContext(AzilContext);
    const [animal, setAnimal] = useState();
    const [race, setRace] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("");
    const [age, setAge] = useState("");
    const [health, setHealth] = useState("");
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
            <Card>
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Img className="authorImage" variant="top" src={IMAGES_URL + "img/" + id} />
                    <Card.Title>{ category + " - " + race }</Card.Title>
                    <Card.Text> Age: { age.toString() } </Card.Text>
                    <Card.Title>Zdravstveno stanje: </Card.Title>
                    <Card.Text> { health } </Card.Text>
                    <Button variant="primary" className="groupButton" >Adopt</Button>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default AnimalDetail;