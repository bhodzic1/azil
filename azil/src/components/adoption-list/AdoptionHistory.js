import React, { useContext, useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { AzilContext } from '../../context/AzilContext';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


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

const AdoptionHistory = () => {
    const [adopts, setAdopts] = useState([]);
    const { token } = useContext(AzilContext);
    const classes = useStyles();

    useEffect(() => {
        fetchData();
    }, [token])

    const fetchData = async () => {
        await axios.get(URL + "adopts")
            .then((response) => {
                setAdopts(response.data.adoptions)
            })
    }

    return (
        <ListGroup variant="flush">
            { adopts.map((adopt, index) => (
                <Card key={index} className={classes.card}>
                    <Card.Header>
                    <Card.Title>{ adopt.user.name + " " + adopt.user.lastname }</Card.Title>
                    </Card.Header>
                    <Card.Body className={classes.cardBody}>
                        <Card.Text className={classes.cardText}> Category: { adopt.animal.category } </Card.Text>
                        <Card.Text className={classes.cardText}> Race: { adopt.animal.race } </Card.Text>
                        <Card.Text className={classes.cardText}> Age:  { adopt.animal.age } </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </ListGroup>
    )
}

export default AdoptionHistory;