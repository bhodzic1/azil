import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { AzilContext } from '../../context/AzilContext';


const URL = `http://localhost:6868/`;

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px',
        display: 'flex',
        width: '100%',
    },
    card: {
        width: '60%',
        marginLeft: '20%',
        height: 'auto',
        marginTop: '40px'
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

const AdoptionRequests = () => {
    const [requests, setRequests] = useState([]);
    const { setAdoptionRequests, confirmAdoption } = useContext(AzilContext);
    const classes = useStyles();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await axios.get(URL + "requests")
            .then((response) => {
                setRequests(response.data.adoptionRequests);
                //setAdoptionRequests(response.data.adoptionRequests);
            })
    }

    const handleSubmit = (id, userId, animalId) => {
        let data = new FormData();
        data.append("id", id)
        data.append("user", userId);
        data.append("animal", animalId);
        data.append("status", "confirmed");
        confirmAdoption(data);
        window.location.reload(true);
    }

    return (
        <ListGroup variant="flush">
            { requests.map((request) => (
                <Card key={request.id} className={classes.card}>
                    <Card.Header>
                    <Card.Title>{ request.animal.category + " " + request.animal.race }</Card.Title>
                    </Card.Header>
                    <Card.Body className={classes.cardBody}>
                        <Card.Text className={classes.cardText}> Name: { request.user.name + " " + request.user.lastname } </Card.Text>
                        <Card.Text className={classes.cardText}> Email: { request.user.mail } </Card.Text>
                        <Card.Text className={classes.cardText}> Phone number:  { request.user.phone } </Card.Text>
                        <Card.Text className={classes.cardText}> Address:  { request.user.address } </Card.Text>
                        <Button className={classes.cardText} variant="primary" onClick={() => handleSubmit(request.id, request.user.id, request.animal.id)}>Confirm adoption</Button>
                    </Card.Body>
                </Card>
            ))}
        </ListGroup>
    )
}

export default AdoptionRequests;